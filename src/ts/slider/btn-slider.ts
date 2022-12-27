import { moveSlider } from './move-slider';
import { btnLeftSlider, btnRightSlider, petsSlider } from '../selectors';

export function slider() {
  let numberPage: number = 1;

  btnLeftSlider.onclick = () => {
    numberPage > 1 ? numberPage -= 1 : numberPage = petsSlider.children.length;
    moveSlider(numberPage, 'active-right', 'right');
  };

  btnRightSlider.onclick = () => {
    numberPage < petsSlider.children.length ? numberPage += 1 : numberPage = 1;
    moveSlider(numberPage, 'active-left', 'left');
  };
}
