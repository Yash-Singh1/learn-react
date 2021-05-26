import { SET_SEARCH } from '../actions';

function search(state = { ingredients: '', dish: '', number: 0 }, action) {
  switch (action.type) {
    case SET_SEARCH:
      return Object.assign(state, action.search);
    default:
      return state;
  }
}

export default search;
