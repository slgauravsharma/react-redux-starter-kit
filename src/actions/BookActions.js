import * as BookActionTypes from "./BookActionTypes";

export const addBookAction = rData => {
  return {
    type: BookActionTypes.ACTION_ADD_BOOK,
    addBook: rData
  };
};
export const updateBookAction = rData => {
  return { type: BookActionTypes.ACTION_UPDATE_BOOK, updateBook: rData };
};
export const deleteBookAction = rData => {
  return { type: BookActionTypes.ACTION_DELETE_BOOK, deleteBook: rData };
};
