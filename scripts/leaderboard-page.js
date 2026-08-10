// Puzzles Leaderboard: fetch and render standings.
// Only runs on /puzzles/leaderboard.html.

function renderLeaderboardRows(entries) {
	const tbody = document.getElementById('leaderboard-table-body');
	tbody.replaceChildren();

	entries.forEach((entry, index) => {
		const row = document.createElement('tr');
		row.className = 'hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors';

		const rankCell = document.createElement('td');
		rankCell.className = 'py-4 px-4 font-bold';
		rankCell.textContent = index + 1;

		const nameCell = document.createElement('td');
		nameCell.className = 'py-4 px-4';
		nameCell.textContent = entry.name;

		const attemptsCell = document.createElement('td');
		attemptsCell.className = 'py-4 px-4 text-right font-mono';
		attemptsCell.textContent = entry.totalAttempts || 0;

		const solvedCell = document.createElement('td');
		solvedCell.className = 'py-4 px-4 text-right font-mono font-bold';
		solvedCell.textContent = entry.score;

		row.append(rankCell, nameCell, attemptsCell, solvedCell);
		tbody.appendChild(row);
	});
}

async function fetchLeaderboard({ noCache = false } = {}) {
	const loading = document.getElementById('loading');
	loading.style.display = 'block';
	try {
		const res = await fetch(
			`${API_BASE}/leaderboard`,
			noCache ? { cache: 'no-store' } : undefined,
		);
		const data = await res.json();
		renderLeaderboardRows(data);
	} catch (err) {
		console.error('Error fetching leaderboard:', err);
	} finally {
		loading.style.display = 'none';
	}
}

document.addEventListener('DOMContentLoaded', () => {
	fetchLeaderboard();

	const refreshBtn = document.getElementById('refresh-leaderboard');
	if (refreshBtn) {
		refreshBtn.addEventListener('click', () => fetchLeaderboard({ noCache: true }));
	}
});
