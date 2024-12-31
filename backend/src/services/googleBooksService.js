const axios = require('axios');

const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
const GOOGLE_BOOKS_API_URL = 'https://wwww.googleapis.com/books/v1/volumes';

// Fetch books from the Google Books API
const getBooksFromGoogle = async (query) => {
    try {
        const response = await axios.get(GOOGLE_BOOKS_API_URL, {
            params: {
                q: query,
                key: GOOGLE_BOOKS_API_KEY,
            }
        });

        return response.data.items.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors || ['Unknown Author'],
            description: item.volumeInfo.description || 'No description available',
            thumbnail: item.volumeInfo.imageLinks?.thumbnail || '',
        }));
    } catch (error) {
        throw new Error('Error fetching books from Google Books API');
    }
};

module.exports = { getBooksFromGoogle };
