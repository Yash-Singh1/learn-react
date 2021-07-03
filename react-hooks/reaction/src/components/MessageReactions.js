import React from 'react';

function MessageReactions({ messageReactions }) {
  if (!messageReactions) return null;

  return messageReactions.map((reaction, index) => {
    return (
      <span key={reaction.id}>
        <em>{reaction.username}: </em>
        {reaction.emoji}
        {index === messageReactions.length - 1 ? null : ', '}
      </span>
    );
  });
}

export default MessageReactions;
