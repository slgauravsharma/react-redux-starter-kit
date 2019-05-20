import * as BookActionTypes from "../actions/bookActionTypes";
import initialStoreState from "../store/initialStoreState";

const bookReducer = (state = initialStoreState.books, action) => {
  switch (action.type) {
    case BookActionTypes.ACTION_ADD_BOOK:
      return [...state, action.addBook];
    case BookActionTypes.ACTION_UPDATE_BOOK:
      return state.map(book => {
        if (book.bookId === action.updateBook.bookId) {
          return action.updateBook;
        } else {
          return book;
        }
      });
    case BookActionTypes.ACTION_DELETE_BOOK:
      return state.filter(book => book.bookId !== action.deleteBook.bookId);
    default:
      return state;
  }
};

export default bookReducer;
