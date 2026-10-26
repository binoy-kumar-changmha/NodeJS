const express = require('express');

const adminRouter = express.Router();

// GET: Simple admin dashboard with HTML tags
adminRouter.get('/admin', (req, res) => {
  res.send(`
    <h1>Admin Panel</h1>
    <p>Welcome to the <strong>Admin Dashboard</strong>.</p>
    <a href="/">Go to Homepage</a>
  `);
});

module.exports = adminRouter;
