import * as bookActionTypes from "./bookActionTypes";

export const addBookAction = rData => {
  return {
    type: bookActionTypes.ACTION_ADD_BOOK,
    addBook: rData
  };
};

export const updateBookAction = rData => {
  return { type: bookActionTypes.ACTION_UPDATE_BOOK, updateBook: rData };
};

export const deleteBookAction = rData => {
  return { type: bookActionTypes.ACTION_DELETE_BOOK, deleteBook: rData };
};
