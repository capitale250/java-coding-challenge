import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducer/index";

const initialState = {};
const middlewares = [thunk];
let devtools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;
const Store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),

  )
);
export default Store;