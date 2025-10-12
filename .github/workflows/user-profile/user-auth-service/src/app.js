const express = require('express');
const app = express();
app.use(express.json());

// In-memory users; for production, replace with a database!
const users = [];

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.some(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists!' });
  }
  users.push({ username, password });
  res.status(201).json({ message: 'Registered!' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // For now, return a fake JWT token
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(4000, () => console.log('User Auth Service running on 4000'));