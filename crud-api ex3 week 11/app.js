const express = require('express');
const app = express();
const port = 5000;
const { fetchPosts } = require('./data/dataService'); // App.js Updated 

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log('Posts retrieved successfully!');
  } catch (error) {
    console.error('Error retrieving posts:', error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
