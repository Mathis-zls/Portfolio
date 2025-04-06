// Function to load CSS files dynamically
function loadCSSFile(filename) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filename;
    document.head.appendChild(link);
}

// Load all component CSS files
document.addEventListener('DOMContentLoaded', function() {
    // Load component-specific CSS files
    const cssFiles = [
        'css/header.css',
        'css/hero.css',
        'css/about.css',
        'css/portfolio.css',
        'css/skills.css',
        'css/contact.css',
        'css/footer.css'
    ];
    
    // Load each CSS file
    cssFiles.forEach(file => loadCSSFile(file));
});
