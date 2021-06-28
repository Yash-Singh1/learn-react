import React from 'react';
import useFetch from '../hooks/useFetch';

function Joke() {
  const joke = useFetch(
    'https://official-joke-api.appspot.com/jokes/random',
    {}
  );

  return (
    <div>
      <h3>Joke</h3>
      {Object.keys(joke).length !== 0 ? (
        <>
          <p>{joke.setup}</p>
          <p>
            <em>{joke.punchline}</em>
          </p>
        </>
      ) : null}
    </div>
  );
}

export default Joke;
