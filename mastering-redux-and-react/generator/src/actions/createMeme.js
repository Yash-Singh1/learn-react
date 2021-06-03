import { newMeme } from './newMeme';
import { username, password } from './secrets';

export const POST_MEME = 'POST_MEME';

function postMemeJson(json) {
  json.username = username;
  json.password = password;

  const bodyParams = Object.keys(json)
    .map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    })
    .join('&');

  return fetch('https://api.imgflip.com/caption_image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams
  }).then(async (response) => ({ ...(await response.json()), ...json.meme }));
}

export function createMeme(new_meme_object) {
  return function (dispatch) {
    return postMemeJson(new_meme_object).then((json) =>
      dispatch(newMeme(json))
    );
  };
}
