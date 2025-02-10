const cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a, button');
let textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');

// Use RAF for smoother animation
const updateCursor = (e) => {
    requestAnimationFrame(() => {
        cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`; // Adjusted for new size
    });
};

document.addEventListener('mousemove', updateCursor);

// Handle text cursor
textElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('text');
    });

    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('text');
    });
});

// Handle link/button hover
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
    });

    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
    });
});

// Handle text selection
document.addEventListener('selectstart', () => {
    cursor.style.display = 'none';
});

document.addEventListener('selectionchange', () => {
    if (window.getSelection().toString().length > 0) {
        cursor.style.display = 'none';
    } else {
        cursor.style.display = 'block';
    }
});