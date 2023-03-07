import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import BookList from "./Components/BookList";
import BookCreate from "./Components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBooksById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBook);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    console.log(response);

    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return { ...book };
    });
    setBooks(updatedBook);
  };

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });

    const updatedBook = [...books, response.data];
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
