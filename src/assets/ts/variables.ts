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
const desktop = window.matchMedia('(min-width: 1200px)');
const tablet = window.matchMedia('(max-width: 1199px) and (min-width: 768px)');
const mobile = window.matchMedia('(max-width: 767px) and (min-width: 320px)');
const btnStart = wrapperPets.querySelector('.pets__btn-start') as HTMLButtonElement;
const btnPrev = wrapperPets.querySelector('.pets__btn-prev') as HTMLButtonElement;
const btnNext = wrapperPets.querySelector('.pets__btn-next') as HTMLButtonElement;
const btnend = wrapperPets.querySelector('.pets__btn-end') as HTMLButtonElement;
const arrayBtn: HTMLButtonElement[] = [btnStart, btnPrev, btnNext, btnend];

export {
  petsSlider, btnLeftSlider, btnRightSlider,
  burgerMenu, navigation, wrapperNavigation,
  pets, wrapperPets, pagination,
  desktop, tablet, mobile, btnStart, btnPrev,
  btnNext, btnend, arrayBtn };
