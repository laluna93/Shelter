import { Pet } from '../../model/pets-model';
import { createSlide } from './slide';
import { petsSlider } from '../selectors';

export async function renderSlides(petsPromise: Promise<Pet[]>, lengthSlides: number) {
  const pets = await petsPromise.then((e) => e);

  let id = 0;
  const slides: HTMLDivElement[] = [];

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

  return appendSlides(slides, lengthSlides);
}

function appendSlides(slides: HTMLDivElement[], lengthSlides:number) {
  const arraySlides = [...new Set(slides)];

  console.log(arraySlides, 'arraySlides');
  [...petsSlider.children].forEach((e) => {
    if (e.children.length !== lengthSlides || [...petsSlider.children].includes(e)) {
      e.remove();
      console.log(e, 'e');
    }
  });
  console.log(petsSlider, '2');

  const activeSlide = arraySlides.findIndex((e) => e.classList.contains('active'));

  if (activeSlide === 0) {
    arraySlides.forEach((slide) => {
      petsSlider.append(slide);
    });
  } else {
    arraySlides.push(arraySlides.shift()!);
    appendSlides(arraySlides, lengthSlides);
  }

  return arraySlides;
}
