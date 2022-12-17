import './style.scss';
import { getPets } from './ts/get-pets';
import { slider } from './ts/slider/slider';
import { pathPets } from './ts/variables';

getPets(pathPets);
slider();

const nowWidth = window.screen.availWidth;
const windowWidth = window.matchMedia('(max-width: 600px)');

windowWidth.onchange = () => {
  console.log(windowWidth, '1s');
};

console.log(nowWidth);
