import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Store from './store/store.js';

import Routes from './app/Routes.js';

render(
  <Provider store={Store}>
    <Router
      history={hashHistory}
      routes={Routes}
    />
  </Provider>,
  document.querySelector('.js-mount-point')
);
