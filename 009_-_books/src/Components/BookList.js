import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedBook = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} book={book} key={book.id} onEdit={onEdit} />
    );
  });
  return <div className="book-list">{renderedBook}</div>;
}

export default BookList;
