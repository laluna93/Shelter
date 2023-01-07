import { btnend, btnNext, btnPrev, btnStart, pagination, pets, wrapperPets } from '../../../../assets/ts/variables';
import { changeNumberPage } from '../number-page';
import { changeActiveBtn } from './active-btn-pagination';
import { movePagination } from './btn-pagination';
import { createCardsPets } from './pagination';

export function btnPets() {
  let count = 1;
  const arrayBtn:HTMLButtonElement[] = [btnStart, btnPrev, btnNext, btnend];

  btnStart.onclick = (() => {
    count = 1;
    pagination!.innerHTML = '';
    createCardsPets(pets);
    changeActiveBtn(arrayBtn, true, true, false, false);
    changeNumberPage(wrapperPets, count);
  });
  btnPrev.onclick = (() => {
    if (count > 1) {
      count -= 1;

      movePagination(count, arrayBtn, 'right');
    }

    if (count === 1) {
      changeActiveBtn(arrayBtn, true, true, false, false);
      changeNumberPage(wrapperPets, count);
    }
  });
  btnNext.onclick = (() => {
    if (count < pagination!.children.length) {
      count += 1;
      movePagination(count, arrayBtn, 'left');
    }

    if (count === 3) {
      changeActiveBtn(arrayBtn, false, false, true, true);
    }
  });
  btnend.onclick = (() => {
    count = pagination!.children.length;
    changeStyleSlides(count, 'end');
    changeActiveBtn(arrayBtn, false, false, true, true);
    changeNumberPage(wrapperPets, count);
  });
}

export function changeStyleSlides(numberPage: number, classSlider:string) {
  [...pagination.children].forEach((e) => {
    removeClassStyleSlides(e);

    if (e.id === `${numberPage}`) {
      e.classList.add('active');
    }

    if (classSlider === 'end' && !e.classList.contains('active')) {
      pagination!.append(e);
    }

    if (e.classList.contains('active') && classSlider === 'left') {
      moveSlides(e, classSlider);
    }

    if (e.classList.contains('active') && classSlider === 'right') {
      pagination.prepend(pagination.lastElementChild!);
      moveSlides(e, classSlider);
    }

    e.classList.add(classSlider);
    e.addEventListener('animationend', () => {
      e.classList.remove(classSlider);
    }, { once: true });
  });
}

function moveSlides(e: Element, classStyle: string) {
  return e.addEventListener('animationend', () => {
    if (classStyle === 'left') {
        pagination!.append(pagination!.firstElementChild!);
    }
  }, { once: true });
}

function removeClassStyleSlides(e:Element) {
  const classesSlide = ['left', 'right', 'active', 'end', 'start'];

  return classesSlide.forEach((classSlide: string) => {
    e.classList.remove(`${classSlide}`);
  });
}
