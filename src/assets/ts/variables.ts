import { getPets } from './get-pets';

const petsSlider = document.querySelector('.pets__slider') as HTMLDivElement;
const btnLeftSlider = document.querySelector('.pets__btn-slider-left') as HTMLButtonElement;
const btnRightSlider = document.querySelector('.pets__btn-slider-right') as HTMLButtonElement;
const burgerMenu = document.querySelector('.header__burger');
const navigation = document.querySelector('.header__navigation');
const wrapperNavigation = document.querySelector('.header__wrapper-navigation');
const pets = getPets();
const wrapperPets = document.querySelector('.pets') as HTMLDivElement;
const pagination = wrapperPets.querySelector('.pets__pagination') as HTMLDivElement;

export {
  petsSlider, btnLeftSlider, btnRightSlider,
  burgerMenu, navigation, wrapperNavigation,
  pets, wrapperPets, pagination };
