// scroll button
document.getElementById("scrollButton").addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
);


// Toggles the menu
const toggleMenu = () => document.querySelector(".nav2")?.classList.toggle("active");


document.addEventListener("click", (event) => {
    const menu = document.querySelector(".nav2"),
          menuIcon = document.querySelector(".menu-icon"),
          closeIcon = document.querySelector(".close-icon");

    if (menu.classList.contains("active") && !menu.contains(event.target) && !menuIcon.contains(event.target) && event.target !== closeIcon) {
        menu.classList.remove("active");
    }
});


// Close menu when clicking the "×" button
document.querySelector(".close-icon").addEventListener("click", () => {
    document.querySelector(".nav2")?.classList.remove("active");
});


// CATEGORIES SECTION
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".categories span").forEach(category => {
        category.addEventListener("click", () => {
            document.querySelector(".categories .active")?.classList.remove("active");
            document.querySelector(".logo-group.active")?.classList.remove("active");

            category.classList.add("active");
            document.querySelector(`.logo-group.${category.getAttribute("data-category")}`)?.classList.add("active");
        });
    });
});



