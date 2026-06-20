let adminKey = "";

async function loadDashboard() {
    const keyInput = document.getElementById('admin-key');
    adminKey = keyInput.value.trim();

    if (!adminKey) {
        alert("Please enter the admin key.");
        return;
    }

    try {
        // Fetch pending articles
        const res = await fetch(`${API_BASE}/articles/pending`, {
            headers: { 'x-admin-key': adminKey }
        });
        const data = await res.json();

        if (data.success) {
            localStorage.setItem('adminKey', adminKey);
            
            document.getElementById('auth-section').classList.add('hidden');
            document.getElementById('dashboard-content').classList.remove('hidden');
            renderPendingArticles(data.articles);
            loadPublishedArticles(); // Also load published
            loadPuzzles(); // Also load puzzles
        } else {
            alert("Invalid Key or Server Error");
        }
    } catch (err) {
        console.error(err);
        alert("Failed to connect to server.");
    }
}

async function loadPublishedArticles() {
    try {
        const res = await fetch(`${API_BASE}/articles/published`, {
            headers: { 'x-admin-key': adminKey }
        });
        const data = await res.json();
        if (data.success) {
            renderPublishedArticles(data.articles);
        }
    } catch (err) {
        console.error(err);
    }
}

async function loadPuzzles() {
    try {
        const res = await fetch(`${API_BASE}/admin/list-puzzles`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ adminKey })
        });
        const data = await res.json();
        if (data.success) {
            renderPuzzles(data.puzzles);
        } else {
            console.error('Failed to load puzzles:', data.error);
        }
    } catch (err) {
        console.error(err);
    }
}

function switchTab(tab) {
    const pendingTab = document.getElementById('tab-pending');
    const publishedTab = document.getElementById('tab-published');
    const puzzlesTab = document.getElementById('tab-puzzles');
    
    const pendingSection = document.getElementById('pending-section');
    const publishedSection = document.getElementById('published-section');
    const puzzlesSection = document.getElementById('puzzles-section');

    // Reset all tabs
    [pendingTab, publishedTab, puzzlesTab].forEach(t => {
        t.classList.remove('border-black', 'dark:border-white');
        t.classList.add('border-transparent', 'text-gray-500');
    });

    // Hide all sections
    [pendingSection, publishedSection, puzzlesSection].forEach(s => {
        s.classList.add('hidden');
    });

    // Activate selected tab and section
    if (tab === 'pending') {
        pendingTab.classList.add('border-black', 'dark:border-white');
        pendingTab.classList.remove('border-transparent', 'text-gray-500');
        pendingSection.classList.remove('hidden');
    } else if (tab === 'published') {
        publishedTab.classList.add('border-black', 'dark:border-white');
        publishedTab.classList.remove('border-transparent', 'text-gray-500');
        publishedSection.classList.remove('hidden');
    } else if (tab === 'puzzles') {
        puzzlesTab.classList.add('border-black', 'dark:border-white');
        puzzlesTab.classList.remove('border-transparent', 'text-gray-500');
        puzzlesSection.classList.remove('hidden');
    }
}

function renderPendingArticles(articles) {
    const container = document.getElementById('pending-list');
    
    if (articles.length === 0) {
        container.innerHTML = '<p class="text-gray-500">No pending articles.</p>';
        return;
    }

    container.innerHTML = articles.map(article => `
        <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-xl font-bold mb-1">${article.title}</h3>
                    <p class="text-sm text-gray-500">By ${article.author?.name || 'Unknown'} • ${new Date(article.submittedAt).toLocaleDateString()}</p>
                </div>
                <span class="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded uppercase">Pending</span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">${article.excerpt}</p>
            
            <div class="flex gap-4 border-t border-gray-100 dark:border-gray-800 pt-4">
                <a href="/infinity-insights/article.html?slug=${article.slug}&preview=true" target="_blank" 
                   class="text-sky-500 hover:underline font-bold text-sm flex items-center">
                   👁 Preview Article
                </a>
                <div class="flex-grow"></div>
                <button onclick="updateStatus('${article._id}', 'rejected')" 
                        class="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded text-sm font-bold transition">
                    Reject
                </button>
                <button onclick="updateStatus('${article._id}', 'published')" 
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm font-bold transition shadow-sm">
                    Approve & Publish
                </button>
            </div>
        </div>
    `).join('');
}

