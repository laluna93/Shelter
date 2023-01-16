import { pagination } from '../variables';
import { changeActiveBtn } from './active-buttons';
import { removeClassStyleSlides } from './remove-class';

export function movePets(
  wrapperSLide: HTMLDivElement,
  numberPage: number,
  classSlider:string,
  arrayBtn: HTMLButtonElement[],
) {
  [...wrapperSLide.children].forEach((e) => {
    removeClassStyleSlides(e);

    if (e.id === `${numberPage}`) {
      e.classList.add('active');
    }

    if (classSlider === 'end' && !e.classList.contains('active')) {
      wrapperSLide.append(e);
    }

    if (e.classList.contains('active') && classSlider === 'left') {
      e.addEventListener('animationend', () => {
        wrapperSLide.append(wrapperSLide.firstElementChild!);
      }, { once: true });
    }

    if (e.classList.contains('active') && classSlider === 'right') {
      wrapperSLide.prepend(wrapperSLide.lastElementChild!);
    }

    e.classList.add(classSlider);
    activeBtn(e, arrayBtn, classSlider, wrapperSLide, numberPage, arrayBtn);
  });
}

function activeBtn(
  e: Element,
  btns: HTMLButtonElement[],
  classSlider: string,
  wrapperSLide:HTMLDivElement,
  numberPage: number,
  arrayBtn: HTMLButtonElement[],

) {
  e.addEventListener('animationstart', () => {
    btns.forEach((e) => {
      e.disabled = true;
    });
  }, { once: true });

  e.addEventListener('animationend', () => {
    e.classList.remove(classSlider);
    if (wrapperSLide === pagination) {
      if (numberPage === wrapperSLide.children.length) {
        changeActiveBtn(arrayBtn, false, false, true, true);
      } else if (numberPage === 1) {
        changeActiveBtn(arrayBtn, true, true, false, false);
      } else {
        changeActiveBtn(arrayBtn, false, false, false, false);
      }
    } else {
      arrayBtn.forEach((e) => {
        e.disabled = false;
      });
    }
  }, { once: true });
}
