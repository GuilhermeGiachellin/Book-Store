/* eslint-disable no-unused-vars */

// ACTIONS
export function addBook() {
  return {
    type: 'ADD_BOOK',
  };
}

export function removeBook() {
  return {
    type: 'REMOVE_BOOK',
  };
}

// REDUCER
export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return state + 1;
    case 'REMOVE_BOOK':
      return state - 1;
    default:
      return state;
  }
}

// DISPACH
