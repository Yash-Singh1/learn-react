import balance from './balance';
import bitcoin from './bitcoin';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ balance, bitcoin });

export default rootReducer;
