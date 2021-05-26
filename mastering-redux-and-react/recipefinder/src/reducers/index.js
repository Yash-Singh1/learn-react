import { combineReducers } from 'redux';
import recipes from './recipes';
import search from './search';
import favoriteRecipes from './favoriteRecipes';
import page from './page';
import bannerContent from './bannerContent';

const rootReducer = combineReducers({
  recipes,
  search,
  favoriteRecipes,
  page,
  bannerContent
});

export default rootReducer;
