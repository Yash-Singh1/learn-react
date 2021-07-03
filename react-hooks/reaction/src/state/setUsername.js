import { SET_USERNAME } from './types';

function setUsername(username) {
  return {
    type: SET_USERNAME,
    username
  };
}

export default setUsername;
