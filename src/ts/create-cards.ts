import { petsSlider } from './selectors';

function createCards(pets: any) {
  const wrapperCards = document.createElement('div');

  wrapperCards.classList.add('wrapper-cards');
  petsSlider?.append(wrapperCards);
  pets.forEach((card:any) => {
    const wrapperCard = document.createElement('div');
    const imgPet = document.createElement('img');
    const titlePet = document.createElement('h3');
    const btnPet = document.createElement('button');

    wrapperCard.classList.add('card');
    imgPet.classList.add('img-pet');
    titlePet.classList.add('title-pet');
    btnPet.classList.add('btn-pet');

    imgPet.src = card.img;
    imgPet.setAttribute('alt', `${card.type} ${card.name}`);
    titlePet.textContent = card.name;
    btnPet.textContent = 'Learn more';
    btnPet.onclick = () => {
      console.log('click', card.name);
    };

    wrapperCard.append(imgPet);
    wrapperCard.append(titlePet);
    wrapperCard.append(btnPet);
    wrapperCards.append(wrapperCard);
  });
}

export { createCards };
