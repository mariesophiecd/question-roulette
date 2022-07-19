import { createStore, combineReducers } from "redux";
import { scoreReducer } from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({
    score: scoreReducer,
  }),
  devToolsEnhancer()
);
