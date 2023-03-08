import BookShow from "./BookShow";
import useBooksContext from "../Hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();

  const renderedBook = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });
  return <div className="book-list">{renderedBook}</div>;
}

export default BookList;
