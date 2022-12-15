import { petsSlider } from './selectors';

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
      e.addEventListener('animationend', () => {
        petsSlider.append(petsSlider.firstElementChild!);
      }, { once: true });
    }

    if (e.classList.contains('active') && classSlider === 'right') {
      petsSlider.prepend(petsSlider.lastElementChild!);
    }
  });
}
