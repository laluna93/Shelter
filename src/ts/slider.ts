import { editNumberPage } from './number-page';
import { btnLeftSlider, btnRightSlider } from './selectors';
import { arrayPets } from './variables';

export function slider() {
  const pageLocal = localStorage.getItem('page');
  let numberPage: number = 0;

  pageLocal ? numberPage = JSON.parse(pageLocal) : numberPage = 1;

  btnLeftSlider.onclick = () => {
    numberPage > 1 ? numberPage -= 1 : numberPage = arrayPets.length;
    activeSlide(numberPage);
    localStorage.setItem('page', `${numberPage}`);
  };

  btnRightSlider.onclick = () => {
    numberPage < arrayPets.length ? numberPage += 1 : numberPage = 1;
    activeSlide(numberPage);
    localStorage.setItem('page', `${numberPage}`);
  };

  return editNumberPage(numberPage);
}

function activeSlide(numberPage: number) {
  arrayPets.forEach((slide, idx) => {
    // slide.classList.remove('active');

    slide.style.display = 'flex';
    slide.style.opacity = '0.1';
    if (slide.id === `${numberPage}`) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }

    slide.addEventListener('animationstart', () => {
      if (slide.classList.contains('active')) {
        arrayPets[idx > 0 ? idx - 1 : arrayPets.length - 1].style.display = 'none';
        arrayPets[idx].style.display = 'flex';

        console.log(slide.id, idx, arrayPets[idx > 0 ? idx - 1 : arrayPets.length - 1], 'test');
      }
    });

    slide.addEventListener('animationend', () => {
      if (!slide.classList.contains('active')) {
        slide.style.display = 'none';
      }

      slide.style.opacity = '5';
    });
  });
}

// развернуть массив
