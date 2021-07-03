import uuid from 'uuid/v4';

function createReaction({ type, emoji, username, messageId }) {
  return {
    type,
    item: {
      id: uuid(),
      timestamp: Date.now(),
      emoji,
      username,
      messageId
    }
  };
}

export default createReaction;
