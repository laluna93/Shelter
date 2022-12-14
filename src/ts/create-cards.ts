import { Pet } from '../model/pets-model';
import { petsSlider } from './selectors';
// import { arrayPets } from './variables';

export function createCards(pets: Pet[], id:number) {
  const pageLocal = localStorage.getItem('page') ? JSON.parse(JSON.stringify(localStorage.getItem('page')))
    : 1;

  const wrapperCards = document.createElement('div');

  wrapperCards.classList.add('wrapper-cards');
  wrapperCards.setAttribute('id', `${id}`);
  if (wrapperCards.id === `${pageLocal}`) {
    wrapperCards.classList.add('active');
  }

  pets.forEach((pet:Pet) => {
    const wrapperCard = document.createElement('div');
    const imgPet = document.createElement('img');
    const titlePet = document.createElement('h3');
    const btnPet = document.createElement('button');

    wrapperCard.classList.add('card');
    imgPet.classList.add('img-pet');
    titlePet.classList.add('title-pet');
    btnPet.classList.add('btn-pet');

    imgPet.src = pet.img;
    imgPet.setAttribute('alt', `${pet.type} ${pet.name}`);
    titlePet.textContent = pet.name;
    btnPet.textContent = 'Learn more';
    btnPet.onclick = () => {
      console.log('click', pet.name);
    };

    wrapperCard.append(imgPet, titlePet, btnPet);
    wrapperCards.append(wrapperCard);
  });
  // arrayPets.push(wrapperCards);
  // appendPets(pageLocal);
  petsSlider?.append(wrapperCards);

  return wrapperCards;
}
// сделать функцию принимающей номер страницы
// вырезать из массива с врапперами 0 элемент и вставлять его в конец, а 0 отрисовывать
