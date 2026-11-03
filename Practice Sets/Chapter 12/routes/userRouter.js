// core modules
const path = require('path');

// external modules
const express = require('express');

// local modules
const userRouter = express.Router();
const registeredHomes = [];

// Curated high-resolution fallback photos for stays
const DEFAULT_PHOTOS = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
];

// GET: Display simple user form
userRouter.get(['/home-registration'], (req, res) => {
  res.render('user', { registeredHomes: registeredHomes });
});

// POST: Handle form submission
userRouter.post(['/welcome-msg'], (req, res) => {
  const { homeName, price, location, rating, photoUrl } = req.body;
  const fallbackPhoto = DEFAULT_PHOTOS[registeredHomes.length % DEFAULT_PHOTOS.length];

  registeredHomes.push({
    homeName: homeName || "Cozy Stay",
    price: price || "3500",
    location: location || "Cox's Bazar, Bangladesh",
    rating: rating || "4.8",
    photoUrl: photoUrl && photoUrl.trim() !== "" ? photoUrl : fallbackPhoto
  });

  console.log("Registered new home:", registeredHomes[registeredHomes.length - 1]);
  res.render('welcome');
});

exports.userRouter = userRouter;
exports.registeredHomes = registeredHomes;
