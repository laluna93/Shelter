import { editNumberPage } from './number-page';
import { btnLeftSlider, btnRightSlider } from './selectors';
import { arrayPets } from './variables';

export function slider() {
  const pageLocal = localStorage.getItem('page');
  let numberPage: any;
  let count = 0;

  if (pageLocal) {
    numberPage = JSON.parse(pageLocal);
    console.log(pageLocal);
  } else {
    numberPage = 1;
  }

  btnLeftSlider.onclick = () => {
    const res = +`${(arrayPets.length - 1) * 990}`;

    count > res ? count += 990 : count -= 2970;

    count += 990;

    numberPage > 1 ? numberPage -= 1 : numberPage = arrayPets.length;
    activeSlide(numberPage, count);
    localStorage.setItem('page', `${numberPage}`);
  };

  btnRightSlider.onclick = () => {
    const res = +`-${(arrayPets.length - 1) * 990}`;

    count > res ? count -= 990 : count += 2970;

    // count -= 990;
    console.log(res, count, 'counts');

    numberPage < arrayPets.length ? numberPage += 1 : numberPage = 1;
    activeSlide(numberPage, count);
    localStorage.setItem('page', `${numberPage}`);
  };

  return editNumberPage(numberPage);
}

function activeSlide(numberPage:number, count: number) {
  console.log(arrayPets.length, 'a');

  arrayPets.forEach((slide) => {
    slide.classList.remove('active');
    if (slide.id === `${numberPage}`) {
      slide.classList.add('active');
    }

    if (!slide.classList.contains('active')) {
      slide.style.transform = `translateX(${(count - 990)}px)`;
    }

    slide.style.transform = `translateX(${count}px)`;
  });
}
// вычислить максимальное число и сделать ограничитель обнуляя счетчик при его достижении
