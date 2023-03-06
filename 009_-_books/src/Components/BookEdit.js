import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSaveClick}>
      <lable>Title</lable>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary">Edit</button>
    </form>
  );
}

export default BookEdit;
