import { petsSlider } from './selectors';
import { arrayPets } from './variables';

export function appendPets(numberPage: number) {
  [...petsSlider.children].forEach((e) => {
    e.classList.remove('active');

    if (e.id === `${numberPage}`) {
      e.classList.add('active');
    }

    console.log(e);
    if (e.classList.contains('active')) {
      e.addEventListener('animationend', () => {
        // const firstSlide = arrayPets.shift();

        // arrayPets.push(firstSlide);
        petsSlider.append(petsSlider.firstElementChild!);
        console.log(arrayPets, 'end');
        console.log(petsSlider.children, 'pets');
      }, { once: true });
    }
  });
}
