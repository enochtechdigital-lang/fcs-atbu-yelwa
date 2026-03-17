const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // 1. Close the menu when a link is clicked
        nav.classList.remove("active");

        // 2. Prevent the scroll-to-top if the link is just a "#"
        if (link.getAttribute("href") === "#") {
            e.preventDefault();
        }
    });
});


const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

