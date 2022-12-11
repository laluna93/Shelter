export function editNumberPage(numberPage:number) {
  localStorage.setItem('page', `${numberPage}`);

  console.log(numberPage);
}
