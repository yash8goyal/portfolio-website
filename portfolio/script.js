document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Toggle mobile menu on button click
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked (for mobile view)
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Add scroll effect for header (sticky effect)
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    console.log("Portfolio site loaded successfully!");
});
