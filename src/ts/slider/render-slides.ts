import { Pet } from '../../model/pets-model';
import { createSlide } from './slide';
import { petsSlider } from '../selectors';

export function renderSlides(pets: Pet[]) {
  let id = 0;
  const slides: HTMLDivElement[] = [];

  for (let i = 0; i <= pets.length - 1; i += 1) {
    if (i % 3 === 0) {
      slides.push(createSlide(pets.slice(i, i + 3), id += 1));
    }
  }

  return appendSlides(slides);
}

function appendSlides(slides: HTMLDivElement[]) {
  const arraySlides = [...slides];
  const activeSlide = arraySlides.findIndex((e) => e.classList.contains('active'));

  if (activeSlide === 0) {
    arraySlides.forEach((slide) => petsSlider.append(slide));
  } else {
    arraySlides.push(arraySlides.shift()!);
    appendSlides(arraySlides);
  }

  return arraySlides;
}
