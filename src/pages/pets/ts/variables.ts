import { getPets } from './getPets';

const pets = getPets();
const wrapperPets = document.querySelector('.pets') as HTMLDivElement;
const pagination = wrapperPets.querySelector('.pets__pagination') as HTMLDivElement;

export { pets, wrapperPets, pagination };
