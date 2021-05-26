import { SET_PAGE } from '../actions';

function page(state = 1, action) {
  switch (action.type) {
    case SET_PAGE:
      return action.page;
    default:
      return state;
  }
}

export default page;
