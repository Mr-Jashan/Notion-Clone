let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? "block" : "none";
  });
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Initial display
showSlide(currentSlide);
