import React, { useState } from 'react';
import AuthorForm from './AuthorForm';

function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const [editAuthor, setEditAuthor] = useState(null);

  const handleAddAuthor = (values) => {
    setAuthors([...authors, values]);
  };

  const handleEditAuthor = (index, values) => {
    const updatedAuthors = [...authors];
    updatedAuthors[index] = values;
    setAuthors(updatedAuthors);
    setEditAuthor(null);
  };

  const handleDeleteAuthor = (index) => {
    const updatedAuthors = [...authors];
    updatedAuthors.splice(index, 1);
    setAuthors(updatedAuthors);
  };

  return (
    <div>
      <h2>Authors</h2>
      <AuthorForm onSubmit={handleAddAuthor} initialValues={{}} />
      {authors.map((author, index) => (
        <div key={index}>
          <p>Name: {author.name}</p>
          <button onClick={() => setEditAuthor(index)}>Edit</button>
          <button onClick={() => handleDeleteAuthor(index)}>Delete</button>
        </div>
      ))}
      {editAuthor !== null && (
        <AuthorForm onSubmit={(values) => handleEditAuthor(editAuthor, values)} initialValues={authors[editAuthor]} />
      )}
    </div>
  );
}

export default AuthorList;
