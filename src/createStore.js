import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

export default (req) => {
  const store = createStore(reducers, {});
  return store;
};
