import { Pet } from '../model/pets-model';
import { createPetCard } from './pet-card';

export function createSlides(pets: Pet[], id:number) {
  const pageLocal = localStorage.getItem('page') ? JSON.parse(JSON.stringify(localStorage.getItem('page'))) : 1;

  const wrapperCards = document.createElement('div');

  wrapperCards.classList.add('wrapper-cards');
  wrapperCards.setAttribute('id', `${id}`);
  if (wrapperCards.id === `${pageLocal}`) {
    wrapperCards.classList.add('active');
  }

  pets.forEach((pet:Pet) => {
    const petCard = createPetCard(pet);

    wrapperCards.append(petCard);
  });

  return wrapperCards;
}
