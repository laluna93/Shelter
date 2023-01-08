import { moveSliderOrPagination } from '../../../../assets/ts/slider-pagination';
import { getLengthSlides } from '../../../../assets/ts/slider/length-slide';
import { arrayBtn, btnend, btnNext, btnPrev,
  btnStart, pagination, pets, wrapperPets } from '../../../../assets/ts/variables';
import { changeNumberPage } from '../number-page';
import { changeActiveBtn } from './active-btn-pagination';
import { movePagination } from './btn-pagination';
import { createCardsPets } from './pagination';

export function btnPets() {
  let count = 1;

  btnStart.onclick = (() => {
    count = 1;
    pagination!.innerHTML = '';
    const lengthPagination = getLengthSlides();

    createCardsPets(pets, lengthPagination, pagination);
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
    moveSliderOrPagination(pagination, count, 'end', arrayBtn);
    changeActiveBtn(arrayBtn, false, false, true, true);
    changeNumberPage(wrapperPets, count);
  });
}
