
document.addEventListener("DOMContentLoaded", function () {
    const arrowButton = document.querySelector(".arrow-down");
    const hiddenMovies = document.querySelector(".hidden-movies");

    arrowButton.addEventListener("click", function () {
        // Toggle the visibility of the additional movie widgets
        if (hiddenMovies.style.display === "none") {
            hiddenMovies.style.display = "block";
        } else {
            hiddenMovies.style.display = "none";
        }
    });
});

        // script.js
// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of scrollLinks) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth",
        });
    }
});
// carousel.js

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});