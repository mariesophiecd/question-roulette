import { createStore } from "redux";
import allReducers from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(
  allReducers,
  devToolsEnhancer()
);
