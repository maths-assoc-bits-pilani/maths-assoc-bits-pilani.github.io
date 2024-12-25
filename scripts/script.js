const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB URI and Database Connection
const url = 'mongodb://localhost:27017'; // or your MongoDB Atlas URI
const dbName = 'puzzleApp';
let db;

// MongoDB connection
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  db = client.db(dbName);
  console.log('Connected to MongoDB');
});

// Submit response API
app.post('/submit-response', async (req, res) => {
  const { name, email, response, puzzleId, isCorrect } = req.body;

  // Find the user by email
  const user = await db.collection('users').findOne({ email });

  if (!user) {
    // If user doesn't exist, create a new user
    await db.collection('users').insertOne({
      name,
      email,
      puzzlesSolved: isCorrect ? 1 : 0,
      responses: [
        {
          puzzleId,
          response,
          attempts: 1,
          isCorrect
        }
      ]
    });
  } else {
    // Update existing user
    const puzzle = user.responses.find(r => r.puzzleId === puzzleId);
    if (puzzle) {
      puzzle.attempts++;
      puzzle.isCorrect = isCorrect;
    } else {
      user.responses.push({
        puzzleId,
        response,
        attempts: 1,
        isCorrect
      });
    }
    if (isCorrect) user.puzzlesSolved++;

    // Update the user in the database
    await db.collection('users').updateOne({ email }, { $set: user });
  }

  res.send({ success: true });
});

// Get leaderboard API
app.get('/leaderboard', async (req, res) => {
  const leaderboard = await db.collection('users').find().sort({ puzzlesSolved: -1 }).toArray();
  res.send(leaderboard);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.get('/api/leaderboard', async (req, res) => {
    const leaderboard = await getLeaderboard();
    res.json(leaderboard);
  });
  
