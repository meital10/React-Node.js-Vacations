import { combineReducers } from "redux";
import VacationsReducer from "./vacations-reducer";
import Authentication from "./authentication";
import modalModeReducer from "./modal-mode-reducer";
import user from "./user";
import globalReducers from "./global-reducer";
export default combineReducers({
  VacationsReducer,
  Authentication,
  modalModeReducer,
  user,
  globalReducers,
});
