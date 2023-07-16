import { Recipe } from "../types/Recipe";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function wait() {
  return new Promise(resolve => {
    setTimeout(resolve, 300);
  });
}

export const getRecipes = (page: number): Promise<Recipe[]> => {
  return wait()
    .then(() => fetch(`${BASE_URL}?page=${page}`))
    .then(response => response.json())
};

export const getRecipe = (id: number): Promise<Recipe[]> => {
  return wait()
    .then(() => fetch(`${BASE_URL}/${id}`))
    .then(response => response.json())
};