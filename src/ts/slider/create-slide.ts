import { Pet } from '../../model/pets-model';
import { createPetCard } from '../create-pet-card';
import { createPopup } from '../popup/popup';

export function createSlide(pets: Pet[], id:number) {
  const pageLocal = localStorage.getItem('page') ? JSON.parse(JSON.stringify(localStorage.getItem('page'))) : 1;

  const slide = document.createElement('div');

  slide.classList.add('wrapper-cards');
  slide.setAttribute('id', `${id}`);

  if (slide.id === `${pageLocal}`) {
    slide.classList.add('active');
  }

  pets.forEach((pet: Pet) => {
    const petCard = createPetCard(pet);
    const buttonPetInfo = petCard.querySelector('.btn-pet') as HTMLButtonElement;

    buttonPetInfo.onclick = () => {
      createPopup(pet);
    };

    slide.append(petCard);
  });

  return slide;
}
