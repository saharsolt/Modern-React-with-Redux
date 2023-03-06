import { useState } from "react";
import "./index.css";
import BookList from "./Components/BookList";
import BookCreate from "./Components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBooksById = (id) => {
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBook);
  };

  const editBookById = (id, newTitle) => {
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return { ...book };
    });
    setBooks(updatedBook);
  };

  const handleCreateBook = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBook);
  };

  return (
    <div className="app">
      <h1>Reading lists!</h1>
      <BookList
        books={books}
        onDelete={deleteBooksById}
        onEdit={editBookById}
      />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
