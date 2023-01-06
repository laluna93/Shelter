export function changeNumberPage(wrapperPets: HTMLDivElement, numberPage: number) {
  const page = wrapperPets.querySelector('.pets__number-page') as HTMLButtonElement;

  page.innerHTML = `${numberPage}`;

  return page;
}
