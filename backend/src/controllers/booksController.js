const { getBooksFromGoogle } = require('../services/googleBooksService');

const fetchBooks = async (req, res) => {
    try {
        const { query } = req.query; // Extract search query from query parameters
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }
        const books = await getBooksFromGoogle(query); // Fetch books from Google API
        res.status(200).json(books); // Send the books data as response
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
};

module.exports = { fetchBooks };
