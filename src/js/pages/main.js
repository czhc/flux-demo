import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Settings from '../pages/settings';
import Misc from '../pages/misc';

const app  = document.getElementById('app');
// ReactDOM.render(<App />, document.getElementById('main'));
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='settings' component={Settings}></Route>
    </Route>
  </Router>,
app);
