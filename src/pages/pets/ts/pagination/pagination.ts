import { Pet } from '../../../../assets/ts/model/pets-model';
import { createPetCard } from '../../../../assets/ts/pet-card';
import { createPetsCards } from './slide';

export async function createCardsPets(petsData: Promise<Pet[]>, lengthSlide: number, pagination: HTMLDivElement) {
  const pets = await petsData.then((e) => e);
  let id = 0;
  const arrSlides: HTMLDivElement[] = [];

  [...pagination.children].forEach((e) => {
    if (e.children.length !== lengthSlide || [...pagination.children].includes(e)) {
      e.remove();
    }
  });
  pets.forEach((e, i) => {
    if (i % lengthSlide === 0) {
      arrSlides.push(createPetsCards(pets.slice(i, i + lengthSlide), id += 1));
    }

    createPetCard(e);
  });

  return arrSlides.forEach((e) => {
    pagination?.append(e);
  });
}
