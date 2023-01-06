import { pets, wrapperPets } from '../../assets/ts/variables';
import './style.scss';
import { btnPets } from './ts/pagination/control-pagination';
import { createCardsPets } from './ts/pagination/pagination';

btnPets(wrapperPets);

createCardsPets(pets);
