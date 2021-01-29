import { combineReducers } from "redux";
import { registerReduce } from "./register.reducer";
import { loginReduce } from "./login.reducer";

export const rootReducer = combineReducers({ registerReduce, loginReduce });
