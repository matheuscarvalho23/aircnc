const express      = require('express');
const multer       = require('multer');
const uploadConfig = require('./config/upload');
const Session      = require('./controllers/Session');
const Spot         = require('./controllers/Spot');
const routes       = express.Router();
const upload       = multer(uploadConfig);

routes.post('/sessions', Session.store);
routes.post('/spots', upload.single('image'), Spot.store);

module.exports = routes;