// ORIA Site Map - Simple JavaScript utilities
// The main functionality uses Mermaid.js for the interactive diagram

console.log('ORIA Site Map loaded successfully');

// Optional: Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add click tracking for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Opening external link:', this.href);
        });
    });
});

// Mermaid diagram is auto-initialized in the HTML via script tag
