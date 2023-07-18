// JavaScript
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

// Set the initial position of the carousel
carousel.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

// Hide or show navigation buttons based on current slide
function updateButtons() {
    prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = currentIndex === slides.length - 1 ? 'hidden' : 'visible';
}

// Go to the previous slide
function goToPrevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
        updateButtons();
    }
}

// Go to the next slide
function goToNextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
        updateButtons();
    }
}

// Attach event listeners to the navigation buttons
prevBtn.addEventListener('click', goToPrevSlide);
nextBtn.addEventListener('click', goToNextSlide);
