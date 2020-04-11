import { combineReducers } from "redux";
import createReducer from "./createReducer";
import listReducer from "./listReducer";
import menuReducer from "./menuReducer";

export default combineReducers({
  create: createReducer,
  list: listReducer,
  menu: menuReducer,
});
