import axios, { AxiosInstance } from 'axios';
import { Character, FictionLocation } from './models/api_models';

const rickyMortyApi: AxiosInstance = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

export const getResidents = async (id: number) => {
  const baseUrl = 'https://rickandmortyapi.com/api';
  const location: FictionLocation = (
    await rickyMortyApi.get(`${baseUrl}/location/${id}`)
  ).data;
  const characterUrls: string[] = location.residents.slice(0, 5);
  const characters: Character[] = [];

  for (const url of characterUrls) {
    const character: Character = (await rickyMortyApi.get(url)).data;
    characters.push(character);
  }
  characters.sort((a, b) => a.name.localeCompare(b.name));
  return characters;
};
