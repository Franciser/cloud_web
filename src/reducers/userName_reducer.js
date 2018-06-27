import * as userNameType from "../constants/userNameUpdate"
const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case userNameType.userNameUpdate:
            return { userName: action.data }
        default:
            return state
    }
}
