import { combineReducers } from "redux";
import LoginReducers from "./LoginReducers";

const rootReducers = combineReducers({
    login:LoginReducers
})

export default rootReducers;