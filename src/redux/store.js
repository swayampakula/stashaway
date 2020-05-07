import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { restaurants } from "./reducers/restaurants";

const store = () => {
  const store = createStore(
    combineReducers({ restaurants }),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
  return store;
};

export default store;
