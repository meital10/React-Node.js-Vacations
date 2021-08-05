import {
    SET_USER, LOGOUT_USER, AUTHORIZED, UNAUTHORIZED,
    SNACKBAR, APP_READY
} from "./action-types";
import axios from "axios";

// checkUserAuthentication
export const checkUserAuthentication = () => {
    return async dispatch => {
        try {
            const res = await axios.get("/check_authentication")
            dispatch({ type: AUTHORIZED, res });
        } catch (err) {
            dispatch({ type: UNAUTHORIZED });

        }
    }
};


export const setAppReady = () => ({ type: APP_READY })


// check set user
export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
};

// SignUp
export const signup = (userDetails) => {
    return async dispatch => {
        try {
            const res = await axios.put("/signup", userDetails)
            if (res.data.user) {
                dispatch({ type: AUTHORIZED });
            }
        } catch (err) {
            dispatch({ type: UNAUTHORIZED });
            console.log(err);
        }
    }
};
// login
export const login = (userDetails) => {
    return async dispatch => {
        try {
            const res = await axios.post("/login", userDetails)
            if (res.data.user) {
                dispatch({ type: AUTHORIZED });
            }
        } catch (err) {
            dispatch({ type: UNAUTHORIZED });
            console.log(err);
        }
    }

};


export const currentUser = () => {
    return async dispatch => {
        try {
            const res = await axios.get("/auth/currentUser");
            if (res.data.user) {
                dispatch(setUser(res.data.user))
            }
            dispatch(setAppReady())

            // dispatch({ type: AUTHORIZED });
        } catch (err) {
            dispatch(setAppReady())
            console.log(err);
        }
    }
};

// logout

export const logout = () => {
    return { type: LOGOUT_USER }
};

// snackBar
export const openSnackBarAction = (snackBarOpt) => {
    return {
        type: SNACKBAR.OPEN,
        payload: snackBarOpt,
    };
};

export const closeSnackBarAction = () => {
    return {
        type: SNACKBAR.CLOSE,
    };
};