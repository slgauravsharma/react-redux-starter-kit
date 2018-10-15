import { combineReducers } from "redux";
import bookReducer from "./BookReducer";
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  books: bookReducer,
  form: reduxFormReducer
});

export default rootReducer;
