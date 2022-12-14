import { Pet } from '../model/pets-model';

export function createPetCard({ name, img }:Pet) {
  const wrapperCard = document.createElement('div') as HTMLDivElement;
  const cardElement = ['img', 'h3'];
  const cardClass = ['img-pet', 'title-pet'];
  const buttonPetInfo = '<button class="btn-pet">Learn more</button>';

  wrapperCard.classList.add('card');

  cardElement.forEach((card, i) => {
    const cardPet = document.createElement(card);

    cardPet.classList.add(cardClass[i]);
    if (card === 'img') {
      cardPet.setAttribute('src', img);
    } else {
      cardPet.textContent = name;
    }

    wrapperCard.append(cardPet);
  });
  wrapperCard.innerHTML += buttonPetInfo;

  return wrapperCard;
}
