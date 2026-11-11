const express = require('express');

const userRouter = express.Router();
const { getHomes, getFavoriteHomes, getBookings, getHomeDetails } = require('../Controllers/userController');

userRouter.get('/', getHomes);
userRouter.get(['/favourites', '/favorites'], getFavoriteHomes);
userRouter.get(['/mybookings', '/bookings'], getBookings);
userRouter.get('/home-details/:homeId', getHomeDetails);

module.exports = userRouter;