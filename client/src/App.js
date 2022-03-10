import { useEffect, useState } from "react";
import "./App.css";
import Book from "./components/book/book.component";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch("http://localhost:8000/v1/books");
      const booksArray = await response.json();
      setBooks(booksArray);
    };
    getBooks();
  }, []);

  return (
    <div className="App">
      <h1>Books</h1>
      {books.length > 0 &&
        books.map((book) => {
          return <Book key={book._id} {...book}></Book>;
        })}
    </div>
  );
}

export default App;
