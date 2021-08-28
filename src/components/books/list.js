/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addBook } from '../../redux/books/books';
import Books from './books.js';
import Form from './form.js';
import './list.css';

function List() {
  const bookList = useSelector((state) => state.booksReducer);
  console.log(bookList);
  return (
    <div>
        <ul>
            {bookList.map((book) => (
               <Books name={book.bookTitle} genre={book.bookCategory}
               id={book.id} key={book.id}/>
            ))}
        </ul>
          <Form />
    </div>
  );
}

export default List;