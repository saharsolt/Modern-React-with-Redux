import BookShow from "./BookShow";
import BooksContext, { Provider } from "../Context/books";
import { useContext } from "react";

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderedBook = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} book={book} key={book.id} onEdit={onEdit} />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click</button>
      {renderedBook}
    </div>
  );
}

export default BookList;
