import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const allMiddlewares = [thunk, logger];
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...allMiddlewares))
);
