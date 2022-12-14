import { renderSlides } from './render-slides';

export const getPets = async (path: string) => {
  const res = await fetch(path);
  const data = await res.json();

  return renderSlides(data);
};
