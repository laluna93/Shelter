import { Pet } from '../model/pets-model';
import { createSlides } from './create-cards';
import { petsSlider } from './selectors';

export function renderPets(pets: Pet[]) {
  let count = 0;
  const slides: HTMLDivElement[] = [];

  for (let i = 0; i <= pets.length - 1; i += 1) {
    if (i % 3 === 0) {
      slides.push(createSlides(pets.slice(i, i + 3), count += 1));
    }
  }

  if (!slides[0].classList.contains('active')) {
    const firstSlide = slides.shift();

    slides.push(firstSlide!);
  }

  return appendSlides(slides);
}

function appendSlides(slides: HTMLDivElement[]) {
  return slides.forEach((slide) => {
    petsSlider?.append(slide);
  });
}
