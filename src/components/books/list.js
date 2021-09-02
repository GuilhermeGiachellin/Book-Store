/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Books from './books.js';
import Form from './form.js';
import './list.css';
import { setBook } from '../../redux/books/books.js';

const List = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBook());
  }, []);

  return (
    <div>
        <ul>
            {bookList.map((book) => (
               <Books name={book.title} author={book.category} id={book.item_id}
               key={book.item_id}/>
            ))}
        </ul>
        <hr />
          <Form />
    </div>
  );
};

export default List;