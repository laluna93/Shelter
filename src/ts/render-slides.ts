import { Pet } from '../model/pets-model';
import { createSlide } from './create-slide';
import { petsSlider } from './selectors';

export function renderSlides(pets: Pet[]) {
  let count = 0;
  const slides: HTMLDivElement[] = [];

  for (let i = 0; i <= pets.length - 1; i += 1) {
    if (i % 3 === 0) {
      slides.push(createSlide(pets.slice(i, i + 3), count += 1));
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
