const Home = require("../Models/home");

// Curated high-resolution fallback photos for stays
const DEFAULT_PHOTOS = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
];

// GET: Fetch all homes and render homepage
const getHomes = (req, res) => {
  Home.fetchAll((registeredHomes) =>
    res.render('user/home', { registeredHomes: registeredHomes }));
};

const getFavoriteHomes = (req, res) => {
  Home.fetchAll((registeredHomes) =>
    res.render('user/favourites', { registeredHomes: registeredHomes }));
};

const getBookings = (req, res) => {
  Home.fetchAll((registeredHomes) =>
    res.render('user/mybookings', { registeredHomes: registeredHomes }));
};

const getHomeDetails = (req, res) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      return res.redirect('/');
    }
    res.render('user/home-details', { home: home });
  });
};

exports.getHomes = getHomes;
exports.getFavoriteHomes = getFavoriteHomes;
exports.getBookings = getBookings;
exports.getHomeDetails = getHomeDetails;