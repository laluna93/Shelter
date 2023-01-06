import { Pet } from '../../../../assets/ts/model/pets-model';
import { createPetCard } from '../../../../assets/ts/pet-card';
import { openPopup } from '../../../../assets/ts/popup/view-popup';

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
