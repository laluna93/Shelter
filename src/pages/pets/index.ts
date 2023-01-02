import { Pet } from './model/pets-model';
import './style.scss';
import { getPets } from './ts/getPets';
import { openPopup } from './ts/popup/view-popup';

const pets = getPets();
const wrapperPets = document.querySelector('.pets') as HTMLDivElement;
const pagination = wrapperPets.querySelector('.pets__pagination');

export async function createCardPets(petsData: Promise<Pet[]>) {
  const pets = await petsData.then((e) => e);
  let id = 0;

  pets.forEach((e, i) => {
    if (i % 8 === 0) {
      createPetsCards(pets.slice(i, i + 8), id += 1);
    }

    createPetCard(e);
  });
}

export function createPetsCards(pets: Pet[], id: number) {
  const slide = document.createElement('div') as HTMLDivElement;

  slide.classList.add('pets__slide');
  slide.setAttribute('id', `${id}`);

  pagination?.append(slide);
  pets.forEach((e) => {
    const wrapperCard = createPetCard(e);

    openPopup(e, wrapperCard);

    slide.append(wrapperCard);
  });
  if (slide.getAttribute('id') === '1') {
    slide.classList.add('active');
  }
}

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

export function btnPets(wrapper: any) {
  // const btnStart = wrapper.querySelector('.pets__btn-start') as HTMLButtonElement;
  const btnPrev = wrapper.querySelector('.pets__btn-prev') as HTMLButtonElement;
  const btnNext = wrapper.querySelector('.pets__btn-next') as HTMLButtonElement;
  // const btnend = wrapper.querySelector('.pets__btn-end') as HTMLButtonElement;
  let count = 1;

  // btnStart.onclick = (() => {
  //   count = 1;
  //   movePagination(count, 'start');
  // });
  btnPrev.onclick = (() => {
    if (count > 1) {
      count -= 1;
      movePagination(count, 'prev');
    }
  });
  btnNext.onclick = (() => {
    if (count < pagination!.children.length) {
      count += 1;
      movePagination(count, 'next');
      console.log(pagination!.children.length, count);
    }
  });
  // btnend.onclick = (() => {
  //   count = pagination!.children.length;
  //   movePagination(count, 'end');
  // });
}

export function movePagination(count: number, directionSlide: string) {
  // if (directionSlide === 'next') {
  //   pagination!.append(pagination!.firstChild!);
  //   // console.log(pagination!.firstChild!, 'pagination');
  // }

  // if (directionSlide === 'prev') {
  //   pagination!.prepend(pagination?.lastChild!);
  // }

  [...pagination!.children].forEach((e: any) => {
    e.classList.remove('active');
    if (e.id === String(count)) {
      e.classList.add('active');
    }

    if (e.classList.contains('active') && directionSlide === 'next') {
      pagination!.append(pagination!.firstElementChild!);

      console.log(pagination!.firstChild!, 'pagination');
    }

    if (e.classList.contains('active') && directionSlide === 'prev') {
      pagination!.prepend(pagination?.lastElementChild!);

      console.log(pagination!.firstChild!, 'pagination');
    }
  });
}

btnPets(wrapperPets);

createCardPets(pets);
