import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books.js';

const Books = (props) => {
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    dispatch(removeBook(e.target.parentNode.parentNode.parentNode.id));
  };

  return (
        <li key={props.id} id={props.id} className="list_cnt">
            <div className="text_ctn">
                <div className="info_ctn">
                <span className="genre">Category</span>
                <span className="title">{props.name}</span>
                <span className="author">{props.author}</span>
                </div>
                <div className="btn_ctn">
                <button>Comments</button>
                <vr className="vr"></vr>
                <button onClick={removeHandler}>Remove</button>
                <vr className="vr"></vr>
                <button>Edit</button>
                </div>
            </div>
            <div className="progress_cnt">
                <div className="oval_cnt">
                    <div className="oval" />
                    <div className="progress_text">
                      <span className="porcentage">69%</span>
                      <span className="completed">Completed</span>
                    </div>
                </div>
                <vr className="progress_vr"></vr>
                <div className="chapter_info">
                  <span className="current_chapter">CURRENT CHAPTER</span>
                  <span className="chapter_name">Chapter 5</span>
                  <button>UPDATE PROGRESS</button>
                </div>
            </div>
        </li>
  );
};

export default Books;