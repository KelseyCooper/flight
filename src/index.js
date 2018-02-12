import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import "./index.css";
import App from "./components/App";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { setCurrentUser } from "./actions/actions_authenticate";

import jwt from 'jsonwebtoken';

require("dotenv").config();
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

if (localStorage.jwtToken) {
  console.log(localStorage);
  
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
