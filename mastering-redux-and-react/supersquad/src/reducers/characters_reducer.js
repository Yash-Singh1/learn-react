import characters_json from '../data/characters.json';
import { createCharacter } from './helpers';
import { ADD_CHARACTER, CLEAR_ALL, REMOVE_CHARACTER } from '../actions';

function characters(state = characters_json, action) {
  let characters;
  switch (action.type) {
    case ADD_CHARACTER:
      characters = state.filter((item) => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTER:
      characters = [...state, createCharacter(action.id)];
      return characters;
    case CLEAR_ALL:
      return characters_json;
    default:
      return state;
  }
}

export default characters;
