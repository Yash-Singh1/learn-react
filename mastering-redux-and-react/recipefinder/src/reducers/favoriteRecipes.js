import { SET_FAVORITE_RECIPES } from '../actions';

function favoriteRecipes(state = JSON.parse(localStorage.getItem('favorites')) || [], action) {
  switch (action.type) {
    case SET_FAVORITE_RECIPES:
      return action.recipes;
    default:
      return state;
  }
}

export default favoriteRecipes;
