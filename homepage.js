// homepage.js

// Toggle mobile navigation
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navOverlay = document.getElementById("navOverlay");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");
});

// Close nav when overlay is clicked
navOverlay.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
});

// Language selector
const langButton = document.getElementById("langButton");
const langDropdown = document.getElementById("langDropdown");

langButton.addEventListener("click", () => {
    langDropdown.classList.toggle("show");
});

// Handle language selection
langDropdown.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedLang = e.target.getAttribute("data-lang");
        langButton.textContent = `🌐 ${e.target.textContent}`;
        langDropdown.classList.remove("show");
        alert(`Language changed to: ${selectedLang}`);
        // In real use: trigger content translation here
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove("show");
    }
});
