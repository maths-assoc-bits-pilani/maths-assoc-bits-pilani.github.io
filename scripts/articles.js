
document.addEventListener('DOMContentLoaded', () => {
    fetchArticles();
});

async function fetchArticles() {
    const heroSection = document.getElementById('hero-article');
    const articlesGrid = document.getElementById('articles-grid');

    try {
        const res = await fetch(`${API_BASE}/articles`);
        if (!res.ok) throw new Error('Failed to fetch articles');
        
        const articles = await res.json();

        if (articles.length === 0) {
            articlesGrid.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">No articles found.</div>';
            return;
        }

        // Clear loading state
        articlesGrid.innerHTML = '';

        // Render Hero Article (First one)
        const heroArticle = articles[0];
        renderHeroArticle(heroArticle, heroSection);
        heroSection.classList.remove('hidden');

        // Render Remaining Articles
        const remainingArticles = articles.slice(1);
        if (remainingArticles.length > 0) {
            remainingArticles.forEach(article => {
                const card = createArticleCard(article);
                articlesGrid.appendChild(card);
            });
        }

    } catch (error) {
        console.error('Error loading articles:', error);
        articlesGrid.innerHTML = '<div class="col-span-full text-center py-12 text-red-500">Failed to load articles. Please try again later.</div>';
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function renderHeroArticle(article, container) {
    const { title, excerpt, coverImage, tags, publishedAt, author, slug } = article;
    const date = formatDate(publishedAt || article.submittedAt); // Fallback to submittedAt if not published
    const tag = tags && tags.length > 0 ? tags[0] : 'General';
    const authorName = author?.name || 'Anonymous';
    
    // Default image if none provided
    const imageUrl = coverImage || 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop';

    container.innerHTML = `
        <a href="/infinity-insights/article.html?slug=${slug}" class="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- Image -->
            <div class="lg:col-span-7 overflow-hidden">
                <img
                    src="${imageUrl}"
                    alt="${title}"
                    class="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" />
            </div>

            <!-- Content -->
            <div class="lg:col-span-5 flex flex-col justify-center">
                <div class="flex items-center gap-3 text-xs font-sans font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
                    <span class="text-black dark:text-white border-b border-black dark:border-white pb-0.5">${tag}</span>
                    <span>&bull;</span>
                    <span>${date}</span>
                </div>

                <h1 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    ${title}
                </h1>

                <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    ${excerpt}
                </p>

                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex items-center justify-center text-xs font-bold">
                        ${authorName.charAt(0)}
                    </div>
                    <span class="text-sm font-sans font-bold uppercase tracking-wide">${authorName}</span>
                </div>
            </div>
        </a>
    `;
}

function createArticleCard(article) {
    const { title, excerpt, coverImage, tags, publishedAt, author, slug } = article;
    const date = formatDate(publishedAt || article.submittedAt);
    const tag = tags && tags.length > 0 ? tags[0] : 'General';
    const authorName = author?.name || 'Anonymous';
    const imageUrl = coverImage || 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop';

    const articleEl = document.createElement('article');
    articleEl.className = 'flex flex-col h-full px-6 border-l border-r border-gray-200 dark:border-gray-800 group';
    
    articleEl.innerHTML = `
        <a href="/infinity-insights/article.html?slug=${slug}" class="block overflow-hidden mb-6">
            <img
                src="${imageUrl}"
                alt="${title}"
                class="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </a>
        <div class="flex-1">
            <div class="flex items-center gap-2 text-xs font-sans font-bold tracking-widest uppercase text-gray-500 mb-3">
                <span class="text-black dark:text-white">${tag}</span>
                <span>&bull;</span>
                <span>${date}</span>
            </div>
            <h3 class="text-2xl font-bold mb-3 leading-tight group-hover:underline decoration-1 underline-offset-4">
                <a href="/infinity-insights/article.html?slug=${slug}">${title}</a>
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                ${excerpt}
            </p>
        </div>
        <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-900">
            <span class="text-xs font-sans font-bold uppercase tracking-wide text-gray-500">By ${authorName}</span>
        </div>
    `;
    
    return articleEl;
}
