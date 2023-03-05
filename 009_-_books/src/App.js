import { useState } from "react";
import "./index.css";
import BookList from "./Components/BookList";
import BookCreate from "./Components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const bookUpdate = [...books, { id: 123, title: "Heaven" }];
    setBooks(bookUpdate);
  };

  return (
    <div>
      <BookCreate onCreate={handleCreateBook} />
      <BookList />
    </div>
  );
}

export default App;
