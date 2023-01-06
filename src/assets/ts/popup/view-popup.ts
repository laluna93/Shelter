import { Pet } from '../model/pets-model';
import { createPopup } from './popup';

function openPopup(pet: Pet, petCard: HTMLDivElement) {
  const openPopup = petCard.querySelector('.pet__btn') as HTMLButtonElement;

  openPopup.onclick = () => {
    createPopup(pet);
  };

  return openPopup;
}

function closePopup(wrapperPopup: HTMLDivElement) {
  const closePopup = wrapperPopup.querySelector('.popup__btn-close') as HTMLButtonElement;

  closePopup.onclick = () => {
    wrapperPopup.remove();
  };

  wrapperPopup.onclick = (e) => {
    if (e.target === wrapperPopup) {
      wrapperPopup.remove();
    }
  };

  wrapperPopup.addEventListener('mouseover', (e) => {
    if (e.target === wrapperPopup || e.target === closePopup) {
      closePopup.style.backgroundColor = '#FDDCC4';
    }
  });

  wrapperPopup.addEventListener('mouseout', (e) => {
    if (e.target === wrapperPopup || e.target === closePopup) {
      closePopup.style.backgroundColor = 'transparent';
    }
  });

  return closePopup;
}

export { openPopup, closePopup };
