import { useState } from "react";
import useBooksContext from "../Hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSaveClick}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary">Edit</button>
    </form>
  );
}

export default BookEdit;
