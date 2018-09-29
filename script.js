let slides = document.querySelectorAll('.section'),
    slidePages = document.getElementById('number'),
    activeSlide = 0,
    previousSlide;
slidePages.innerHTML = `${activeSlide} / ${slides.length-1}`;

function changeSlide() {
  slides[previousSlide].classList.remove('active');
  slides[activeSlide].classList.add('active');
  slidePages.innerHTML = `${activeSlide} / ${slides.length-1}`;
}

window.addEventListener('keydown', (e) => {
  //right
  if (e.keyCode == 39) {
    previousSlide = activeSlide;
    activeSlide++;
    if (activeSlide >= slides.length-1) {
      activeSlide = slides.length-1;
    }
    changeSlide();
  }
  //left
  if (e.keyCode == 37) {
    previousSlide = activeSlide;
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = 0;
    }
    changeSlide();
  }
}); 