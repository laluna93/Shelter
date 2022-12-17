import { Pet } from '../../model/pets-model';
import { closePopup } from './view-popup';

export function createPopup(pet: Pet) {
  const wrapperPopup = document.createElement('div');

  wrapperPopup.classList.add('wrapper-popup');
  document.body.append(wrapperPopup);
  wrapperPopup.innerHTML = `
  <div class = "container-popup">
    <button class="btn-close">X</button>
    <img class="img-pet" src=${pet.img} alt="${pet.name} ${pet.type}">
      <div class="info-pet">
        <p class="name-pet">${pet.name}</p>
        <div class="type-pet">${`${pet.type} - ${pet.breed}`}</div>
        <div class="description-pet">${pet.description}</div>
        <ul class="characteristics-pet">
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
