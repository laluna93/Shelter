import { Pet } from '../../model/pets-model';
import { createPopup } from './popup';

function openPopup(pet: Pet, petCard: HTMLDivElement) {
  const openPopup = petCard.querySelector('.btn-pet') as HTMLButtonElement;

  openPopup.onclick = () => {
    createPopup(pet);
  };

  return openPopup;
}

function closePopup(wrapperPopup: any) {
  const closePopup = wrapperPopup.querySelector('.btn-close') as HTMLButtonElement;

  closePopup.onclick = () => {
    wrapperPopup.remove();
  };

  return closePopup;
}

export { openPopup, closePopup };
