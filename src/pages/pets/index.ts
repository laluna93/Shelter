// import { getLengthSlides } from '../../assets/ts/slider/length-slide';
import { pets } from '../../assets/ts/variables';
import './style.scss';
import { btnPets } from './ts/pagination/control-pagination';
import { createCardsPets } from './ts/pagination/pagination';

btnPets();
// getLengthSlides();

createCardsPets(pets);
