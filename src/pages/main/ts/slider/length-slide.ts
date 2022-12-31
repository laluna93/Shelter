import { getPets } from '../get-pets';
import { slider } from './btn-slider';
import { renderSlides } from './slider';

const pets = getPets();
const desktop = window.matchMedia('(min-width: 1200px)');
const tablet = window.matchMedia('(max-width: 1199px) and (min-width: 768px)');
const mobile = window.matchMedia('(max-width: 767px) and (min-width: 320px)');

tablet.addEventListener('change', getLengthSlides);
desktop.addEventListener('change', getLengthSlides);
mobile.addEventListener('change', getLengthSlides);
export function getLengthSlides() {
  let lengthSlide = 0;

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
