import React from "react";
import { render } from "react-dom";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import { Provider } from "react-redux";

import { CounterReducer, ThemeReducer } from "./features/counter";
import { TaskReducer } from "./features/taskmanage";
import { SearchTypeReducer, searchQueryReducer } from "./features/gql";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";
import { cache } from "./cache";

export const client = new ApolloClient({
  cache,
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: "Bearer 547c322ce66e642ceb6131d056bd3906d0149219"
  },
  connectToDevTools: true
});

const rootReducer = combineReducers({
  count: CounterReducer,
  theme: ThemeReducer,
  tasks: TaskReducer,
  searchType: SearchTypeReducer,
  searchQuery: searchQueryReducer
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
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
