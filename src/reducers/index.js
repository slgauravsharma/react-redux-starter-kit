import { combineReducers } from "redux";
import studentReducer from "./StudentReducer";

const rootReducer = combineReducers({
  student: studentReducer
});

export default rootReducer;
