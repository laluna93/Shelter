import { Pet } from '../model/pets-model';

export function createPetCard({ name, img }:Pet) {
  const wrapperCard = document.createElement('div') as HTMLDivElement;

  wrapperCard.classList.add('card');

  const cardPet = `
    <img class="img-pet" src="${img}" alt="${name}">
    <h3 class="title-pet">${name}</h3>
    <button class="btn-pet">Learn more</button>`;

  wrapperCard.innerHTML = cardPet;

  return wrapperCard;
}
