const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const adminRouter = express.Router();
const { adminDashboard } = require('../Controllers/homes');

// GET: Simple admin dashboard with HTML tags
adminRouter.get('/admin', adminDashboard);

module.exports = adminRouter;