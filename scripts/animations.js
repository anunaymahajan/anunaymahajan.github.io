// Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe elements with animation classes
document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});

// Handle text animations
const animateText = () => {
    const texts = document.querySelectorAll('.hero-text .accent, .hero-text .dark');
    texts.forEach((text, index) => {
        text.style.transitionDelay = `${index * 0.1}s`;
        text.classList.add('visible');
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateText();
});
