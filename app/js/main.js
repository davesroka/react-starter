import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configure-store';

import '../scss/main.scss';
import App from 'components/app';
import StarterContainer from 'containers/starter-container';

ReactDOM.render((
  <Provider store={configureStore()}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="starterRoute" component={starterContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('main'));




