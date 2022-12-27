import { Pet } from '../../model/pets-model';
import { createPetCard } from '../pet-card';
import { openPopup } from '../popup/view-popup';

export function createSlide(pets: Pet[], id:number) {
  const pageLocal = 1;

  const slide = document.createElement('div');

  slide.classList.add('pets__slide');
  slide.setAttribute('id', `${id}`);

  if (slide.id === `${pageLocal}`) {
    slide.classList.add('active');
  }

  pets.forEach((pet: Pet) => {
    const petCard = createPetCard(pet);

    openPopup(pet, petCard);

    slide.append(petCard);
  });

  return slide;
}
