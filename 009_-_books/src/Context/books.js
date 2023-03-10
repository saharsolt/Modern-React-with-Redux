import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  // const stableFetchBooks = useCallback(fetchBooks,[]);

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

  const valueToShare = {
    books,
    handleCreateBook,
    editBookById,
    fetchBooks,
    deleteBooksById,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
