import { Pet } from '../model/pets-model';
import { openPopup } from '../popup/view-popup';

export function addCardsPets(pets: Pet[], id: number) {
  const wrapperPets = document.createElement('div') as HTMLDivElement;

  wrapperPets.classList.add('pets__slide');
  wrapperPets.setAttribute('id', `${id}`);
  wrapperPets.id === '1' ? wrapperPets.classList.add('active') : '';
  pets.forEach((e) => {
    const wrapperCard = createPetCard(e);

    openPopup(e, wrapperCard);

    wrapperPets.append(wrapperCard);
  });

  return wrapperPets;
}

export function createPetCard({ name, img }: Pet) {
  const cardPet = document.createElement('div') as HTMLDivElement;

  cardPet.classList.add('pet');

  cardPet.innerHTML = `
    <img class="pet__img" src="${img}" alt="${name}">
    <h3 class="pet__title title">${name}</h3>
    <button class="pet__btn btn">Learn more</button>`;

  return cardPet;
}
