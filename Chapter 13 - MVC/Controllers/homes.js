const Home = require("../Models/home");

// Curated high-resolution fallback photos for stays
const DEFAULT_PHOTOS = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
];

// GET: Display home registration form
const showRegistrationForm = (req, res) => {
  res.render('user');
};

// POST: Handle form submission
const handleFormSubmission = (req, res) => {
  const { homeName, price, location, rating, photoUrl } = req.body;
  const fallbackPhoto = DEFAULT_PHOTOS[Math.floor(Math.random() * DEFAULT_PHOTOS.length)];

  const home = new Home(
    homeName || "Cozy Stay",
    price || "3500",
    location || "Cox's Bazar, Bangladesh",
    rating || "4.8",
    photoUrl && photoUrl.trim() !== "" ? photoUrl : fallbackPhoto
  );
  home.save();

  res.render('welcome');
};

// GET: Fetch all homes and render homepage
const getHomes = (req, res) => {
  Home.fetchAll((registeredHomes) =>
    res.render('home', { registeredHomes: registeredHomes }));
};

// GET: Admin dashboard
const adminDashboard = (req, res) => {
  res.render('admin');
};

exports.getHomes = getHomes;
exports.showRegistrationForm = showRegistrationForm;
exports.handleFormSubmission = handleFormSubmission;
exports.adminDashboard = adminDashboard;
