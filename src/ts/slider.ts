import { editNumberPage } from './number-page';
import { btnLeftSlider, btnRightSlider } from './selectors';
import { arrayPets } from './variables';

export function slider() {
  const pageLocal = localStorage.getItem('page');
  let numberPage: number = 0;

  pageLocal ? numberPage = JSON.parse(pageLocal) : numberPage = 1;

  btnLeftSlider.onclick = () => {
    numberPage > 1 ? numberPage -= 1 : numberPage = arrayPets.length;
    activeSlide(numberPage);
    localStorage.setItem('page', `${numberPage}`);
    // moveSlides();
  };

  btnRightSlider.onclick = () => {
    numberPage < arrayPets.length ? numberPage += 1 : numberPage = 1;
    activeSlide(numberPage);
    localStorage.setItem('page', `${numberPage}`);
    // moveSlides();
  };

  console.log(numberPage, 'test');

  return editNumberPage(numberPage);
}

function activeSlide(numberPage: number) {
  arrayPets.forEach((slide) => {
    slide.classList.remove('active');
    slide.style.display = 'flex';

    if (slide.id === `${numberPage}`) {
      slide.classList.add('active');
      slide.style.display = 'flex';
    }

    slide.addEventListener('animationend', () => {
      if (!slide.classList.contains('active')) {
        slide.style.display = 'none';
      }
    });
  });
}

// function moveSlides() {
//   arrayPets.forEach((slide) => {
//     slide.style.display = 'flex';

//     // if (slide.classList.contains('active') && slide.id > 1) {
//     //   const firstSlide = (arrayPets.shift());

//     //   slide.style.display = 'flex';

//     //   arrayPets.push(firstSlide);
//     // }

//     slide.addEventListener('animationend', () => {
//       if (!slide.classList.contains('active')) {
//         slide.style.display = 'none';
//       }
//     });
//   });
// }

// создать новый стиль где давать дисплей флекс i-1
// развернуть массив
