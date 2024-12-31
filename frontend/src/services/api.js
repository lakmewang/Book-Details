// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

// Function to fetch books based on the search query
export const fetchBooks = async (query) => {
  try {
    // Make GET request to the Google Books API
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        maxResults: 10, 
      },
    });
    return response.data.items;  // Return the list of books
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;  // Rethrow error to be handled in the component
  }
};
