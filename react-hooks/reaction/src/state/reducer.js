import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from './types';

export const initialState = {
  messages: [],
  username: 'anonymous',
  reactionsMap: {}
};

const REACTION_TYPES = REACTION_OBJECTS.map(
  (REACTION_OBJECT) => REACTION_OBJECT.type
);

const reducer = (state, action) => {
  if (REACTION_TYPES.includes(action.type)) {
    const messageReactions = state.reactionsMap[action.item.messageId];

    const reactionsMap = {
      ...state.reactionsMap,
      [action.item.messageId]: messageReactions
        ? [...messageReactions, action.item]
        : [action.item]
    };

    return { ...state, reactionsMap };
  }

  switch (action.type) {
    case NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.item] };
    case SET_USERNAME:
      return { ...state, username: action.username };
    default:
      return state;
  }
};

export default reducer;
