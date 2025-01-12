// Fetch leaderboard data and populate the table
fetch("/get-leaderboard/")
	.then((response) => response.json())
	.then((data) => {
		const leaderboard = data.leaderboard;
		const tableBody = document.getElementById("leaderboard-table");

		// Clear existing table rows
		tableBody.innerHTML = "";

		// Populate the leaderboard table
		leaderboard.forEach((row) => {
			const tr = document.createElement("tr");
			tr.innerHTML = `
            <td>${row.name}</td>
            <td>${row.puzzles_solved}</td>
            <td>${row.attempts}</td>
        `;
			tableBody.appendChild(tr);
		});
	})
	.catch((error) => console.error("Error fetching leaderboard data:", error));
