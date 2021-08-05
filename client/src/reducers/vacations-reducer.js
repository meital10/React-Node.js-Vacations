import { UPDATE_VACATION, FETCH_VACATIONS_SUCCESS, ADD_FOLLOW, UNFOLLOW, DELETE_VACATION, RESET_DATA, ADD_VACATION, EDIT_VACATION } from "../actions/action-types";

const vacationsReducers = (state = { vacations: [] }, action) => {
  console.log('vacationsReducers', action);
  switch (action.type) {
    case FETCH_VACATIONS_SUCCESS:
      return { vacations: [...action.vacations] };
    case ADD_VACATION: {
      return { ...state, vacations: [...state.vacations, action.vacation] };
    }

    case UPDATE_VACATION: return {
      ...state, vacations: state.vacations.map(vacation => {
        if (vacation.vacation_id === action.vacation.vacation_id) {
          return action.vacation
        }
        return vacation;
      })
    }

    case DELETE_VACATION:
      {
        return { ...state, vacations: state.vacations.filter(v => v.vacation_id !== action.vacation_id) }
      }

    case ADD_FOLLOW:
      return {
        ...state, vacations: toggleFollow(state.vacations, action.vacation_id, true)
      }

    case UNFOLLOW:
      return {
        ...state, vacations: toggleFollow(state.vacations, action.vacation_id, false)
      }

    case RESET_DATA:
      return [];

    default:
      return state;
  }
};

export default vacationsReducers;


function toggleFollow(vacations, id, followed) {
  return vacations.map(vacation => {
    if (vacation.vacation_id == id) {
      vacation.followed = followed;
    }
    return { ...vacation };
  })
}





