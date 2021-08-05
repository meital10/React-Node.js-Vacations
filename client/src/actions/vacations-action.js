import {
    FETCH_VACATIONS_SUCCESS, FETCH_VACATIONS_FAILED, ADD_VACATION, DELETE_VACATION, EDIT_VACATION,
    OPEN_MODAL_ADD_VACATION, OPEN_MODAL_EDIT_VACATION,
    CHECK_AUTH_VACATION, RESET_DATA, ADD_FOLLOW, UNFOLLOW, CHART_DATA, UPDATE_VACATION
} from "./action-types";
import axios from "axios";
import { store } from "../index";


export async function fetchVacations() {
    try {
        const vacations = await getVacationsService();
        store.dispatch({ type: FETCH_VACATIONS_SUCCESS, vacations });
    } catch (ex) {
        store.dispatch({ type: FETCH_VACATIONS_FAILED });
        // GENERAL ERR
    }
}

async function getVacationsService() {
    const { data } = await axios.get("/vacations");
    return data;
}

export const deleteVacation = (vacation_id) => {
    return { type: DELETE_VACATION, vacation_id: vacation_id }


};

export const updateVacation = (vacation) => {
    return { type: UPDATE_VACATION, vacation }


};



export const addVacation = (vacation) => {
    return { type: ADD_VACATION, vacation };
}


export const editVacation = (payload) => {
    return { type: EDIT_VACATION, payload };
}

export const follow = (vacation_id) => {
    return async (dispatch) => {
        try {
            const result = await axios.post(`/vacations/add-follow`, { vacation_id })

            dispatch({ type: ADD_FOLLOW, vacation_id, result });
        } catch (err) {
            console.log(err);
        }

    }

};

export const unFollow = (vacation_id) => {
    return async (dispatch) => {
        try {
            const result = await axios.post(`/vacations/unfollow`, { vacation_id });

            dispatch({ type: UNFOLLOW, vacation_id, result });
        } catch (err) {
            console.log(err);
        }

    }

};

export const fetchChartData = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/vacations/vacation-chart`);

            dispatch({ type: CHART_DATA, data });
        } catch (err) {
            console.log(err);
        }

    }

};







