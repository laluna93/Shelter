import { Pet } from '../../model/pets-model';
import { openPopup } from '../popup/view-popup';
import { createPetCard } from './pet-card';

export function createPetsCards(pets: Pet[], id: number) {
  const slide = document.createElement('div') as HTMLDivElement;

  slide.classList.add('pets__slide');
  slide.setAttribute('id', `${id}`);
  slide.id === '1' ? slide.classList.add('active') : '';
  pets.forEach((e) => {
    const wrapperCard = createPetCard(e);

    openPopup(e, wrapperCard);

    slide.append(wrapperCard);
  });

  return slide;
}
