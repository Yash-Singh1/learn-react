import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import useAppContext from '../hooks/useAppContext';
import setUsername from '../state/setUsername';

function SetUsername() {
  const {
    dispatch,
    state: { username }
  } = useAppContext();

  function updateUsername(event) {
    dispatch(setUsername(event.target.value));
  }

  return (
    <div>
      <h3>Username</h3>
      <Form inline>
        <FormControl onChange={updateUsername} value={username} />
      </Form>
    </div>
  );
}

export default SetUsername;
