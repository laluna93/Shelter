import { getLengthSlides } from '../../../../assets/ts/slider-pagination/length-slide';
import { createWrapperPets } from '../../../../assets/ts/slider-pagination/wrapper-cards-pets';
import { movePets } from '../../../../assets/ts/slider-pagination/move-pets';
import { arrayBtn, btnend, btnNext, btnPrev,
  btnStart, pagination, pets, wrapperPets } from '../../../../assets/ts/variables';
import { changeNumberPage } from '../number-page';
import { changeActiveBtn } from '../../../../assets/ts/slider-pagination/active-buttons';

export function clickButtonsPagination() {
  let count = 1;

  btnStart.onclick = (() => {
    count = 1;
    pagination!.innerHTML = '';
    const lengthPagination = getLengthSlides();

    createWrapperPets(pets, lengthPagination, pagination);
    changeActiveBtn(arrayBtn, true, true, false, false);
    changeNumberPage(wrapperPets, count);
  });
  btnPrev.onclick = (() => {
    if (count > 1) {
      count -= 1;
      movePagination(count, arrayBtn, 'right');
    }

    if (count === 1) {
      changeNumberPage(wrapperPets, count);
    }
  });
  btnNext.onclick = (() => {
    if (count < pagination!.children.length) {
      count += 1;
      movePagination(count, arrayBtn, 'left');
    }
  });

  btnend.onclick = (() => {
    count = pagination!.children.length;
    movePets(pagination, count, 'end', arrayBtn);
    changeActiveBtn(arrayBtn, false, false, true, true);
    changeNumberPage(wrapperPets, count);
  });
}

export function movePagination(count: number, btns: HTMLButtonElement[], classstyle: string) {
  movePets(pagination, count, classstyle, btns);
  changeNumberPage(wrapperPets, count);
}
