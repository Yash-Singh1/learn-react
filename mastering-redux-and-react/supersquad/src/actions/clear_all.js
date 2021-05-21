export const CLEAR_ALL = 'CLEAR_ALL';

export function clearAll() {
  const action = {
    type: CLEAR_ALL,
  };
  return action;
}
