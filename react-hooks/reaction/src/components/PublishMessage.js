import React, { useState } from 'react';
import useAppContext from '../hooks/useAppContext';
import { newMessage } from '../state/actions';
import { Form, FormControl, Button } from 'react-bootstrap';

function PublishMessage() {
  const {
    pubsub: { publish },
    state: { username }
  } = useAppContext();

  const [text, setText] = useState('');

  function updateText(event) {
    setText(event.target.value);
  }

  function publishMessage() {
    publish(newMessage({ text, username }));
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      publishMessage();
      event.preventDefault();
    }
  }

  return (
    <div>
      <h4>Got something to say?</h4>
      <Form inline>
        <FormControl onChange={updateText} onKeyPress={handleKeyPress} />{' '}
        <Button onClick={publishMessage}>Publish it!</Button>
      </Form>
    </div>
  );
}

export default PublishMessage;
