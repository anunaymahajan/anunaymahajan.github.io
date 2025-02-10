const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;
const menuLinks = document.querySelectorAll('.menu-link');

// Handle menu toggle
menuToggle.addEventListener('click', () => {
    body.classList.toggle('menu-open');
});

// Handle page transitions
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        // Add transition class
        body.classList.add('transitioning');
        
        // Wait for transition
        setTimeout(() => {
            window.location.href = href;
        }, 600);
    });
});

// Handle page load animations
document.addEventListener('DOMContentLoaded', () => {
    body.classList.add('loaded');
    
    // Animate menu items sequentially when menu is opened
    if (body.classList.contains('menu-open')) {
        menuLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.transitionDelay = `${index * 0.1}s`;
            }, 300);
        });
    }
});
