import './style.scss';

const pathPets = './assets/json/pets.json';
const petsSlider = document.querySelector('.pets-page_slider');

console.log(petsSlider);

const getPets = async (path: string) => {
  const res = await fetch(path);
  const data = await res.json();

  createCards(data.slice(0, 3));

  return data;
};

function createCards(pets: any) {
  return pets.forEach((card: any) => {
    const wrapperCard = document.createElement('div');
    const imgPet = document.createElement('img');
    const titlePet = document.createElement('h3');
    const btnPet = document.createElement('button');

    wrapperCard.classList.add('wrapperCard');
    imgPet.classList.add('imgPet');
    titlePet.classList.add('titlePet');
    btnPet.classList.add('btnPet');

    imgPet.src = card.img;
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
