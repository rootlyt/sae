const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

// Theme toggle
/* toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
}); */

// Show slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto slideshow
setInterval(nextSlide, 2000);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(currentSlide);
