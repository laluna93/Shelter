export function removeClassStyleSlides(e:Element) {
  const classesSlide = ['left', 'right', 'active', 'end', 'start'];

  return classesSlide.forEach((classSlide: string) => {
    e.classList.remove(`${classSlide}`);
  });
}
