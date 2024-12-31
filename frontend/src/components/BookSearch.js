// frontend/src/components/BookSearch.js
import React, { useState } from 'react';
import { fetchBooks } from '../services/api'; // Import the API function

const BookSearch = () => {
  const [query, setQuery] = useState(''); // Search query state
  const [books, setBooks] = useState([]); // Books data state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle search on button click
  const handleSearch = async () => {
    setLoading(true); // Start loading
    setError(null); // Clear previous errors
    try {
      const booksData = await fetchBooks(query); // Fetch books data
      setBooks(booksData); // Set books state with the fetched data
    } catch (error) {
      setError('Failed to fetch books. Please try again later.'); // Set error state
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Handle the "Enter" key press to trigger search
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Trigger search when "Enter" is pressed
    }
  };

  return (
    <div className="book-search-container">
      <h1>Book Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state
        onKeyPress={handleKeyPress} // Listen for "Enter" key press
        placeholder="Search for books"
      />
      <button onClick={handleSearch} disabled={loading}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <ul>
        {books.length > 0 ? (
          books.map((book) => {
            const {
              title,
              authors,
              publishedDate,
              categories,
              imageLinks,
            } = book.volumeInfo;

            return (
              <li key={book.id}>
                <h3>{title || 'Title not available'}</h3>
                <p><strong>Authors:</strong> {authors ? authors.join(', ') : 'N/A'}</p>
                <p><strong>Published Date:</strong> {publishedDate || 'N/A'}</p>
                <p><strong>Genres:</strong> {categories ? categories.join(', ') : 'N/A'}</p>
                <img
                  src={imageLinks?.thumbnail || 'https://via.placeholder.com/120x180'}
                  alt={title || 'Book cover'}
                />
              </li>
            );
          })
        ) : (
          <p>No books found</p>
        )}
      </ul>
    </div>
  );
};

export default BookSearch;
