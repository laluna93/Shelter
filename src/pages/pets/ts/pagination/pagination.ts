import { Pet } from '../../model/pets-model';
import { pagination } from '../variables';
import { createPetCard } from './pet-card';
import { createPetsCards } from './slide';

export async function createCardsPets(petsData: Promise<Pet[]>, orderSlides?: string) {
  const pets = await petsData.then((e) => e);
  let id = 0;
  const arrSlides: HTMLDivElement[] = [];

  if (orderSlides === 'start') {
    [...pagination!.children].sort();
  }

  pets.forEach((e, i) => {
    if (i % 8 === 0) {
      arrSlides.push(createPetsCards(pets.slice(i, i + 8), id += 1));
    }

    createPetCard(e);
  });

  return arrSlides.forEach((e) => {
    pagination?.append(e);
  });
}
