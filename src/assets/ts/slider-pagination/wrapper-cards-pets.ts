import { Pet } from '../model/pets-model';
import { addCardsPets, createPetCard } from './cards-pets';

export async function createWrapperPets(petsData: Promise<Pet[]>, lengthSlide: number, pagination: HTMLDivElement) {
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
      arrSlides.push(addCardsPets(pets.slice(i, i + lengthSlide), id += 1));
    }

    createPetCard(e);
  });

  return arrSlides.forEach((e) => {
    pagination?.append(e);
  });
}
