const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const credentials = require('./credentials.json'); // path to your service account credentials

const auth = new OAuth2(
  credentials.client_id,
  credentials.client_secret
);

auth.setCredentials({
  refresh_token: credentials.refresh_token, // You can use refresh_token for OAuth2
});

// Initialize the Google Sheets API client
const sheets = google.sheets({ version: 'v4', auth });

const spreadsheetId = '1xq4gSQuMZOukHIkNDXW7SSSJixLCQSO9V1XKKxv6TYU'; // The ID of your Google Sheet

async function addResponseToSheet(name, email, isCorrect) {
    const range = 'Sheet1!A2:F';  // Range of cells to write to (adjust as needed)

    try {
        // First, fetch the current data from the spreadsheet to check for existing records
        const result = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = result.data.values || [];
        const userRowIndex = rows.findIndex(row => row[1] === email);  // Find the user by email
        
        if (userRowIndex !== -1) {
            // User already exists, update attempts and puzzles solved if needed
            const currentRow = rows[userRowIndex];
            const attempts = parseInt(currentRow[2]);
            const solved = parseInt(currentRow[4]);  // Solved flag (0 if not solved, 1 if solved)

            // If the user has already solved the puzzle, do nothing
            if (solved === 1) {
                console.log('User has already solved the puzzle for this week.');
                return;
            }

            // If user has not solved, increment attempts
            if (isCorrect) {
                // Correct answer, update attempts and puzzlesSolved
                const puzzlesSolved = parseInt(currentRow[3]) + 1;
                const updateRange = `Sheet1!A${userRowIndex + 2}:F${userRowIndex + 2}`;
                const updateValues = [[name, email, attempts + 1, puzzlesSolved, 1]];  // Solved flag set to 1

                // Update the record
                await sheets.spreadsheets.values.update({
                    spreadsheetId,
                    range: updateRange,
                    valueInputOption: 'RAW',
                    resource: { values: updateValues },
                });

                console.log('Correct answer, puzzle solved. User record updated.');

            } else {
                // Incorrect answer, increment attempts until they reach 3
                if (attempts < 3) {
                    const updateRange = `Sheet1!A${userRowIndex + 2}:F${userRowIndex + 2}`;
                    const updateValues = [[name, email, attempts + 1, currentRow[3], 0]];  // Solved flag remains 0

                    await sheets.spreadsheets.values.update({
                        spreadsheetId,
                        range: updateRange,
                        valueInputOption: 'RAW',
                        resource: { values: updateValues },
                    });

                    console.log('Incorrect answer, attempt incremented.');
                } else {
                    console.log('User has reached maximum attempts for this week.');
                }
            }

        } else {
            // New user, append new row
            const values = [[name, email, 1, isCorrect ? 1 : 0, isCorrect ? 1 : 0]];  // Initial attempt and solved status

            const resource = { values };
            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range,
                valueInputOption: 'RAW',
                resource,
            });

            console.log('New user added.');
        }
        
    } catch (error) {
        console.error('Error writing to sheet:', error);
    }
}

// Import necessary modules
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: 'http://127.0.0.1:5500',
}));

// Your other routes
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

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});




