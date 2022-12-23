import { Pet } from '../../model/pets-model';
import { createPetCard } from '../pet-card';
import { openPopup } from '../popup/view-popup';

export function createSlide(pets: Pet[], id:number) {
  // const pageLocal = localStorage.getItem('page') ? JSON.parse(JSON.stringify(localStorage.getItem('page'))) : 1;
  const pageLocal = 1;

  const slide = document.createElement('div');

  slide.classList.add('wrapper-cards');
  slide.setAttribute('id', `${id}`);

  if (slide.id === `${pageLocal}`) {
    slide.classList.add('active');
  }

  pets.forEach((pet: Pet) => {
    const petCard = createPetCard(pet);

    openPopup(pet, petCard);

    slide.append(petCard);
  });
  console.log(slide, 'slide');

  return slide;
}
