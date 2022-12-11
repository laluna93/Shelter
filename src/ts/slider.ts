import { btnLeftSlider, btnRightSlider } from './selectors';

export function slider() {
  btnLeftSlider.onclick = () => {
    console.log('1');
  };

  btnRightSlider.onclick = () => {
    console.log('2');
  };

  console.log(btnLeftSlider, btnRightSlider);
}
