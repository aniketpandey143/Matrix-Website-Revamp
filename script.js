// scroll button
document.getElementById('scrollButton').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });



// Toggles the menu
function toggleMenu() {
    const menu = document.querySelector('.nav2');
    if (menu) {
        menu.classList.toggle('active');
    }
}



// Close menu when clicking outside
document.addEventListener('click', function (event) {
    const menu = document.querySelector('.nav2');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    // Check if the menu is active and the click happened outside the menu
    if (
        menu.classList.contains('active') &&
        !menu.contains(event.target) &&
        !menuIcon.contains(event.target) &&
        event.target !== closeIcon
    ) {
        menu.classList.remove('active');
    }
});



// Close menu when clicking the "×" button
document.querySelector('.close-icon').addEventListener('click', function () {
    const menu = document.querySelector('.nav2');
    if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".categories span");
    const logoGroups = document.querySelectorAll(".logo-group");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            categories.forEach(cat => cat.classList.remove("active"));
            category.classList.add("active");

            const selectedCategory = category.getAttribute("data-category");
            logoGroups.forEach(group => group.classList.remove("active"));
            const activeGroup = document.querySelector(`.logo-group.${selectedCategory}`);
            if (activeGroup) activeGroup.classList.add("active");
        });
    });
});

