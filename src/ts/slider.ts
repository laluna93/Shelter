import { editNumberPage } from './number-page';
import { btnLeftSlider, btnRightSlider } from './selectors';
import { arrayPets } from './variables';

export function slider() {
  let numberPage: any = 1;
  const pageLocal = localStorage.getItem('page');

  btnLeftSlider.onclick = () => {
    numberPage > 1 ? numberPage -= 1 : numberPage = pageLocal;
    localStorage.setItem('page', `${numberPage}`);
    activeSlide();
    editNumberPage(numberPage);
  };

  btnRightSlider.onclick = () => {
    numberPage !== pageLocal ? numberPage += 1 : numberPage = 1;
    localStorage.setItem('page', `${numberPage}`);
    activeSlide();
    editNumberPage(numberPage);
  };

  return editNumberPage(numberPage);
}

function activeSlide() {
  const pageLocal = localStorage.getItem('page');

  arrayPets.forEach((slide) => {
    if (slide.id === pageLocal) {
      slide.classList.add('active');
      console.log(slide);
    } else {
      slide.classList.remove('active');
    }
  });
  console.log(pageLocal);
}
