import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import Header from './components/Header';
import Jokes from './components/Jokes';
import './index.css';

render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" render={() => <Header><App /></Header>} />
      <Route path="/jokes" render={() => <Header><Jokes /></Header>} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
