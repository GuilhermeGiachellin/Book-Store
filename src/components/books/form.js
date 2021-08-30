/* eslint-disable no-unused-vars */
const Form = () => (
        <form>
        <h1 className="form_title">Add Books</h1>
        <div className="input_ctn">
        <input placeholder="Book Title" className="book_input"></input>
        <input placeholder="Category" className="category_input"></input>
        <button type="submit">ADD BOOK</button>
        </div>
        </form>
);

export default Form;