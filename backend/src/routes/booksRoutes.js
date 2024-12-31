const express = require('express');
const { fetchBooks } = require('../controllers/booksController');
const router = express.Router();

router.get('/', fetchBooks);

module.exports = router;
