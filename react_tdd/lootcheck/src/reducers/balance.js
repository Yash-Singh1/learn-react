import { SET_BALANCE, DEPOSIT, WITHDRAW } from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

function balance(state = 0, action) {
  let balance;

  switch (action.type) {
    case SET_BALANCE:
      balance = action.balance;
      break;
    case DEPOSIT:
      balance = state + action.deposit;
      break;
    case WITHDRAW:
      balance = state - action.withdrawal;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE)) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
}

export default balance;
