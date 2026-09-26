/* =========================================
   SANJANA THUMATY - PORTFOLIO JAVASCRIPT
   ========================================= */

const navbar = document.querySelector(".navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");


/* =========================================
   NAVBAR SCROLL EFFECT
   ========================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   MOBILE MENU
   ========================================= */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
   ========================================= */

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =========================================
   ACTIVE NAVIGATION LINK
   ========================================= */

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================= */

document.addEventListener("click", (event) => {

    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navLinks.classList.remove("open");
    }

});


/* =========================================
   KEYBOARD ACCESSIBILITY
   ========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        navLinks.classList.remove("open");
    }

});


/* =========================================
   INITIAL STATE
   ========================================= */

window.addEventListener("load", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    }

});
