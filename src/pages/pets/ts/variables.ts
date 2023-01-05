import { getPets } from './getPets';

const pets = getPets();
const wrapperPets = document.querySelector('.pets') as HTMLDivElement;
const pagination = wrapperPets.querySelector('.pets__pagination');

export { pets, wrapperPets, pagination };
