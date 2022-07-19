import scoreReducer from "./scoreReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    scoreReducer,
    userReducer
})

export default allReducers;

