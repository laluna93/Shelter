import { Pet } from '../model/pets-model';
import { createCards } from './create-cards';

const getPets = async (path: string) => {
  const res = await fetch(path);
  const data = await res.json();
  let count = 0;

  return data.forEach((pet:Pet, i:number) => {
    if (i % 3 === 0) {
      createCards(data.slice(i, i + 3), count += 1);
    }
  });
};

export { getPets };
