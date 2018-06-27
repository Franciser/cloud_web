// var loginUpdate = "LOGIN_UPDATE";
import * as loginType from "../constants/loginUpdate"
const initialState={}

export default function (state = initialState, action) {
    switch (action.type) {
        case loginType.loginUpdate:
            return {isLogin:action.data}
        default:
            return state
    }
}
