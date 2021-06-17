import { FETCH_BITCOIN } from './constants';

export function fetchBitcoin() {
  return function (dispatch) {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice/usd.json')
      .then((response) => response.json())
      .then((json) => dispatch({ type: FETCH_BITCOIN, bitcoin: json }));
  };
}
