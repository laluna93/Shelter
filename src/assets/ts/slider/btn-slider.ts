import { moveSliderOrPagination } from '../slider-pagination';
import { btnLeftSlider, btnRightSlider, petsSlider } from '../variables';

export function slider(lengthSlide: number) {
  let numberPage: number = 1;
  const btns: HTMLButtonElement[] = [btnLeftSlider, btnRightSlider];

  if (numberPage !== lengthSlide) {
    numberPage = 1;
  }

  btnLeftSlider.onclick = () => {
    numberPage > 1 ? numberPage -= 1 : numberPage = petsSlider.children.length;
    moveSliderOrPagination(petsSlider, numberPage, 'right', btns);
  };

  btnRightSlider.onclick = () => {
    numberPage < petsSlider.children.length ? numberPage += 1 : numberPage = 1;
    moveSliderOrPagination(petsSlider, numberPage, 'left', btns);
  };
}
