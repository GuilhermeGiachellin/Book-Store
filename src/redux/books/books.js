/* eslint-disable no-unused-vars */

// ACTIONS types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// empty book array
const initialState = [];

// ACTION CREATOR
// add
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
// remove
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;

// DISPACH
