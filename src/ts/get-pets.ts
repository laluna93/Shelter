import { createCards } from './create-cards';

const getPets = async (path: string) => {
  const res = await fetch(path);
  const data = await res.json();

  return data.forEach((e:any, i:number) => {
    if (i % 3 === 0) {
      createCards(data.slice(i, i + 3));
    }
  });
};

export { getPets };
