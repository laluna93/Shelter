import { wrapperPets } from '../../../../assets/ts/variables';
import { changeNumberPage } from '../number-page';
import { changeActiveBtn } from './active-btn-pagination';
import { changeStyleSlides } from './control-pagination';

export function movePagination(count: number, btns: HTMLButtonElement[], classstyle: string) {
  changeStyleSlides(count, classstyle);
  changeActiveBtn(btns, false, false, false, false);
  changeNumberPage(wrapperPets, count);
}
