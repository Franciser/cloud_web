import * as userNameType from "../constants/userNameUpdate"
export const update = (data) => {
    return {
        type: userNameType.userNameUpdate,
        data: data
    }
}