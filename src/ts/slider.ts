import { moveSlider } from './move-slider';
import { editNumberPage } from './number-page';
import { btnLeftSlider, btnRightSlider, petsSlider } from './selectors';

export function slider() {
  const pageLocal = localStorage.getItem('page');
  let numberPage: number = 0;

  pageLocal ? numberPage = JSON.parse(pageLocal) : numberPage = 1;

  btnLeftSlider.onclick = () => {
    numberPage > 1 ? numberPage -= 1 : numberPage = petsSlider.children.length;
    moveSlider(numberPage, 'active-right', 'right');
    localStorage.setItem('page', `${numberPage}`);
  };

  btnRightSlider.onclick = () => {
    numberPage < petsSlider.children.length ? numberPage += 1 : numberPage = 1;
    moveSlider(numberPage, 'active-left', 'left');
    localStorage.setItem('page', `${numberPage}`);
  };

  return editNumberPage(numberPage);
}
