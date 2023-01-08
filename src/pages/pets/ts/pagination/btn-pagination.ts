import { moveSliderOrPagination } from '../../../../assets/ts/slider-pagination';
import { pagination, wrapperPets } from '../../../../assets/ts/variables';
import { changeNumberPage } from '../number-page';

export function movePagination(count: number, btns: HTMLButtonElement[], classstyle: string) {
  moveSliderOrPagination(pagination, count, classstyle, btns);
  changeNumberPage(wrapperPets, count);
}
