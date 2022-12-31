import { Pet } from '../../model/pets-model';
import { createSlide } from './slide';
import { petsSlider } from '../selectors';

export async function renderSlides(petsPromise: Promise<Pet[]>, lengthSlides: number) {
  const pets = await petsPromise.then((e) => e);
  let id = 0;
  const slides: HTMLDivElement[] = [];

  [...petsSlider.children].forEach((e) => {
    if (e.children.length !== lengthSlides || [...petsSlider.children].includes(e)) {
      e.remove();
    }
  });

  for (let i = 0; i <= pets.length - 1; i += 1) {
    if (lengthSlides === 2 && i % 2 === 0) {
      slides.push(createSlide(pets.slice(i, i + 2), id += 1));
    }

    if (lengthSlides === 3 && i % 3 === 0) {
      slides.push(createSlide(pets.slice(i, i + 3), id += 1));
    }

    if (lengthSlides === 1) {
      slides.push(createSlide(pets.slice(i, i + 1), id += 1));
    }
  }

  return appendSlides(slides);
}

function appendSlides(slides: HTMLDivElement[]) {
  return slides.forEach((slide) => {
    petsSlider.append(slide);
  });
}
