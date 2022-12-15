import { Pet } from '../model/pets-model';
import { createSlide } from './create-slide';
import { petsSlider } from './selectors';

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
  const newSlides: HTMLDivElement[] = [...slides];

  newSlides.forEach((slide, idx) => {
    if (slide.classList.contains('active')) {
      const checkElement = (idx >= 0 && idx < newSlides.length - 1);

      checkElement
        ? newSlides.push(newSlides.shift()!)
        : newSlides.unshift(newSlides.pop()!);
    }
  });
  console.log(newSlides);

  return newSlides.forEach((slide) => petsSlider.append(slide));
}

// findIndex
