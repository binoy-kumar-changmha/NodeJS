// core modules
const path = require('path');

// external modules
const express = require('express');

// local modules
const hostRouter = express.Router();
const { showRegistrationForm, handleFormSubmission, hostDashboard } = require('../Controllers/hostController');

// GET: Display simple user form
hostRouter.get(['/home-registration'], showRegistrationForm);

// POST: Handle form submission
hostRouter.post(['/welcome-msg'], handleFormSubmission);

hostRouter.get(['/dashboard'], hostDashboard);

module.exports = hostRouter;