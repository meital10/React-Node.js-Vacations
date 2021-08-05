import { MODAL_EDIT_MODE, MODAL_ADD_MODE, MODAL_DELETE_MODE, MODAL_CHART_MODE } from '../actions/action-types';

const modalModeReducer = (state = {}, action) => {
    switch (action.type) {
        case MODAL_EDIT_MODE:
            return {
                active: true,
                edit: true
            };
        case MODAL_ADD_MODE:
            return {
                active: true,
                add: true
            }
        case MODAL_DELETE_MODE:
            return {
                active: true,
                delete: true
            }


        default:
            return state
    }
}

export default modalModeReducer