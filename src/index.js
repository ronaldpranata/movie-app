import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import thunk from 'redux-thunk'
import reducer from './reducers'



import App from './containers/App'
import Movies from './containers/Movies'
import Series from './containers/Series'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)


var hist = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/series" component={Series} />
        <Route path="/movie" component={Movies} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
