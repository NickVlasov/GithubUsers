import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';

import userIndex from './containers/user-index';
import userInfo from './containers/user-info';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Link to="/" className="mainLink"><h2>React app created with Github API</h2></Link>
        <Switch>
          <Route path="/user/:login" component={userInfo} />
          <Route path="/" component={userIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
