export const NEW_MEME = 'NEW_MEME';

export function newMeme(meme) {
  return {
    type: NEW_MEME,
    meme
  };
}
