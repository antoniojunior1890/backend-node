const express = require('express');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

//req.query
//req.params
//req.body

routes.post('/session', SessionController.store);

module.exports = routes;