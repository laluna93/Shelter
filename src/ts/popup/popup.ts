import { Pet } from '../../model/pets-model';

export function createPopup(pet: Pet) {
  const selectorsPopup = ['h2', 'div', 'div', 'div', 'div', 'div', 'div'];
  const infoPet = [pet.name, `${pet.type} - ${pet.breed}`, pet.description];
  const characteristicsPet = [
    `Age: ${pet.age}`,
    `Inoculations: ${pet.inoculations.join(', ')}`,
    `Diseases: ${pet.diseases.join(', ')}`,
    `Parasites: ${pet.parasites}`,
  ];

  const containerPopup = document.createElement('div');
  const contaierInfoPet = document.createElement('div');
  const imgPet = document.createElement('img');

  imgPet.src = `${pet.img}`;

  for (let i = 0; i < selectorsPopup.length; i += 1) {
    const petPopup = document.createElement(`${selectorsPopup[i]}`);

    i <= 2
      ? petPopup.textContent = `${infoPet[i]}`
      : petPopup.textContent = `${characteristicsPet[i - 3]}`;

    contaierInfoPet.append(petPopup);
  }

  containerPopup.append(imgPet);
  containerPopup.append(contaierInfoPet);
  console.log(containerPopup);
}
