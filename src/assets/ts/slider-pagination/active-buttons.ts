export function changeActiveBtn(btnPagination: HTMLButtonElement[], ...activeBtn: boolean[]) {
  btnPagination.forEach((e, i) => {
    e.disabled = activeBtn[i];
  });
}
