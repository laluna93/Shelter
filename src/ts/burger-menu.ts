import { burgerMenu, navigation, wrapperNavigation } from './selectors';

export function viewBurger() {
  burgerMenu!.addEventListener('click', () => {
    burgerMenu!.classList.toggle('active');
    navigation!.classList.toggle('header__navigation_active');
    wrapperNavigation!.classList.toggle('header__wrapper-navigation_active');
  });
}
