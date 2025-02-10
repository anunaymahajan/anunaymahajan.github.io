document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const currentTheme = localStorage.getItem("theme");

    // Set initial theme
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeIcon.innerHTML = `<path d="M21.75 15a9 9 0 0 1-9.75-9.75 7 7 0 1 0 9.75 9.75z"/>`;
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            themeIcon.innerHTML = `<circle cx="12" cy="12" r="5"></circle>
                                   <path d="M12 1v2m0 18v2m-11-11h2m18 0h2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2m-3.22 3.22l1.42 1.42M4.22 19.78l1.42-1.42"></path>`;
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            themeIcon.innerHTML = `<path d="M21.75 15a9 9 0 0 1-9.75-9.75 7 7 0 1 0 9.75 9.75z"/>`;
        }
    });
});