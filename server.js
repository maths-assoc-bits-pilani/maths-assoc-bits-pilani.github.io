const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://rishabjha098:F7QzcbD8-VAiqR.@cluster0.sq6fc.mongodb.net/puzzlesDB?retryWrites=true&w=majority&appName=Cluster0';
const GOOGLE_CLIENT_ID = '83394014914-n0r1a77ksmc9oojjc7r40c3blc4fe1gk.apps.googleusercontent.com';

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB!'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

const CURRENT_WEEK = 'week1';
const CORRECT_ANSWER = '2';

const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  week: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Submission = mongoose.model('Submission', submissionSchema);

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: String,
  email: String,
  picture: String
});
const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.send('Welcome to the Puzzles Backend!');
});

app.post('/auth/google', async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID
    });
    const payload = ticket.getPayload();
    const email = payload.email;
    if (!email.endsWith("bits-pilani.ac.in")) {
      return res.status(403).json({ error: "Only BITS Pilani emails are allowed." });
    }
    let user = await User.findOne({ googleId: payload.sub });
    if (!user) {
      user = await User.create({
        googleId: payload.sub,
        name: payload.name,
        email: payload.email,
        picture: payload.picture
      });
    }
    return res.json({ success: true, user: { name: user.name, email: user.email, picture: user.picture } });
  } catch (err) {
    console.error("Error in /auth/google:", err);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
});

app.post('/submit', async (req, res) => {
  try {
    const { name, email, answer } = req.body;
    if (!name || !email || !answer) {
      return res.status(400).json({ error: 'Missing name, email, or answer.' });
    }
    const existingCorrect = await Submission.findOne({ email, week: CURRENT_WEEK, isCorrect: true });
    if (existingCorrect) {
      return res.status(400).json({ error: 'Correct answer already submitted for this puzzle/week.' });
    }
    const attemptCount = await Submission.countDocuments({ email, week: CURRENT_WEEK });
    if (attemptCount >= 3) {
      return res.status(400).json({ error: 'Max attempts reached for this puzzle/week.' });
    }
    const isCorrect = answer.trim() === CORRECT_ANSWER;
    const newSubmission = new Submission({ name, email, week: CURRENT_WEEK, isCorrect });
    await newSubmission.save();
    res.json({ success: true, isCorrect });
  } catch (error) {
    console.error('Error in /submit route:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

app.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await Submission.aggregate([
      {
        $group: {
          _id: { email: '$email', name: '$name' },
          totalAttempts: { $sum: 1 },
          problemsSolved: { $sum: { $cond: ['$isCorrect', 1, 0] } }
        }
      },
      { $sort: { problemsSolved: -1, totalAttempts: 1 } },
      { $limit: 10 },
      {
        $project: {
          _id: 0,
          name: '$_id.name',
          email: '$_id.email',
          totalAttempts: 1,
          problemsSolved: 1
        }
      }
    ]);
    res.json(leaderboard);
  } catch (error) {
    console.error('Error in /leaderboard route:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
