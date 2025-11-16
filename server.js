const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// change this each week
const CURRENT_WEEK = 'week4';
const CORRECT_ANSWER = '102'; // should always be lowercase

const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  week: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Submission = mongoose.model('Submission', submissionSchema);

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: String,
  email: String,
  picture: String,
});
const User = mongoose.model('User', userSchema);

const puzzleSchema = new mongoose.Schema({
  week: { type: String, required: true, unique: true },
  questionHtml: { type: String, required: true },
  questionImageUrl: { type: String },
  solutionHtml: { type: String, required: true },
  solutionImageUrl: { type: String },
  correctAnswer: { type: String, required: true },
  goesLiveAt: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

const Puzzle = mongoose.model('Puzzle', puzzleSchema);

app.get('/', (req, res) => {
  res.send('Welcome to the Puzzles Backend!');
});

app.post('/auth/google', async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const email = payload.email;
    if (!email.endsWith('bits-pilani.ac.in')) {
      return res
        .status(403)
        .json({ error: 'Only BITS Pilani emails are allowed.' });
    }
    let user = await User.findOne({ googleId: payload.sub });
    if (!user) {
      user = await User.create({
        googleId: payload.sub,
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      });
    }
    return res.json({
      success: true,
      user: { name: user.name, email: user.email, picture: user.picture },
    });
  } catch (err) {
    console.error('Error in /auth/google:', err);
    return res
      .status(500)
      .json({ error: 'Server error. Please try again later.' });
  }
});

// Get current active puzzle
async function getCurrentPuzzle() {
  const now = new Date();
  return await Puzzle.findOne({
    isActive: true,
    goesLiveAt: { $lte: now },
  }).sort({ goesLiveAt: -1 });
}

// Get puzzle details (without solution)
app.get('/puzzle/current', async (req, res) => {
  try {
    const puzzle = await getCurrentPuzzle();

    if (!puzzle) {
      return res.status(404).json({ error: 'No active puzzle found' });
    }

    res.json({
      success: true,
      week: puzzle.week,
      questionHtml: puzzle.questionHtml,
      questionImageUrl: puzzle.questionImageUrl,
    });
  } catch (error) {
    console.error('Error fetching current puzzle:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Check submission status (updated to use DB)
app.post('/check-submission', async (req, res) => {
  try {
    const { email } = req.body;
    const puzzle = await getCurrentPuzzle();

    if (!puzzle) {
      return res.status(404).json({ error: 'No active puzzle' });
    }

    const existingCorrect = await Submission.findOne({
      email,
      week: puzzle.week,
      isCorrect: true,
    });

    const attemptCount = await Submission.countDocuments({
      email,
      week: puzzle.week,
    });

    res.json({
      success: true,
      alreadyCorrect: !!existingCorrect,
      attemptCount,
      maxAttemptsReached: attemptCount >= 3,
      canSubmit: !existingCorrect && attemptCount < 3,
    });
  } catch (error) {
    console.error('Error checking submission:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Submit answer (updated to use DB)
app.post('/submit', async (req, res) => {
  try {
    const { name, email, answer } = req.body;
    const puzzle = await getCurrentPuzzle();

    if (!puzzle) {
      return res.status(404).json({ error: 'No active puzzle' });
    }

    const existingCorrect = await Submission.findOne({
      email,
      week: puzzle.week,
      isCorrect: true,
    });

    if (existingCorrect) {
      return res.status(400).json({
        error: 'You have already submitted a correct answer for this puzzle.',
      });
    }

    const attemptCount = await Submission.countDocuments({
      email,
      week: puzzle.week,
    });

    if (attemptCount >= 3) {
      return res.status(400).json({
        error: 'You have reached the maximum number of attempts for this puzzle.',
      });
    }

    const isCorrect = answer.trim() === puzzle.correctAnswer.trim();

    const newSubmission = new Submission({
      name,
      email,
      week: puzzle.week,
      isCorrect,
    });

    await newSubmission.save();

    if (isCorrect) {
      let user = await User.findOne({ email });
      if (user) {
        user.score += 1;
        await user.save();
      } else {
        user = new User({ name, email, score: 1 });
        await user.save();
      }

      await updateLeaderboard();
    }

    res.json({
      success: true,
      isCorrect,
      attemptsLeft: 3 - (attemptCount + 1),
    });
  } catch (error) {
    console.error('Error during submission:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get solution (updated to use DB)
app.post('/get-solution', async (req, res) => {
  try {
    const { email, idToken } = req.body;

    const ticket = await client.verifyIdToken({
      idToken,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    if (payload.email !== email) {
      return res.status(403).json({ error: 'Email mismatch' });
    }

    const puzzle = await getCurrentPuzzle();

    if (!puzzle) {
      return res.status(404).json({ error: 'No active puzzle' });
    }

    const correctSubmission = await Submission.findOne({
      email,
      week: puzzle.week,
      isCorrect: true,
    });

    const attemptCount = await Submission.countDocuments({
      email,
      week: puzzle.week,
    });

    const canViewSolution = correctSubmission || attemptCount >= 3;

    if (!canViewSolution) {
      return res.status(403).json({
        error:
          'You must submit a correct answer or exhaust all attempts to view the solution.',
      });
    }

    res.json({
      success: true,
      solutionHtml: puzzle.solutionHtml,
      solutionImageUrl: puzzle.solutionImageUrl,
    });
  } catch (error) {
    console.error('Error in /get-solution:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await Submission.aggregate([
      {
        $group: {
          _id: { email: '$email', name: '$name' },
          totalAttempts: { $sum: 1 },
          problemsSolved: { $sum: { $cond: ['$isCorrect', 1, 0] } },
        },
      },
      { $sort: { problemsSolved: -1, totalAttempts: 1 } },
      { $limit: 15 },
      {
        $project: {
          _id: 0,
          name: '$_id.name',
          email: '$_id.email',
          totalAttempts: 1,
          problemsSolved: 1,
        },
      },
    ]);
    res.json(leaderboard);
  } catch (error) {
    console.error('Error in /leaderboard route:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

app.post('/admin/add-puzzle', async (req, res) => {
  try {
    const { adminKey, week, questionHtml, questionImageUrl, solutionHtml, solutionImageUrl, correctAnswer, goesLiveAt } = req.body;

    if (adminKey !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const existingPuzzle = await Puzzle.findOne({ week });
    if (existingPuzzle) {
      return res.status(400).json({ error: 'Puzzle for this week already exists' });
    }

    const newPuzzle = new Puzzle({
      week,
      questionHtml,
      questionImageUrl,
      solutionHtml,
      solutionImageUrl,
      correctAnswer,
      goesLiveAt: new Date(goesLiveAt),
      isActive: true,
    });

    await newPuzzle.save();

    res.json({
      success: true,
      message: `Puzzle for ${week} added successfully!`,
      puzzle: newPuzzle,
    });
  } catch (error) {
    console.error('Error adding puzzle:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

// Admin endpoint to list all puzzles
app.post('/admin/list-puzzles', async (req, res) => {
  try {
    const { adminKey } = req.body;

    if (adminKey !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: 'Unauthorized: Invalid admin key' });
    }

    const puzzles = await Puzzle.find({}).sort({ goesLiveAt: -1 });

    res.json({
      success: true,
      puzzles: puzzles.map(p => ({
        week: p.week,
        goesLiveAt: p.goesLiveAt,
        isActive: p.isActive,
        createdAt: p.createdAt
      }))
    });
  } catch (error) {
    console.error('Error listing puzzles:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
