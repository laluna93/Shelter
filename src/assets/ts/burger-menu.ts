import { burgerMenu, header, navigation, wrapperNavigation } from './variables';

export function viewBurger() {
  const shadowNavigation = document.createElement('div');

  shadowNavigation.classList.add('header__shadow');
  header.append(shadowNavigation);
  header?.addEventListener('click', (e) => {
    if (e.target === burgerMenu && !burgerMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
      shadowNavigation.classList.add('header__shadow_active');
      openBurger(burgerMenu, wrapperNavigation, navigation);
    } else if (e.target !== wrapperNavigation && burgerMenu.classList.contains('active')) {
      document.body.style.overflow = '';
      shadowNavigation.classList.remove('header__shadow_active');
      closeBurger(burgerMenu, wrapperNavigation, navigation);
    }
  });
}

function openBurger(burgerMenu: HTMLDivElement, wrapperNavigation: HTMLDivElement, navigation: HTMLUListElement) {
  burgerMenu!.classList.add('active');
  wrapperNavigation!.classList.add('header__wrapper-navigation_active');
  navigation!.classList.add('header__navigation_active');
}

function closeBurger(burgerMenu: HTMLDivElement, wrapperNavigation: HTMLDivElement, navigation: HTMLUListElement) {
  burgerMenu!.classList.remove('active');
  wrapperNavigation!.classList.remove('header__wrapper-navigation_active');
  navigation!.classList.remove('header__navigation_active');
}
