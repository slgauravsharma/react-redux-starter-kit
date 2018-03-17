const StudentReducer = (state = { name: "" }, action) => {
  switch (action.type) {
    case "CHANGE":
      return { name: action.name };
    default:
      return state;
  }
};

export default StudentReducer;
