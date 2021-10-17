import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { fetchMemes } from './actions';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
// store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
