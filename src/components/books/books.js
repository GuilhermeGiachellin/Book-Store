import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books.js';

const Books = (props) => {
  const dispach = useDispatch();
  const removeHandler = (e) => {
    dispach(removeBook(e.target.parentNode.parentNode.parentNode.id));
  };
  return (
        <li key={props.id} id={props.id} className="list_cnt">
            <div>
                <div className="info_ctn">
                <span className="genre">{props.genre}</span>
                <span className="title">{props.name}</span>
                <span className="author">Author</span>
                </div>
                <div className="btn_ctn">
                <button>Comments</button>
                <button onClick={removeHandler}>Remove</button>
                <button>Edit</button>
                </div>
            </div>
        </li>
  );
};

export default Books;