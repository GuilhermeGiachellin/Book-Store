/* eslint-disable no-unused-vars */
import React from 'react';
import Books from './books.js';
import Form from './form.js';
import './list.css';

class List extends React.Component {
  state = {
    bookList: [{
      title: 'Republic',
      author: 'Plato',
      genre: 'Phylosophy',
      id: 1,
    },
    {
      title: 'The Prince',
      author: 'Machiavel',
      genre: 'Phylosophy',
      id: 2,
    }],
  }

  render() {
    return (
    <div>
        <ul>
            {this.state.bookList.map((book) => (
               <Books name={book.title} author={book.author} genre={book.genre}
               key={book.id}/>
            ))}
        </ul>
          <Form />
    </div>
    );
  }
}

export default List;