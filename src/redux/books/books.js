/* eslint-disable no-unused-vars */
import axios from 'axios';

// ACTIONS types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_BOOK = 'bookStore/books/SET_BOOK';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/y0zK3yWp8wGVRnYQ02Eb/books/';

const bookArray = (data) => {
  const initialState = [];
  Object.entries(data).forEach((book) => {
    initialState.push(
      {
        item_id: `${book[0]}`,
        title: book[1][0].title,
        category: book[1][0].category,
      },
    );
  });
  return initialState;
};

// ACTION CREATOR

// set
export const setBook = () => async (dispatch) => {
  const response = await axios.get(url);
  dispatch({
    type: SET_BOOK,
    payload: bookArray(response.data),
  });
};

// add
export const addBook = (payload) => async (dispatch) => {
  await axios.post(url, payload);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};
// remove
export const removeBook = (payload) => async (dispatch) => {
  await axios.delete(url + payload);

  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case SET_BOOK:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;