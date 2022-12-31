import { btnLeftSlider, btnRightSlider, petsSlider } from '../selectors';

export function moveSlider(numberPage: number, classActive:string, classSlider:string) {
  [...petsSlider.children].forEach((e) => {
    removeClassSlides(e);

    if (e.id === `${numberPage}`) {
      e.classList.add('active');
      e.classList.add(classActive);
    } else {
      e.classList.add(classSlider);
    }

    if (e.classList.contains('active') && classSlider === 'left') {
      moveSlides(e, 'left');
    }

    if (e.classList.contains('active') && classSlider === 'right') {
      petsSlider.prepend(petsSlider.lastElementChild!);
      moveSlides(e, 'right');
    }
  });
}

function moveSlides(e: Element, classStyle: string) {
  btnRightSlider.disabled = true;
  btnLeftSlider.disabled = true;

  return e.addEventListener('animationend', () => {
    if (classStyle === 'left') {
      petsSlider.append(petsSlider.firstElementChild!);
    }

    btnRightSlider.disabled = false;
    btnLeftSlider.disabled = false;
  }, { once: true });
}

function removeClassSlides(e:Element) {
  const classesSlide = ['left', 'right', 'active-left', 'active-right', 'active'];

  return classesSlide.forEach((classSlide: string) => {
    e.classList.remove(`${classSlide}`);
  });
}
