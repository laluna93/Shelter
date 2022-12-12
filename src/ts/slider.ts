import { editNumberPage } from './number-page';
import { btnLeftSlider, btnRightSlider } from './selectors';
import { arrayPets } from './variables';

export function slider() {
  const pageLocal = localStorage.getItem('page');
  let numberPage: any;

  if (pageLocal) {
    numberPage = JSON.parse(pageLocal);
    console.log(pageLocal);
  } else {
    numberPage = 1;
  }

  btnLeftSlider.onclick = () => {
    numberPage > 1 ? numberPage -= 1 : numberPage = arrayPets.length;
    activeSlide(numberPage);
    localStorage.setItem('page', `${numberPage}`);
  };

  btnRightSlider.onclick = () => {
    numberPage < arrayPets.length ? numberPage += 1 : numberPage = 1;
    activeSlide(numberPage);
    localStorage.setItem('page', `${numberPage}`);
  };

  return editNumberPage(numberPage);
}

function activeSlide(numberPage:number) {
  console.log(numberPage);
  const val = numberPage - 1;

  arrayPets.forEach((slide) => {
    slide.classList.remove('active');
    if (slide.id === `${numberPage}`) {
      slide.classList.add('active');
      slide.style.transform = `translateX(${((990))}px)`;
    }

    slide.style.transform = `translateX(${((val * -990))}px)`;
  });
}
