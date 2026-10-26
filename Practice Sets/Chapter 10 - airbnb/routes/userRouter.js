const express = require('express');

const userRouter = express.Router();

// GET: Display simple user form
userRouter.get('/user', (req, res) => {
  res.send(`
    <h1>User Registration</h1>
    <form action="/user" method="POST">
      <label for="username">Username: </label>
      <input type="text" name="username" placeholder="Enter your username" required><br><br>
      <input type="submit" value="Submit">
    </form>
  `);
});

// POST: Handle form submission
userRouter.post('/user', (req, res) => {
  console.log("User submitted:", req.body);
  res.send(`<h1>Welcome, ${req.body.username || 'Guest'}!</h1><a href="/user">Back</a>`);
});

module.exports = userRouter;
