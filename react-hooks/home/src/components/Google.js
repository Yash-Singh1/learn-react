import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function Google() {
  const [userQuery, setUserQuery] = useState('');

  return (
    <Form className="form" inline>
      <FormControl
        value={userQuery}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            window.open(`https://google.com/search?q=${userQuery}`, '_blank');
          }
        }}
        onChange={(event) => setUserQuery(event.target.value)}
      />{' '}
      <Button
        onClick={() =>
          window.open(`https://google.com/search?q=${userQuery}`, '_blank')
        }
      >
        Search
      </Button>
    </Form>
  );
}

export default Google;
