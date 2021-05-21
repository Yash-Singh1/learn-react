import { createCharacter } from './helpers';
import { ADD_CHARACTER, CLEAR_ALL, REMOVE_CHARACTER } from '../actions';

function heroes(state = [], action) {
  let heroes;
  switch (action.type) {
    case ADD_CHARACTER:
      heroes = [...state, createCharacter(action.id)];
      return heroes;
    case REMOVE_CHARACTER:
      heroes = state.filter((item) => item.id !== action.id);
      return heroes;
    case CLEAR_ALL:
      return [];
    default:
      return state;
  }
}

export default heroes;