function renderPublishedArticles(articles) {
    const container = document.getElementById('published-list');
    
    if (articles.length === 0) {
        container.innerHTML = '<p class="text-gray-500">No published articles.</p>';
        return;
    }

    container.innerHTML = articles.map(article => `
        <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-xl font-bold mb-1">${article.title}</h3>
                    <p class="text-sm text-gray-500">By ${article.author?.name || 'Unknown'} • Published ${new Date(article.publishedAt).toLocaleDateString()}</p>
                </div>
                <span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded uppercase">Published</span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">${article.excerpt || ''}</p>
            
            <div class="flex gap-4 border-t border-gray-100 dark:border-gray-800 pt-4">
                <a href="/infinity-insights/article.html?slug=${article.slug}" target="_blank" 
                   class="text-sky-500 hover:underline font-bold text-sm flex items-center">
                   👁 View Article
                </a>
                <div class="flex-grow"></div>
                <button onclick="deleteArticle('${article._id}', '${article.title.replace(/'/g, "\\'")}')" 
                        class="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded text-sm font-bold transition">
                    🗑 Delete
                </button>
            </div>
        </div>
    `).join('');
}

async function updateStatus(id, status) {
    if (!confirm(`Are you sure you want to ${status} this article?`)) return;

    try {
        const res = await fetch(`${API_BASE}/articles/${id}/status`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'x-admin-key': adminKey
            },
            body: JSON.stringify({ status })
        });

        const data = await res.json();
        if (data.success) {
            alert(`Article ${status}!`);
            loadDashboard(); // Refresh list
        } else {
            alert(data.error || "Action failed");
        }
    } catch (err) {
        console.error(err);
        alert("Server error");
    }
}

async function deleteArticle(id, title) {
    if (!confirm(`Are you sure you want to PERMANENTLY DELETE "${title}"? This cannot be undone.`)) return;

    try {
        const res = await fetch(`${API_BASE}/articles/${id}`, {
            method: 'DELETE',
            headers: { 'x-admin-key': adminKey }
        });

        const data = await res.json();
        if (data.success) {
            alert('Article deleted!');
            loadPublishedArticles(); // Refresh published list
        } else {
            alert(data.error || "Delete failed");
        }
    } catch (err) {
        console.error(err);
        alert("Server error");
    }
}

// Puzzle Admin Functions

function togglePuzzleForm(mode = 'add', puzzleData = null) {
    const container = document.getElementById('puzzle-form-container');
    const formTitle = document.getElementById('puzzle-form-title');
    const modeInput = document.getElementById('puzzle-mode');
    
    if (container.classList.contains('hidden') || mode === 'edit') {
        container.classList.remove('hidden');
        container.scrollIntoView({ behavior: 'smooth' });
        
        if (mode === 'add') {
            formTitle.textContent = 'Add New Puzzle';
            modeInput.value = 'add';
            document.getElementById('puzzle-form').reset();
            document.getElementById('puzzle-week').disabled = false;
            document.getElementById('puzzle-title').value = '';
        } else if (mode === 'edit' && puzzleData) {
            formTitle.textContent = `Edit Puzzle ${puzzleData.week}`;
            modeInput.value = 'edit';
            
            document.getElementById('puzzle-week').value = puzzleData.week;
            document.getElementById('puzzle-week').disabled = true; // Cannot change week once created
            document.getElementById('puzzle-title').value = puzzleData.title || '';
            
            // Format date for datetime-local input
            const date = new Date(puzzleData.goesLiveAt);
            const dateString = date.toISOString().slice(0, 16);
            document.getElementById('puzzle-live-at').value = dateString;
            
            document.getElementById('puzzle-active').checked = puzzleData.isActive;
            
            document.getElementById('puzzle-question-html').value = puzzleData.questionHtml || '';
            document.getElementById('puzzle-question-image').value = puzzleData.questionImageUrl || '';
            document.getElementById('puzzle-answer').value = puzzleData.correctAnswer || '';
            document.getElementById('puzzle-hints').value = JSON.stringify(puzzleData.hints || []);
            document.getElementById('puzzle-solution-html').value = puzzleData.solutionHtml || '';
            document.getElementById('puzzle-solution-image').value = puzzleData.solutionImageUrl || '';
        }
    } else {
        container.classList.add('hidden');
    }
}

