document.addEventListener('DOMContentLoaded', () => {

    // Initialize EasyMDE
    const easyMDE = new EasyMDE({
        element: document.getElementById('editor'),
        spellChecker: false,
        autosave: {
            enabled: true,
            uniqueId: "infinity-insights-editor",
            delay: 1000,
        },
        toolbar: [
            "bold", "italic", "heading", 
            "quote", "unordered-list", "ordered-list", 
            "link", "image", "table", 
            "preview", "side-by-side", "fullscreen", 
            "guide"
        ],
        previewRender: function(plainText) {
            // 1. Render Markdown (using EasyMDE's default renderer)
            const preview = this.parent.markdown(plainText);

            // 2. We need to return the HTML string, but MathJax works on DOM elements.
            // So we'll return the HTML string now, and trigger MathJax typeset asynchronously.
            
            setTimeout(() => {
                // Find the preview element. EasyMDE creates a div with class 'editor-preview'
                const previewEl = document.querySelector('.editor-preview-active');
                if (previewEl && window.MathJax) {
                    window.MathJax.typesetPromise([previewEl]).catch((err) => console.log(err));
                }
            }, 10);

            return preview;
        },
    });

    // Handle Form Submission
    const form = document.getElementById('article-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Submitting...';
        submitBtn.disabled = true;

        const formData = {
            title: document.getElementById('title').value,
            excerpt: document.getElementById('excerpt').value,
            coverImage: document.getElementById('cover-image').value,
            tags: document.getElementById('tags').value.split(',').map(tag => tag.trim()).filter(t => t),
            content: easyMDE.value(),
        };

        try {
            const res = await fetch(`${API_BASE}/articles/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                alert('Article submitted successfully!');
                // Clear editor autosave
                easyMDE.clearAutosavedValue();
                window.location.href = '/infinity-insights/index.html';
            } else {
                alert(`Error: ${data.error || 'Failed to submit article'}`);
            }
        } catch (err) {
            console.error(err);
            alert('Network error. Please try again.');
        } finally {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    });
});