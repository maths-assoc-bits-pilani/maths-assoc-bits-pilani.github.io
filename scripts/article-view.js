
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    const isPreview = urlParams.get('preview') === 'true';
    const container = document.getElementById('article-container');

    if (!slug) {
        container.innerHTML = '<p class="text-center text-red-500">Article not found.</p>';
        return;
    }

    try {
        let url = `${API_BASE}/articles/${slug}`;
        let headers = {};

        // If preview mode, use admin endpoint with stored key
        if (isPreview) {
            const adminKey = sessionStorage.getItem('adminKey');
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

        const article = isPreview ? data.article : data;
        renderArticle(article, container);
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p class="text-center text-red-500">Failed to load article.</p>';
    }
});

function renderArticle(article, container) {
    const { title, content, coverImage, tags, publishedAt, submittedAt, author } = article;
    const date = new Date(publishedAt || submittedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const authorName = author?.name || 'Anonymous';
    
    // Parse Markdown
    const htmlContent = DOMPurify.sanitize(marked.parse(content));

    container.innerHTML = `
        <header class="mb-10 text-center">
            <div class="flex items-center justify-center gap-3 text-xs font-sans font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
                <span class="text-black dark:text-white border-b border-black dark:border-white pb-0.5">${tags[0] || 'Article'}</span>
                <span>&bull;</span>
                <span>${date}</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">${title}</h1>
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

        <article class="prose prose-lg dark:prose-invert mx-auto font-serif">
            ${htmlContent}
        </article>
    `;

    // Trigger MathJax
    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
}
