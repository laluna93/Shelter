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
    moveSlides();
  };

  btnRightSlider.onclick = () => {
    numberPage < arrayPets.length ? numberPage += 1 : numberPage = 1;
    activeSlide(numberPage);
    localStorage.setItem('page', `${numberPage}`);
    moveSlides();
  };

  console.log(numberPage, 'test');

  return editNumberPage(numberPage);
}

function activeSlide(numberPage: number) {
  arrayPets.forEach((slide) => {
    slide.classList.remove('active');

    if (slide.id === `${numberPage}`) {
      slide.classList.add('active');
    }
    // else {
    //   slide.style.transform = `translateX(${(-990)}px)`;
    // }

    // if (slide.classList.contains('active')) {
    //   slide.style.transform = `translateX(${(0)}px)`;
    // }

    // slide.style.transform = `translateX(${-990}px)`;
    // slide.style.transition = '4s';
  });
}

function moveSlides() {
  arrayPets.forEach((slide) => {
    if (slide.classList.contains('active') && slide.id > 1) {
      const firstSlide = (arrayPets.shift());

      arrayPets.push(firstSlide);
    }
  });
}
