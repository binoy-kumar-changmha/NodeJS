// core modules
const path = require('path');

// external modules
const express = require('express');

// local modules
// const rootDir = require('../utils/path');
const userRouter = express.Router();
const registeredHomes = [];

// GET: Display simple user form
userRouter.get(['/home-registration'], (req, res) => {
  res.render('user', {registeredHomes: registeredHomes});
});

// POST: Handle form submission
userRouter.post(['/welcome-msg'], (req, res) => {
  console.log("User submitted:", req.body);
  registeredHomes.push(req.body);
  res.render('welcome');
});

exports.userRouter = userRouter;
exports.registeredHomes = registeredHomes;
