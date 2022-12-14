import { renderPets } from './render-pets';

export const getPets = async (path: string) => {
  const res = await fetch(path);
  const data = await res.json();

  return renderPets(data);
};
