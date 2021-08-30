/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books.js';

const Form = () => {
  const dispach = useDispatch();
  const addHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      bookTitle: e.target.title.value,
      bookCategory: e.target.category.value,
    };
    dispach(addBook(newBook));
  };

  return (
    <form onSubmit={addHandler}>
       <h1 className="form_title">Add Books</h1>
         <div className="input_ctn">
           <input placeholder="Book Title" className="book_input" name="title"></input>
           <input placeholder="Category" className="category_input" name="category"></input>
           <button type="submit">ADD BOOK</button>
          </div>
     </form>
  );
};

export default Form;