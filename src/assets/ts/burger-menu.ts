import { burgerMenu, navigation, wrapperNavigation } from './variables';

export function viewBurger() {
  burgerMenu!.addEventListener('click', () => {
    burgerMenu!.classList.toggle('active');
    navigation!.classList.toggle('header__navigation_active');
    wrapperNavigation!.classList.toggle('header__wrapper-navigation_active');
    if (burgerMenu!.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
}
