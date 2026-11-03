// core modules
const path = require('path');

// external modules
const express = require('express');

// local modules
const userRouter = express.Router();
const { showRegistrationForm, handleFormSubmission } = require('../Controllers/homes');


// GET: Display simple user form
userRouter.get(['/home-registration'], showRegistrationForm);

// POST: Handle form submission
userRouter.post(['/welcome-msg'], handleFormSubmission);

exports.userRouter = userRouter;
