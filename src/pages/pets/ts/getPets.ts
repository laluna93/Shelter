export const getPets = async () => {
  const pathPets = './src/assets/json/pets.json';

  const res = await fetch(pathPets);
  const data = await res.json();

  return data;
};
