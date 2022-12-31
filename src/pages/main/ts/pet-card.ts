import { Pet } from '../model/pets-model';

export function createPetCard({ name, img }:Pet) {
  const wrapperCard = document.createElement('div') as HTMLDivElement;

  wrapperCard.classList.add('pet');

  const cardPet = `
    <img class="pet__img" src="${img}" alt="${name}">
    <h3 class="pet__title title">${name}</h3>
    <button class="pet__btn btn">Learn more</button>`;

  wrapperCard.innerHTML = cardPet;

  return wrapperCard;
}
