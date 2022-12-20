import { Pet } from '../../model/pets-model';
import { createSlide } from './slide';
import { petsSlider } from '../selectors';

export async function renderSlides(petsPromise: Promise<Pet[]>, lengthSlides: number) {
  const pets = await petsPromise.then((e) => e);

  console.log(lengthSlides);
  let id = 0;
  const slides: HTMLDivElement[] = [];
  let c = 0;

  for (let i = 0; i <= pets.length - 1; i += 1) {
    if (lengthSlides === 2 && i % 2 === 0) {
      console.log(pets.slice(i, i + 2));

      c += 1;
    }

    if (i % 3 === 0) {
      slides.push(createSlide(pets.slice(i, i + 3), id += 1));
    }
  }

  console.log(c);

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
