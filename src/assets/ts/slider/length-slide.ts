import { desktop, mobile, pets, tablet } from '../variables';
import { slider } from './btn-slider';
import { renderSlides } from './slider';

tablet.addEventListener('change', getLengthSlides);
desktop.addEventListener('change', getLengthSlides);
mobile.addEventListener('change', getLengthSlides);
export function getLengthSlides() {
  let lengthSlide = 0;
  const path = document.location.pathname;

  console.log(path, 'p');

  if (desktop.matches) {
    lengthSlide = 3;
    renderSlides(pets, lengthSlide);
    slider(lengthSlide);
  }

  if (tablet.matches) {
    lengthSlide = 2;
    renderSlides(pets, lengthSlide);
    slider(lengthSlide);
  }

  if (mobile.matches) {
    lengthSlide = 1;
    renderSlides(pets, lengthSlide);
    slider(lengthSlide);
  }

  return lengthSlide;
}
