import { create } from 'zustand'
import { getRecipes } from '../api/api';
import { Recipe } from '../types/Recipe';

interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  fetchRecipes: () => void;
  addNewRecipes: (page: number) => void;
  filterRecipes: (ids: number[]) => void;
}

const useRecipesStore = create<RecipesState>()((set) => ({
  recipes: [],
  loading: true,
  fetchRecipes: async () => {
    const response = await getRecipes(1);

    set({ loading: false, recipes: response });
  },
  addNewRecipes: async (page: number) => {
    const response = await getRecipes(page);

    set(state => ({ loading: false, recipes: [...state.recipes, ...response] }));
  },
  filterRecipes: (ids: number[]) => {
    set(state => ({
      recipes: state.recipes.filter(currRecipe => !ids.includes(currRecipe.id)) 
    }));
  },
}));

export default useRecipesStore;