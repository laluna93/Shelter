import './style.scss';

const pathPets = './assets/json/pets.json';
const petsSlider = document.querySelector('.slider');

console.log(petsSlider);

const getPets = async (path: string) => {
  const res = await fetch(path);
  const data = await res.json();

  // createCards(data.slice(0, 3));
  createCards(data);

  return data;
};

function createCards(pets: any) {
  return pets.forEach((card: any) => {
    const wrapperCard = document.createElement('div');
    const imgPet = document.createElement('img');
    const titlePet = document.createElement('h3');
    const btnPet = document.createElement('button');

    wrapperCard.classList.add('wrapper-card');
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
    petsSlider?.append(wrapperCard);

    console.log(pets, 'pets');
  });
}

getPets(pathPets);
