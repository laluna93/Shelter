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

  // if (!slides[0].classList.contains('active')) {
  //   const firstSlide = slides.shift();

  //   slides.push(firstSlide!);
  //   console.log(slides, 's');
  //   console.log(firstSlide, 'firstSlide');
  // }

  console.log(slides, 'a');

  return appendSlides(slides);
}

function appendSlides(slides: HTMLDivElement[]) {
  const arr: any[] = [...slides];

  arr.forEach((e, i) => {
    if (e.classList.contains('active')) {
      if (i >= 0 && i < 2) {
        const firstSlide = arr.shift();

        arr.push(firstSlide);
        console.log(e, 'e');
      }

      if (i === 2) {
        const last = arr.pop();

        arr.unshift(last);
      }
    }

    return arr.forEach((e) => {
      petsSlider.append(e);
    });
  });
}
