import { Pet } from '../../model/pets-model';
import { closePopup } from './view-popup';

export function createPopup(pet: Pet) {
  const wrapperPopup = document.createElement('div');

  wrapperPopup.classList.add('popup');
  document.body.append(wrapperPopup);
  wrapperPopup.innerHTML = `
  <div class = "popup__container">
    <button class="popup__btn-close">X</button>
    <img class="popup__img" src=${pet.img} alt="${pet.name} ${pet.type}">
      <div class="popup__info-pet">
        <p class="popup__name-pet">${pet.name}</p>
        <div class="popup__type-pet">${`${pet.type} - ${pet.breed}`}</div>
        <div class="popup__description-pet">${pet.description}</div>
        <ul class="popup__characteristics-pet">
          <li><strong>Age:</strong> ${pet.age}</li>
          <li><strong>Inoculations:</strong> ${pet.inoculations.join(', ')}</li>
          <li><strong>Diseases:</strong> ${pet.diseases.join(', ')}</li>
          <li><strong>Parasites:</strong> ${pet.parasites}</li>
        </ul>
      </div>
  </div>`;
  closePopup(wrapperPopup);

  return wrapperPopup;
}
