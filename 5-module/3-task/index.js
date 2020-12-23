function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let wrapper = carousel.querySelector('.carousel__inner');
  let slides = [].slice.call(carousel.querySelectorAll('.carousel__slide'));
  let arrows = carousel.querySelectorAll('.carousel__arrow');
  let arrowPrev = carousel.querySelector('.carousel__arrow_left');
  let arrowNext = carousel.querySelector('.carousel__arrow_right');
  let step = slides[0].offsetWidth;
  let shift = 0;
  let currentSlide = 0;
  let reachedEnd = false;
  let reachedStart = true;

  arrowPrev.style.display = 'none';

  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function(e) {
      if (e.currentTarget === arrowNext && reachedEnd === false) {
        currentSlide++;
      } else if (e.currentTarget === arrowPrev && reachedStart === false) {
        currentSlide--;
      }

      shift = -currentSlide * step;

      if (shift === 0) {
        reachedStart = true;
        arrowPrev.style.display = 'none';
      } else {
        reachedStart = false;
        arrowPrev.style.display = '';
      }

      if (shift === 0 - (slides.length - 1) * step && shift !== 0) {
        reachedEnd = true;
        arrowNext.style.display = 'none';
      } else {
        reachedEnd = false;
        arrowNext.style.display = '';
      }
      wrapper.style.transform = `translateX(${shift}px)`;
    });
  }

  window.addEventListener('resize', function () {
    step = carousel.offsetWidth;
    shift = -currentSlide * step;
    wrapper.style.transform = `translateX(${shift}px)`;
  });
}
