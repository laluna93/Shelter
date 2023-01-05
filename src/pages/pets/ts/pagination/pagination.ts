import { Pet } from '../../model/pets-model';
import { openPopup } from '../popup/view-popup';
import { pagination } from '../variables';

export async function createCardPets(petsData: Promise<Pet[]>, orderSlides?: string) {
  const pets = await petsData.then((e) => e);
  let id = 0;
  const arr: HTMLDivElement[] = [];

  if (orderSlides === 'start') {
    [...pagination!.children].forEach((e) => e.remove());
    arr.reverse();
  }

  pets.forEach((e, i) => {
    if (i % 8 === 0) {
      arr.push(createPetsCards(pets.slice(i, i + 8), id += 1));
      console.log(arr, 'arr');
    }

    createPetCard(e);
  });
  console.log(arr, 'arr');
  arr.forEach((e) => {
    pagination?.append(e);
  });
}

function createPetsCards(pets: Pet[], id: number) {
  const slide = document.createElement('div') as HTMLDivElement;

  slide.classList.add('pets__slide');
  slide.setAttribute('id', `${id}`);

  pets.forEach((e) => {
    const wrapperCard = createPetCard(e);

    openPopup(e, wrapperCard);

    slide.append(wrapperCard);
  });
  if (slide.getAttribute('id') === '1') {
    slide.classList.add('active');
  }

  return slide;
}

function createPetCard({ name, img }:Pet) {
  const wrapperCard = document.createElement('div') as HTMLDivElement;

  wrapperCard.classList.add('pet');

  const cardPet = `
        <img class="pet__img" src="${img}" alt="${name}">
        <h3 class="pet__title title">${name}</h3>
        <button class="pet__btn btn">Learn more</button>`;

  wrapperCard.innerHTML = cardPet;

  return wrapperCard;
}
