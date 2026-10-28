// core modules
const path = require('path');

// external modules
const express = require('express');

// local modules
const rootDir = require('../utils/path');
const userRouter = express.Router();

// GET: Display simple user form
userRouter.get(['/home-registration'], (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'user.html'));
});

// POST: Handle form submission
userRouter.post(['/welcome-msg'], (req, res) => {
  console.log("User submitted:", req.body);
  res.sendFile(path.join(rootDir, 'views', 'welcome.html'));
});

module.exports = userRouter;
