export const RECIEVE_MEMES = 'RECIEVE_MEMES';

function recieveMemes(json) {
  const { memes } = json.data;

  return {
    type: RECIEVE_MEMES,
    memes
  };
}

function fetchMemesJson() {
  return fetch('https://api.imgflip.com/get_memes').then((response) =>
    response.json()
  );
}

export function fetchMemes() {
  return function (dispatch) {
    return fetchMemesJson().then((json) => dispatch(recieveMemes(json)));
  };
}
