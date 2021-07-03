import React, { useEffect, useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import SetUsername from './SetUsername';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import Context from '../context';
import PubSub, { MESSAGE_CHANNEL } from '../pubsub';

const pubsub = new PubSub();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: (messageObject) => {
        const { channel, message } = messageObject;
        console.log(
          'Recieved message',
          message,
          'channel',
          channel,
          messageObject
        );
        dispatch({
          type: message.type,
          item: { ...message.item, nanoTimestamp: messageObject.timetoken }
        });
      }
    });

    (async function () {
      (await pubsub.fetchMessages()).channels[MESSAGE_CHANNEL]?.forEach(
        (message) =>
          dispatch({
            type: message.message.type,
            item: { ...message.message.item, nanoTimestamp: message.timetoken }
          })
      );
    })();
  }, []);

  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <hr />
      <SetUsername />
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
