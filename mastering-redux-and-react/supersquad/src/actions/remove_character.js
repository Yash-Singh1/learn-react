export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export function removeCharacterById(id) {
  const action = {
    type: REMOVE_CHARACTER,
    id
  };
  return action;
}
