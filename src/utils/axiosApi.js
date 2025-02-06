import axios from "axios";

const apiRest = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getAllCharacter = async () => {
  const { data } = await apiRest.get(`/character`);
  return data;
};

export const getNewPage = async (url) => {
  const { data } = await axios.get(url);
  console.log(data);
  return data;
};
