import React from "react";
import { render } from "react-dom";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import { Provider } from "react-redux";

import { CounterReducer, ThemeReducer } from "./features/counter";
import { TaskReducer } from "./features/taskmanage";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";

const rootReducer = combineReducers({
  count: CounterReducer,
  theme: ThemeReducer,
  tasks: TaskReducer
});

const preloadedState = {};
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware()
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
