import { SNACKBAR, APP_READY } from "../actions/action-types";

const initState = {
  sbOpened: false,
  sbMessage: "",
  sbSevirity: "error",
  ready: false,
};
const globalReducers = (state = initState, action) => {
  switch (action.type) {
    case SNACKBAR.OPEN: {
      const { sbMessage, sbSevirity } = action.payload;
      return {
        ...state,
        sbOpened: true,
        sbMessage,
        sbSevirity,
      };
    }
    case APP_READY: {
      return {
        ...state,
        ready: true
      }
    }

    case SNACKBAR.CLOSE: {
      return {
        ...state,
        sbOpened: false,
        sbMessage: "",
        sbSevirity: "error",
      };
    }

    default:
      return state;
  }
};

export default globalReducers;
