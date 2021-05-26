export const SET_BANNER_REMOVE_TIMER = 'SET_BANNER_REMOVE_TIMER';

export function setBannerRemoveTimer(timer) {
  return {
    type: SET_BANNER_REMOVE_TIMER,
    timer
  };
}
