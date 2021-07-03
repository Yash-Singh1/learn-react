import React from 'react';
import useAppContext from '../hooks/useAppContext';
import { REACTION_OBJECTS } from '../state/types';
import { createReaction } from '../state/actions';

function CreateReaction({ messageId }) {
  const {
    pubsub: { publish },
    state: { username }
  } = useAppContext();

  function publishReaction({ type, emoji }) {
    publish(createReaction({ type, emoji, username, messageId }));
  }

  return (
    <div className="CreateReaction">
      {REACTION_OBJECTS.map((REACTION_OBJECT) => (
        <span
          key={REACTION_OBJECTS.type}
          onClick={() =>
            publishReaction({
              type: REACTION_OBJECT.type,
              emoji: REACTION_OBJECT.emoji
            })
          }
        >
          {REACTION_OBJECT.emoji}
        </span>
      ))}
    </div>
  );
}

export default CreateReaction;
