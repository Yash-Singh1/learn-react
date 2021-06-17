import { SET_BALANCE, DEPOSIT, WITHDRAW } from './constants';

export function setBalance(balance) {
  return {
    type: SET_BALANCE,
    balance
  };
}

export function deposit(deposit) {
  return {
    type: DEPOSIT,
    deposit
  };
}

export function withdraw(withdrawal) {
  return {
    type: WITHDRAW,
    withdrawal
  };
}
