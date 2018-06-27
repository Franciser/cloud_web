import {combineReducers} from "redux"
import loginReducer from "./login_reducer";
import userNameReducer from "./userName_reducer"
export default combineReducers({
    loginReducer,
    userNameReducer,
})