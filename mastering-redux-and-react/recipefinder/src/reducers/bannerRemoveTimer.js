import SET_BANNER_REMOVE_TIMER from '../actions';

function bannerRemoveTimer(state = 0, action) {
  switch (action.type) {
    case SET_BANNER_REMOVE_TIMER:
      return action.timer;
    default:
      return state;
  }
}

export default bannerRemoveTimer;
