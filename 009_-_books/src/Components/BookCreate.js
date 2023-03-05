import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
  };

  return (
    <div className="book-create">
      <h3>Add a book!</h3>
      <form onSubmit={handelSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
