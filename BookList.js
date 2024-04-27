import React, { useState } from 'react';
import BookForm from './BookForm';

function BookList() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);

  const handleAddBook = (values) => {
    setBooks([...books, values]);
  };

  const handleEditBook = (index, values) => {
    const updatedBooks = [...books];
    updatedBooks[index] = values;
    setBooks(updatedBooks);
    setEditBook(null);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h2>Books</h2>
      <BookForm onSubmit={handleAddBook} initialValues={{}} />
      {books.map((book, index) => (
        <div key={index}>
          <p>Title: {book.title}</p>
          <button onClick={() => setEditBook(index)}>Edit</button>
          <button onClick={() => handleDeleteBook(index)}>Delete</button>
        </div>
      ))}
      {editBook !== null && (
        <BookForm onSubmit={(values) => handleEditBook(editBook, values)} initialValues={books[editBook]} />
      )}
    </div>
  );
}

export default BookList;
