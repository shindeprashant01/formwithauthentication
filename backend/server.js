// server.js

import express from 'express';
import { sign, verify } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { json } from 'body-parser';

const app = express();
app.use(json());

const JWT_SECRET = 'your_jwt_secret'; // Replace this with your own secret key

// Simulated User Database
const users = [
  {
    id: 1,
    email: 'pshinde466@gmail.com',
    password: '$2a$10$dXJfyV1T.GdqHBG1HDXEHOvh3tLEUmXLcf4j/Q1.MxVzKRmuF/xy6' // bcrypt hash of 'password123'
  }
];

// POST route for login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Check if password matches using bcrypt
  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT token
  const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
  
  // Send token to the client
  res.json({ token });
});

// Middleware to protect routes (JWT verification)
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Access denied');

  verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = user; // Add user info to request object
    next();
    
  });
}

// Protected Route (Example)
app.get('/dashboard', authenticateToken, (req, res) => {
  res.send('This is a protected route. Only authenticated users can see this.');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
