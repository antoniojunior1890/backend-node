const express = require('express');

const routes = express.Router();

//req.query
//req.params
//req.body

routes.post('/users', (req, res) => {
    // return res.json({ idade: req.query.idade});
    return res.json(req.body);
});

module.exports = routes;