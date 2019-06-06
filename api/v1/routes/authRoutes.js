'use strict';
module.exports = function (root, app) {
  const auth = require('../controllers/authController');

  // auth Routes
  app.route(root + 'auth')
    .get(auth.getAll)
    .post(auth.authenticate);

  // app.route(root + 'auth/:acctId')
  //   .get(auth.readAccount)
  //   .post(auth.createAccount)
  //   .put(auth.updateAccount)
  //   .delete(auth.deleteAccount);
};