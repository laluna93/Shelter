import { Pet } from '../../model/pets-model';

// export function createPopup(pet: Pet) {
//   const selectorsPopup = ['h2', 'div', 'div', 'div', 'div', 'div', 'div'];
//   const infoPet = [pet.name, `${pet.type} - ${pet.breed}`, pet.description];
//   const characteristicsPet = [
//     `Age: ${pet.age}`,
//     `Inoculations: ${pet.inoculations.join(', ')}`,
//     `Diseases: ${pet.diseases.join(', ')}`,
//     `Parasites: ${pet.parasites}`,
//   ];
//   const wrapper = document.createElement('div');

//   wrapper.classList.add('wrapper');

//   const containerPopup = document.createElement('div');

//   containerPopup.classList.add('container-popup');
//   const contaierInfoPet = document.createElement('div');
//   const imgPet = document.createElement('img');

//   imgPet.src = `${pet.img}`;

//   for (let i = 0; i < selectorsPopup.length; i += 1) {
//     const petPopup = document.createElement(`${selectorsPopup[i]}`);

//     i <= 2
//       ? petPopup.textContent = `${infoPet[i]}`
//       : petPopup.textContent = `${characteristicsPet[i - 3]}`;

//     contaierInfoPet.append(petPopup);
//   }

//   containerPopup.append(imgPet);
//   containerPopup.append(contaierInfoPet);
//   wrapper.append(containerPopup);
//   console.log(wrapper);
// }

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
  </div>
  `;
}
