/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books.js';

const Form = () => {
  const dispatch = useDispatch();
  const addHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: e.target.title.value,
      category: e.target.author.value,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={addHandler}>
       <h1 className="form_title">ADD NEW BOOK</h1>
         <div className="input_ctn">
           <input placeholder="Book Title" className="book_input" name="title"></input>
           <input placeholder="Author" className="category_input" name="author"></input>
           <button type="submit">ADD BOOK</button>
          </div>
     </form>
  );
};

export default Form;