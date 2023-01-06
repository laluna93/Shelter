import { changeNumberPage } from '../number-page';
import { pagination, pets } from '../variables';
import { changeActiveBtn } from './active-btn-pagination';
import { createCardsPets } from './pagination';

export function btnPets(wrapper: HTMLDivElement) {
  const btnStart = wrapper.querySelector('.pets__btn-start') as HTMLButtonElement;
  const btnPrev = wrapper.querySelector('.pets__btn-prev') as HTMLButtonElement;
  const btnNext = wrapper.querySelector('.pets__btn-next') as HTMLButtonElement;
  const btnend = wrapper.querySelector('.pets__btn-end') as HTMLButtonElement;
  let count = 1;
  const arrayBtn:HTMLButtonElement[] = [btnStart, btnPrev, btnNext, btnend];

  btnStart.onclick = (() => {
    count = 1;
    pagination!.innerHTML = '';
    createCardsPets(pets, 'start');
    changeActiveBtn(arrayBtn, true, true, false, false);
    changeNumberPage(wrapper, count);
  });
  btnPrev.onclick = (() => {
    if (count > 1) {
      count -= 1;
      changeStyleSlides(count, 'right', 'active-right');
      changeActiveBtn(arrayBtn, false, false, false, false);
      changeNumberPage(wrapper, count);
    }

    if (count === 1) {
      changeActiveBtn(arrayBtn, true, true, false, false);
      changeNumberPage(wrapper, count);
    }
  });
  btnNext.onclick = (() => {
    if (count < pagination!.children.length) {
      count += 1;
      changeStyleSlides(count, 'left', 'active-left');
      changeActiveBtn(arrayBtn, false, false, false, false);
      changeNumberPage(wrapper, count);
    }

    if (count === 3) {
      changeActiveBtn(arrayBtn, false, false, true, true);
    }
  });
  btnend.onclick = (() => {
    count = pagination!.children.length;
    changeStyleSlides(count, 'end');
    changeActiveBtn(arrayBtn, false, false, true, true);
    changeNumberPage(wrapper, count);
  });
}

export function changeStyleSlides(count: number, classSlider:string, classActive?:string) {
  [...pagination!.children].forEach((e) => {
    e.classList.remove('active');
    removeClassStyleSlides(e);
    if (e.id === String(count)) {
      e.classList.add('active');
      if (classActive) {
        e.classList.add(classActive);
        moveSlides(e, classSlider);
      }
    } else {
      e.classList.add(classSlider);
      if (classSlider === 'end') pagination!.append(e);
    }
  });
}

function moveSlides(e: Element, classStyle: string) {
  if (classStyle === 'right') pagination!.prepend(e);

  return e.addEventListener('animationend', () => {
    if (classStyle === 'left') {
        pagination!.append(pagination!.firstElementChild!);
    }
  }, { once: true });
}

function removeClassStyleSlides(e:Element) {
  const classesSlide = ['left', 'right', 'active-left', 'active-right', 'active', 'end', 'start'];

  return classesSlide.forEach((classSlide: string) => {
    e.classList.remove(`${classSlide}`);
  });
}
