/* eslint-disable no-unused-vars */
function Books({
  name, author, genre, id,
}) {
  return (
        <li key={id} className="list_cnt">
            <div>
                <div className="info_ctn">
                <span className="genre">{genre}</span>
                <span className="title">{name}</span>
                <span className="author">{author}</span>
                </div>
                <div className="btn_ctn">
                <button>Comments</button>
                <button>Remove</button>
                <button>Edit</button>
                </div>
            </div>
        </li>
  );
}

export default Books;