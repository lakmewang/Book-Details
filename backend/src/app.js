const express = require('express');
const cors = require('cors');
const booksRoutes = require('./routes/booksRoutes');

const app = express();
app.use(cors());  // Enable CORS
app.use(express.json());  // To parse JSON data
app.use('/api/books', booksRoutes);  // Route to fetch books

module.exports = app;
