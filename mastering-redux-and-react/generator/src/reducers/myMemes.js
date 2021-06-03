import { NEW_MEME } from '../actions';

export default function myMemes(state = [], action) {
  switch (action.type) {
    case NEW_MEME:
      state = [...state, action.meme];
      return state;
    default:
      return state;
  }
}
