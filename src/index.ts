import './style.scss';
import { getPets } from './ts/get-pets';
import { slider } from './ts/slider/btn-slider';
import { renderSlides } from './ts/slider/slider';
import { pathPets, desktop, tablet, mobile } from './ts/variables';

const pets = getPets(pathPets);

slider();

tablet.addEventListener('change', getLengthSlides);
desktop.addEventListener('change', getLengthSlides);
mobile.addEventListener('change', getLengthSlides);
function getLengthSlides() {
  let lengthSlide = 0;

  if (desktop.matches) {
    lengthSlide = 3;
    renderSlides(pets, lengthSlide);
  }

  if (tablet.matches) {
    lengthSlide = 2;
    renderSlides(pets, lengthSlide);
  }

  if (mobile.matches) {
    lengthSlide = 1;
    renderSlides(pets, lengthSlide);
  }

  return lengthSlide;
}

getLengthSlides();
