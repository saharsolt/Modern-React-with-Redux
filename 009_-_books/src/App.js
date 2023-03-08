import { useEffect, useContext } from "react";
import "./index.css";
import BookList from "./Components/BookList";
import BookCreate from "./Components/BookCreate";
import BooksContext from "./Context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading lists!</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
