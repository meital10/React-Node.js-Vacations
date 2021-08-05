import { UNAUTHORIZED, AUTHORIZED } from "../actions/action-types";

const authentication = (state = { is_authenticated: false }, action) => {
    switch (action.type) {
        case UNAUTHORIZED:
            return { is_authenticated: false };
        case AUTHORIZED:
            return { is_authenticated: true };
        default:
            return state
    }
};

export default authentication
