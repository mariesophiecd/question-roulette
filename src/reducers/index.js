import scoreReducer from "./scoreReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    score: scoreReducer,
    userReducer
})

export default allReducers;

