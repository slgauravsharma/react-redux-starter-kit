import { combineReducers } from "redux";
import bookReducer from "./BookReducer";

const rootReducer = combineReducers({
  books: bookReducer
});

export default rootReducer;
