const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const puzzleRoutes = require('./routes/puzzles');
const leaderboardRoutes = require('./routes/leaderboard');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Puzzles 2 Puzzle U API!',
    endpoints: {
      auth: '/verify-google',
      puzzle: '/puzzle/current, /submit, /check-submission, /get-solution',
      leaderboard: '/leaderboard',
      admin: '/admin/add-puzzle, /admin/update-puzzle/:week, /admin/list-puzzles, /admin/delete-puzzle/:week',
    },
  });
});

app.use('/', authRoutes);
app.use('/', puzzleRoutes);
app.use('/', leaderboardRoutes);
app.use('/admin', adminRoutes);

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});