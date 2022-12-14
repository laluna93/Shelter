import { appendPets } from './append-pets';
import { editNumberPage } from './number-page';
import { btnLeftSlider, btnRightSlider, petsSlider } from './selectors';

export function slider() {
  const pageLocal = localStorage.getItem('page');
  let numberPage: number = 0;

  pageLocal ? numberPage = JSON.parse(pageLocal) : numberPage = 1;

  btnLeftSlider.onclick = () => {
    numberPage > 1 ? numberPage -= 1 : numberPage = petsSlider.children.length;
    appendPets(numberPage);
    // activeSlide(numberPage);

    localStorage.setItem('page', `${numberPage}`);
  };

  btnRightSlider.onclick = () => {
    numberPage < petsSlider.children.length ? numberPage += 1 : numberPage = 1;
    console.log(numberPage, 'numberPage');

    // activeSlide(numberPage);
    appendPets(numberPage);

    localStorage.setItem('page', `${numberPage}`);
  };

  return editNumberPage(numberPage);
}

// function activeSlide(numberPage: number) {
//   arrayPets.forEach((slide) => {
//     slide.classList.remove('active');

//     if (slide.id === `${numberPage}`) {
//       slide.classList.add('active');
//     }
//   });
// }
