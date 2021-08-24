/* eslint-disable no-unused-vars */
import Books from './books.js';
import Form from './form.js';
import './list.css';

function List() {
  const bookList = [{
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
  }];

  return (
    <div>
        <ul>
            {bookList.map((book) => (
               <Books name={book.title} author={book.author} genre={book.genre} key={book.id}/>
            ))}
        </ul>
          <Form />
    </div>
  );
}

export default List;