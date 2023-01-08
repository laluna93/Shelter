import { changeNumberPage } from '../../../pages/pets/ts/number-page';
import { changeActiveBtn } from '../../../pages/pets/ts/pagination/active-btn-pagination';
import { createCardsPets } from '../../../pages/pets/ts/pagination/pagination';
import { arrayBtn, desktop, mobile, pagination, pets, petsSlider, tablet, wrapperPets } from '../variables';
import { slider } from './btn-slider';

tablet.addEventListener('change', getLengthSlides);
desktop.addEventListener('change', getLengthSlides);
mobile.addEventListener('change', getLengthSlides);
export function getLengthSlides() {
  const path = document.location.pathname;
  let result: number = 0;

  if (path === '/index.html') {
    result = changeLengthSlider();
  } else {
    result = changeLengthPagination();
  }

  console.log(result, 'r');

  return result;
}

function changeLengthPagination() {
  let lengthSlide = 0;

  changeNumberPage(wrapperPets, 1);
  changeActiveBtn(arrayBtn, true, true, false, false);
  if (desktop.matches) {
    lengthSlide = 8;
  }

  if (tablet.matches) {
    lengthSlide = 6;
  }

  if (mobile.matches) {
    lengthSlide = 3;
  }

  createCardsPets(pets, lengthSlide, pagination);

  return lengthSlide;
}

function changeLengthSlider() {
  let lengthSlide = 0;

  if (desktop.matches) {
    lengthSlide = 3;
    slider(lengthSlide);
  }

  if (tablet.matches) {
    lengthSlide = 2;
    slider(lengthSlide);
  }

  if (mobile.matches) {
    lengthSlide = 1;
    slider(lengthSlide);
  }

  createCardsPets(pets, lengthSlide, petsSlider);

  return lengthSlide;
}
