import { btnLeftSlider, btnRightSlider, petsSlider } from './selectors';

export function moveSlider(numberPage: number, classActive:string, classSlider:string) {
  [...petsSlider.children].forEach((e) => {
    if (classSlider === 'right') {
      e.classList.remove('left');
      e.classList.remove('active-left');
    } else {
      e.classList.remove('right');
      e.classList.remove('active-right');
    }

    e.classList.remove('active');
    e.classList.remove(classActive);
    e.classList.remove(classSlider);

    if (e.id === `${numberPage}`) {
      e.classList.add('active');
      e.classList.add(classActive);
    } else {
      e.classList.add(classSlider);
    }

    if (e.classList.contains('active') && classSlider === 'left') {
      btnRightSlider.disabled = true;

      e.addEventListener('animationend', () => {
        petsSlider.append(petsSlider.firstElementChild!);
        btnRightSlider.disabled = false;
      }, { once: true });
    }

    if (e.classList.contains('active') && classSlider === 'right') {
      btnLeftSlider.disabled = true;
      petsSlider.prepend(petsSlider.lastElementChild!);
      e.addEventListener('animationend', () => {
        btnLeftSlider.disabled = false;
      }, { once: true });
    }
  });
}
