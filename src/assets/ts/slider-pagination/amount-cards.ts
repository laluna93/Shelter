import { changeNumberPage } from '../../../pages/pets/ts/number-page';
import { arrayBtn, desktop, mobile, pagination, pets, petsSlider, tablet, wrapperPets } from '../variables';
import { clickButtonsSlider } from '../../../pages/main/ts/buttons-slider';
import { createWrapperPets } from './wrapper-cards-pets';
import { changeActiveBtn } from './active-buttons';

tablet.addEventListener('change', getAmountCards);
desktop.addEventListener('change', getAmountCards);
mobile.addEventListener('change', getAmountCards);
const path = document.location.pathname;

export function getAmountCards() {
  let resultLength: number = 0;

  if (path === '/index.html' || path === '/Shelter/dist/' || path === '/Shelter/dist/index.html') {
    resultLength = changeLengthSlider();
  }

  if (path === '/pets.html' || path === '/Shelter/dist/pets.html') {
    resultLength = changeLengthPagination();
  }

  return resultLength;
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

  createWrapperPets(pets, lengthSlide, pagination);

  return lengthSlide;
}

function changeLengthSlider() {
  let lengthSlide = 0;

  if (desktop.matches) {
    lengthSlide = 3;
    clickButtonsSlider(lengthSlide);
  }

  if (tablet.matches) {
    lengthSlide = 2;
    clickButtonsSlider(lengthSlide);
  }

  if (mobile.matches) {
    lengthSlide = 1;
    clickButtonsSlider(lengthSlide);
  }

  createWrapperPets(pets, lengthSlide, petsSlider);

  return lengthSlide;
}
