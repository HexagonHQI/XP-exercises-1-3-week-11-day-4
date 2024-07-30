const express = require('express');
const app = express();
const port = 5000;

// Sample data file
let books = [
  { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', publishedYear: 1954 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
];

// Pasrsing Jason
app.use(express.json());

// Routes
app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(book => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
