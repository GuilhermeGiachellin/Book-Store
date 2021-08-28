import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

/* eslint-disable no-unused-vars */
function Books({
  name, genre, id,
}) {
  const dispach = useDispatch();
  const removeHandler = (e) => {
    dispach(removeBook(e.target.parentNode.parentNode.parentNode.id));
  };
  console.log(id);
  return (
        <li key={id} id={id} className="list_cnt">
            <div>
                <div className="info_ctn">
                  <span className="genre">{genre}</span>
                  <span className="title">{name}</span>
                  <span className="author">author</span>
                </div>
                <div className="btn_ctn">
                  <button>Comments</button>
                  <button onClick={removeHandler}>Remove</button>
                  <button>Edit</button>
                </div>
            </div>
        </li>
  );
}

export default Books;