import { Pet } from '../../../../assets/ts/model/pets-model';
import { createPetCard } from '../../../../assets/ts/pet-card';
import { pagination } from '../../../../assets/ts/variables';
import { createPetsCards } from './slide';

export async function createCardsPets(petsData: Promise<Pet[]>) {
  const pets = await petsData.then((e) => e);
  let id = 0;
  const arrSlides: HTMLDivElement[] = [];

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
