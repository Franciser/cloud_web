// var loginUpdate="LOGIN_UPDATE";
import * as loginType from "../constants/loginUpdate"
export const update=(data)=>{
    return {
        type: loginType.loginUpdate,
        data:data
    }
}