const express = require('express');

const userRouter = express.Router();
const { getHomes } = require('../Controllers/userController');

// GET: Simple host dashboard with HTML tags
// hostRouter.get(['/', '/host'], hostDashboard);
userRouter.get('/', getHomes);

module.exports = userRouter;