import React from 'react';
import BookList from './BookList';
import AuthorList from './AuthorList';

function App() {
  return (
    <div>
      <h1>Library Management System</h1>
      <BookList />
      <AuthorList />
    </div>
  );
}

export default App;
