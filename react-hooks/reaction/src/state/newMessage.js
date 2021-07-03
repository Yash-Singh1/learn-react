import { NEW_MESSAGE } from './types';
import uuid from 'uuid/v4';

function newMessage({text, username}) {
  return {
    type: NEW_MESSAGE,
    item: {
      id: uuid(),
      text,
      username,
      timestamp: Date.now()
    }
  };
}

export default newMessage;
