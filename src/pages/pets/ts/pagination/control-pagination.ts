import { pagination, pets } from '../variables';
import { createCardPets } from './pagination';

export function btnPets(wrapper: any) {
  const btnStart = wrapper.querySelector('.pets__btn-start') as HTMLButtonElement;
  const btnPrev = wrapper.querySelector('.pets__btn-prev') as HTMLButtonElement;
  const btnNext = wrapper.querySelector('.pets__btn-next') as HTMLButtonElement;
  const btnend = wrapper.querySelector('.pets__btn-end') as HTMLButtonElement;
  let count = 1;
  const page = wrapper.querySelector('.pets__number-page') as HTMLButtonElement;

  btnStart.onclick = (() => {
    count = 1;
    // moveSlides(count, 'start');
    createCardPets(pets, 'start');
    start(btnStart, btnPrev, btnNext, btnend);
    page.innerHTML = `${count}`;
  });
  btnPrev.onclick = (() => {
    if (count > 1) {
      count -= 1;
      moveSlides(count, 'right', 'active-right');

      btnend.disabled = false;
      btnNext.disabled = false;
      page.innerHTML = `${count}`;
    }

    if (count === 1) {
      start(btnStart, btnPrev, btnNext, btnend);
      page.innerHTML = `${count}`;
    }
  });
  btnNext.onclick = (() => {
    if (count < pagination!.children.length) {
      count += 1;
      moveSlides(count, 'left', 'active-left');
      btnStart.disabled = false;
      btnPrev.disabled = false;
      page.innerHTML = `${count}`;
    }

    if (count === 3) {
      end(btnStart, btnPrev, btnNext, btnend);
    }
  });
  btnend.onclick = (() => {
    count = pagination!.children.length;
    moveSlides(count, 'end');
    end(btnStart, btnPrev, btnNext, btnend);
    page.innerHTML = `${count}`;
  });
}

export function moveSlides(count: number, classSlider?:string, classActive?:string) {
  [...pagination!.children].forEach((e: any) => {
    e.classList.remove('active');
    removeClassSlides(e);
    if (e.id === String(count)) {
      e.classList.add('active');
      e.classList.add(classActive);
    } else {
      e.classList.add(classSlider);
      if (classSlider === 'end') {
        pagination!.append(e);
      }
    }

    if (e.classList.contains('active') && classSlider === 'left') {
      moveSlide(e, 'left');
    }

    if (e.classList.contains('active') && classSlider === 'right') {
      pagination!.prepend(e);
      moveSlide(e, 'right');
    }
  });
}

function moveSlide(e: Element, classStyle: string) {
  return e.addEventListener('animationend', () => {
    if (classStyle === 'left') {
        pagination!.append(pagination!.firstElementChild!);
    }
  }, { once: true });
}

function start(start:HTMLButtonElement, prev:HTMLButtonElement, next:HTMLButtonElement, end:HTMLButtonElement) {
  start.disabled = true;
  prev.disabled = true;
  next.disabled = false;
  end.disabled = false;
}

function end(start:HTMLButtonElement, prev:HTMLButtonElement, next:HTMLButtonElement, end:HTMLButtonElement) {
  start.disabled = false;
  prev.disabled = false;
  next.disabled = true;
  end.disabled = true;
}

function removeClassSlides(e:Element) {
  const classesSlide = ['left', 'right', 'active-left', 'active-right', 'active', 'end', 'start'];

  return classesSlide.forEach((classSlide: string) => {
    e.classList.remove(`${classSlide}`);
  });
}
