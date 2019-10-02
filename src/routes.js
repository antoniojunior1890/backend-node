const express = require('express');
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController');

const routes = express.Router();

routes.post('/session', SessionController.store);

routes.post('/spots', SpotController.store);

module.exports = routes;