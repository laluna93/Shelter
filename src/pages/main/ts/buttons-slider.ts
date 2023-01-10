import { btnLeftSlider, btnRightSlider, petsSlider } from '../../../assets/ts/variables';
import { movePets } from '../../../assets/ts/slider-pagination/move-pets';

export function clickButtonsSlider(lengthSlide: number) {
  let numberPage: number = 1;
  const btns: HTMLButtonElement[] = [btnLeftSlider, btnRightSlider];

  if (numberPage !== lengthSlide) {
    numberPage = 1;
  }

  btnLeftSlider.onclick = () => {
    numberPage > 1 ? numberPage -= 1 : numberPage = petsSlider.children.length;
    movePets(petsSlider, numberPage, 'right', btns);
  };

  btnRightSlider.onclick = () => {
    numberPage < petsSlider.children.length ? numberPage += 1 : numberPage = 1;
    movePets(petsSlider, numberPage, 'left', btns);
  };
}
