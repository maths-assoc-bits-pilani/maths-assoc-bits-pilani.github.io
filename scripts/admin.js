
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
            document.getElementById('auth-section').classList.add('hidden');
            document.getElementById('dashboard-content').classList.remove('hidden');
            renderPendingArticles(data.articles);
            loadPublishedArticles(); // Also load published
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

function switchTab(tab) {
    const pendingTab = document.getElementById('tab-pending');
    const publishedTab = document.getElementById('tab-published');
    const pendingSection = document.getElementById('pending-section');
    const publishedSection = document.getElementById('published-section');

    if (tab === 'pending') {
        pendingTab.classList.add('border-black', 'dark:border-white');
        pendingTab.classList.remove('border-transparent', 'text-gray-500');
        publishedTab.classList.remove('border-black', 'dark:border-white');
        publishedTab.classList.add('border-transparent', 'text-gray-500');
        pendingSection.classList.remove('hidden');
        publishedSection.classList.add('hidden');
    } else {
        publishedTab.classList.add('border-black', 'dark:border-white');
        publishedTab.classList.remove('border-transparent', 'text-gray-500');
        pendingTab.classList.remove('border-black', 'dark:border-white');
        pendingTab.classList.add('border-transparent', 'text-gray-500');
        publishedSection.classList.remove('hidden');
        pendingSection.classList.add('hidden');
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
                <a href="/infinity-insights/article.html?slug=${article.slug}" target="_blank" 
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
