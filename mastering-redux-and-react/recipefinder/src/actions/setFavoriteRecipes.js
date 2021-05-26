export const SET_FAVORITE_RECIPES = 'SET_FAVORITE_RECIPES';

export function setFavoriteRecipes(recipes) {
  return {
    type: SET_FAVORITE_RECIPES,
    recipes
  };
}
