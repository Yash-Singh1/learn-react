import { combineReducers } from 'redux';
import memes from './memes';
import myMemes from './myMemes';

const rootReducer = combineReducers({ memes, myMemes });

export default rootReducer;
