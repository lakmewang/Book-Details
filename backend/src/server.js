const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS

app.use(express.json());
app.use('/api/books', require('./routes/booksRoutes')); 

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
