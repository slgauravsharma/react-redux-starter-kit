import * as StudentActionTypes from "./StudentActionTypes";

export const studentNameChangeAction = name => {
  return { type: StudentActionTypes.ACTION_STUDENT_NAME_CHANGE, name: name };
};
