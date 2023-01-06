import './style.scss';
import { btnPets } from './ts/pagination/control-pagination';
import { createCardsPets } from './ts/pagination/pagination';
import { pets, wrapperPets } from './ts/variables';

btnPets(wrapperPets);

createCardsPets(pets);
