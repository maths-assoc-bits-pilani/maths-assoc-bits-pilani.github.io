const express = require('express');
const app = express();
app.use(express.json());  // Middleware to parse JSON bodies

app.post('/submit-response', async (req, res) => {
  const { name, email, response, puzzleId, isCorrect } = req.body;

  // Process the data (check if correct, update attempts, etc.)
  let status = '';
  if (isCorrect) {
    // Update the spreadsheet for a correct response
    await addResponseToSheet(name, email, attempts + 1, puzzlesSolved + 1);
    status = 'correct';
  } else {
    // Update for incorrect response (increment attempts)
    attempts += 1;
    if (attempts >= 3) {
      status = 'maxAttempts';
    } else {
      status = 'incorrect';
    }
  }

  // Send the status back to the frontend
  res.json({ status });
});
