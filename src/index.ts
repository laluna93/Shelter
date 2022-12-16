import './style.scss';
import { getPets } from './ts/get-pets';
import { slider } from './ts/slider/slider';
import { pathPets } from './ts/variables';

getPets(pathPets);
slider();
