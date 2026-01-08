
let currentArticle = null;
let isPreviewMode = false;

marked.setOptions({ 
    breaks: true,
    gfm: true
});

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    isPreviewMode = urlParams.get('preview') === 'true';
    const container = document.getElementById('article-container');

    if (!slug) {
        container.innerHTML = '<p class="text-center text-red-500">Article not found.</p>';
        return;
    }

    try {
        let url = `${API_BASE}/articles/${slug}`;
        let headers = {};

        // If preview mode, use admin endpoint with stored key
        if (isPreviewMode) {
            const adminKey = localStorage.getItem('adminKey');
            if (!adminKey) {
                container.innerHTML = '<p class="text-red-500 text-center">Please access preview from the admin dashboard.</p>';
                return;
            }
            url = `${API_BASE}/articles/preview/${slug}`;
            headers['x-admin-key'] = adminKey;
        }

        const res = await fetch(url, { headers });
        const data = await res.json();
        if (!res.ok) throw new Error('Article not found');

        currentArticle = isPreviewMode ? data.article : data;
        renderArticle(currentArticle, container);
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p class="text-center text-red-500">Failed to load article.</p>';
    }
});

function renderArticle(article, container) {
    const { title, content, coverImage, tags, publishedAt, submittedAt, author, status } = article;
    const date = new Date(publishedAt || submittedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const authorName = author?.name || 'Anonymous';
    
    // Parse Markdown
    const htmlContent = DOMPurify.sanitize(marked.parse(content));

    // Edit button for preview mode
    const editButton = isPreviewMode ? `
        <div class="fixed bottom-6 right-6 z-50 flex gap-3">
            <button onclick="openEditModal()" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg font-sans font-bold text-sm uppercase tracking-wide transition flex items-center gap-2">
                ✏️ Edit Article
            </button>
            <span class="bg-yellow-500 text-black px-4 py-3 rounded-full shadow-lg font-sans font-bold text-xs uppercase tracking-wide">
                ${status || 'pending'}
            </span>
        </div>
    ` : '';

    container.innerHTML = `
        ${editButton}
        <header class="mb-10 text-center">
            <div class="flex items-center justify-center gap-3 text-xs font-sans font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
                <span class="text-black dark:text-white border-b border-black dark:border-white pb-0.5">${tags[0] || 'Article'}</span>
                <span>&bull;</span>
                <span>${date}</span>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">${title}</h1>
            <div class="flex items-center justify-center gap-3">
                <div class="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex items-center justify-center text-xs font-bold">
                    ${authorName.charAt(0)}
                </div>
                <span class="text-sm font-sans font-bold uppercase tracking-wide">By ${authorName}</span>
            </div>
        </header>

        ${coverImage ? `
        <div class="mb-12 overflow-hidden rounded-lg shadow-lg">
            <img src="${coverImage}" alt="${title}" class="w-full h-auto object-cover max-h-[600px]" />
        </div>
        ` : ''}

        <article class="prose md:prose-lg dark:prose-invert mx-auto font-serif">
            ${htmlContent}
        </article>

        <!-- Edit Modal -->
        <div id="edit-modal" class="fixed inset-0 bg-black/80 z-50 hidden items-center justify-center p-4" style="display: none;">
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
                <div class="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-900 z-10">
                    <h2 class="text-2xl font-bold">Edit Article</h2>
                    <button onclick="closeEditModal()" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                </div>
                <div class="p-6 space-y-6">
                    <div>
                        <label class="block text-sm font-bold uppercase tracking-wide mb-2">Title</label>
                        <input type="text" id="edit-title" value="${title.replace(/"/g, '&quot;')}" 
                            class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 select-text">
                    </div>
                    <div>
                        <label class="block text-sm font-bold uppercase tracking-wide mb-2">Excerpt</label>
                        <textarea id="edit-excerpt" rows="2" 
                            class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 select-text"></textarea>
                    </div>
                    <div>
                        <label class="block text-sm font-bold uppercase tracking-wide mb-2">Cover Image URL</label>
                        <input type="text" id="edit-coverImage" value="${coverImage || ''}" 
                            class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 select-text">
                    </div>
                    <div>
                        <label class="block text-sm font-bold uppercase tracking-wide mb-2">Tags (comma-separated)</label>
                        <input type="text" id="edit-tags" value="${(tags || []).join(', ')}" 
                            class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 select-text">
                    </div>
                    <div>
                        <label class="block text-sm font-bold uppercase tracking-wide mb-2">Content (Markdown)</label>
                        <textarea id="edit-content" rows="15" 
                            class="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 font-mono text-sm select-text cursor-text"></textarea>
                    </div>
                </div>
                <div class="p-6 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-4 sticky bottom-0 bg-white dark:bg-gray-900">
                    <button onclick="closeEditModal()" class="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        Cancel
                    </button>
                    <button onclick="saveArticle()" class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded font-bold transition">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    `;

    // Trigger MathJax
    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
}

function openEditModal() {
    const modal = document.getElementById('edit-modal');
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    // Set content via JS to avoid HTML escaping issues
    document.getElementById('edit-content').value = currentArticle.content;
    document.getElementById('edit-excerpt').value = currentArticle.excerpt || '';
}

function closeEditModal() {
    const modal = document.getElementById('edit-modal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

async function saveArticle() {
    const adminKey = localStorage.getItem('adminKey');
    if (!adminKey || !currentArticle) {
        alert('Authentication error');
        return;
    }

    const updatedData = {
        title: document.getElementById('edit-title').value.trim(),
        excerpt: document.getElementById('edit-excerpt').value.trim(),
        coverImage: document.getElementById('edit-coverImage').value.trim(),
        tags: document.getElementById('edit-tags').value.split(',').map(t => t.trim()).filter(t => t),
        content: document.getElementById('edit-content').value
    };

    if (!updatedData.title || !updatedData.content) {
        alert('Title and content are required');
        return;
    }

    try {
        const res = await fetch(`${API_BASE}/articles/${currentArticle._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-admin-key': adminKey
            },
            body: JSON.stringify(updatedData)
        });

        const data = await res.json();

        if (data.success) {
            alert('Article updated successfully!');
            closeEditModal();
            // Refresh the article
            currentArticle = data.article;
            renderArticle(currentArticle, document.getElementById('article-container'));
        } else {
            alert(data.error || 'Failed to update article');
        }
    } catch (error) {
        console.error('Error saving article:', error);
        alert('Failed to save article');
    }
}
