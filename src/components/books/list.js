/* eslint-disable no-unused-vars */
import Books from './books.js';
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
        <form>
              <h1 className="form_title">Add Books</h1>
              <div className="input_ctn">
              <input placeholder="Book Title" className="book_input"></input>
              <input placeholder="Category" className="category_input"></input>
              <button type="submit">ADD BOOK</button>
              </div>
        </form>
        </div>
  );
}

export default List;