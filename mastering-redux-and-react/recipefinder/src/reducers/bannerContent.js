import { SET_BANNER_CONTENT } from '../actions';

function setBannerContent(state = null, action) {
  switch (action.type) {
    case SET_BANNER_CONTENT:
      return action.content;
    default:
      return state;
  }
}

export default setBannerContent;
