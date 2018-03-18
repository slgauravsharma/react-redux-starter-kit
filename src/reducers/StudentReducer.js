import * as StudentActionTypes from "../actions/StudentActionTypes";
import initialStoreState from "../store/InitialStoreState";

const studentReducer = (state = initialStoreState.student, action) => {
  switch (action.type) {
    case StudentActionTypes.ACTION_STUDENT_NAME_CHANGE:
      return { name: action.name };
    default:
      return state;
  }
};

export default studentReducer;
