import { RECIEVE_MEMES } from '../actions';

export default function memes(state = [], action) {
  switch (action.type) {
    case RECIEVE_MEMES:
      return action.memes;
    default:
      return state;
  }
}
