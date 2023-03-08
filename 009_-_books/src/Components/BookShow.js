import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../Hooks/use-books-context";

function BookShow({ book }) {
  const [edit, setEdit] = useState(false);
  const { deleteBooksById } = useBooksContext();

  const handleEditClick = () => {
    setEdit(!edit);
  };
  const handleDeleteClick = () => {
    deleteBooksById(book.id);
  };

  const handleSubmit = () => {
    setEdit(false);
  };

  let content = <h3>{book.title}</h3>;

  if (edit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="book"
      ></img>
      {content}

      <div className="action">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
