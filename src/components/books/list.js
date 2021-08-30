/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import React from 'react';
import Books from './books.js';
import Form from './form.js';
import './list.css';

const List = () => {
  const bookList = useSelector((state) => state.booksReducer);
  return (
    <div>
        <ul>
            {bookList.map((book) => (
               <Books name={book.bookTitle} genre={book.bookCategory} id={book.id}
               key={book.id}/>
            ))}
        </ul>
          <Form />
    </div>
  );
};

export default List;