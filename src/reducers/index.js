import { combineReducers } from "redux";
import { registerReduce } from "./register.reducer";

export const rootReducer = combineReducers({ registerReduce });
