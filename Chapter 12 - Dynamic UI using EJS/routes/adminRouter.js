const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const adminRouter = express.Router();

// GET: Simple admin dashboard with HTML tags
adminRouter.get('/admin', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'admin.html'));
});

module.exports = adminRouter;
