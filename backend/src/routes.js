const express      = require('express');
const multer       = require('multer');
const uploadConfig = require('./config/upload');
const Session      = require('./controllers/Session');
const Spot         = require('./controllers/Spot');
const Dashboard    = require('./controllers/Dashboard');
const Booking      = require('./controllers/Booking');
const routes       = express.Router();
const upload       = multer(uploadConfig);

routes.get('/spots', Spot.index);
routes.get('/dashboard', Dashboard.show);
routes.post('/sessions', Session.store);
routes.post('/spots', upload.single('thumbnail'), Spot.store);
routes.post('/spots/:spot_id/bookings', Booking.store);

module.exports = routes;