const express = require('express');

const userRouter = express.Router();
const { getHomes, getFavoriteHomes, getBookings } = require('../Controllers/userController');

userRouter.get('/', getHomes);
userRouter.get('/favourites', getFavoriteHomes);
userRouter.get(['/mybookings', '/bookings'], getBookings);

module.exports = userRouter;