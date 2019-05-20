import { combineReducers } from "redux";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
  books: bookReducer
});

export default rootReducer;
