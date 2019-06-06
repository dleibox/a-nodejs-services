'use strict';
const authService = require('../services/authService');
exports.authenticate = function (req, res, next) {
  authService.authenticate(req.body)
    .then(user => user ? res.json(Buffer.from(user.username + ':' + req.body.password).toString('base64')) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
}

exports.getAll = function (req, res, next) {
  authService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}