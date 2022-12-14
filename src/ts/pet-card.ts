import { Pet } from '../model/pets-model';

export function createPetCard({ name, img }:Pet) {
  const wrapperCard = document.createElement('div') as HTMLDivElement;
  const cardElement = ['img', 'h3', 'button'];
  const dataPet = [name, 'Learn more'];
  const cardClass = ['img-pet', 'title-pet', 'btn-pet'];

  wrapperCard.classList.add('card');

  cardElement.forEach((card, i) => {
    const cardPet = document.createElement(card);

    cardPet.classList.add(cardClass[i]);
    if (card === 'img') {
      cardPet.setAttribute('src', img);
    } else {
      cardPet.textContent = dataPet[i - 1];
    }

    wrapperCard.append(cardPet);
  });

  wrapperCard.children[2].addEventListener('click', () => {
    console.log(name);
  });

  return wrapperCard;
}
