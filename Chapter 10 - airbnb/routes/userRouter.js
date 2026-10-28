// core modules
const path = require('path');

// external modules
const express = require('express');

// local modules
const rootDir = require('../utils/path');
const userRouter = express.Router();

// GET: Display simple user form
userRouter.get(['/user', '/'], (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'user.html'));
});

// POST: Handle form submission
userRouter.post(['/user', '/'], (req, res) => {
  console.log("User submitted:", req.body);
  res.send(`<h1>Welcome, ${req.body.username || 'Guest'}!</h1><p><a href="/user">Back</a> | <a href="/">Go to Homepage</a></p>`);
});

module.exports = userRouter;