function renderPuzzles(puzzles) {
    const container = document.getElementById('puzzles-list');
    
    if (!puzzles || puzzles.length === 0) {
        container.innerHTML = '<p class="text-gray-500">No puzzles found.</p>';
        return;
    }

    container.innerHTML = puzzles.map(puzzle => {
        const liveDate = new Date(puzzle.goesLiveAt);
        const isLive = puzzle.isActive && liveDate <= new Date();
        
        let statusBadge = '';
        if (!puzzle.isActive) {
            statusBadge = '<span class="bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded uppercase">Inactive</span>';
        } else if (isLive) {
            statusBadge = '<span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded uppercase">Live</span>';
        } else {
            statusBadge = '<span class="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded uppercase">Scheduled</span>';
        }

        return `
            <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-xl font-bold mb-1">Week ${puzzle.week} ${puzzle.title ? `- ${puzzle.title}` : ''}</h3>
                        <p class="text-sm text-gray-500">Scheduled for: ${liveDate.toLocaleString()}</p>
                    </div>
                    ${statusBadge}
                </div>
                
                <div class="flex gap-4 border-t border-gray-100 dark:border-gray-800 pt-4 mt-2">
                    <button onclick='togglePuzzleForm("edit", ${JSON.stringify(puzzle).replace(/'/g, "&apos;")})' 
                            class="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2 rounded text-sm font-bold transition">
                        ✏️ Edit Note
                    </button>
                    <div class="flex-grow"></div>
                    <button onclick="deletePuzzle(${puzzle.week})" 
                            class="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded text-sm font-bold transition">
                        🗑 Delete
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

async function submitPuzzleForm(event) {
    event.preventDefault();
    
    const mode = document.getElementById('puzzle-mode').value;
    const week = document.getElementById('puzzle-week').value;
    
    let hintsArray = [];
    try {
        hintsArray = JSON.parse(document.getElementById('puzzle-hints').value || '[]');
        if (!Array.isArray(hintsArray)) throw new Error("Hints must be an array");
    } catch (e) {
        alert("Invalid Hints format. Must be a valid JSON array of strings, e.g. [\"Hint 1\", \"Hint 2\"]");
        return;
    }

    const payload = {
        adminKey,
        week: parseInt(week),
        title: document.getElementById('puzzle-title').value,
        goesLiveAt: document.getElementById('puzzle-live-at').value,
        questionHtml: document.getElementById('puzzle-question-html').value,
        questionImageUrl: document.getElementById('puzzle-question-image').value,
        correctAnswer: document.getElementById('puzzle-answer').value,
        hints: hintsArray,
        solutionHtml: document.getElementById('puzzle-solution-html').value,
        solutionImageUrl: document.getElementById('puzzle-solution-image').value,
        isActive: document.getElementById('puzzle-active').checked
    };

    try {
        const endpoint = mode === 'add' ? '/admin/add-puzzle' : `/admin/update-puzzle/${week}`;
        const method = mode === 'add' ? 'POST' : 'PUT';
        
        const res = await fetch(`${API_BASE}${endpoint}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        
        if (data.success) {
            alert(data.message || `Puzzle ${mode === 'add' ? 'added' : 'updated'} successfully!`);
            togglePuzzleForm();
            loadPuzzles();
        } else {
            alert(data.error || "Operation failed");
        }
    } catch (err) {
        console.error(err);
        alert("Server error");
    }
}

async function deletePuzzle(week) {
    if (!confirm(`Are you sure you want to PERMANENTLY DELETE puzzle for week ${week}? This cannot be undone.`)) return;

    try {
        const res = await fetch(`${API_BASE}/admin/delete-puzzle/${week}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ adminKey })
        });

        const data = await res.json();
        if (data.success) {
            alert('Puzzle deleted!');
            loadPuzzles();
        } else {
            alert(data.error || "Delete failed");
        }
    } catch (err) {
        console.error(err);
        alert("Server error");
    }
}
