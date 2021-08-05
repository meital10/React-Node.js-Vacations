import { SET_USER, LOGOUT_USER } from "../actions/action-types";

const userReducer = (state = null, action) => {
    switch (action.type) {
        case LOGOUT_USER:
            return null;
        case SET_USER:
            return action.payload;
        default:
            return state
    }
};

export default userReducer;