const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const basicAuth = require('./api/v1/basic-auth');
const errorHandler = require('./api/error-handler');

app.use(bodyParser.urlencoded({ extended: true })); // false ???
app.use(bodyParser.json());
app.use(cors());

// use basic HTTP auth to secure the api
app.use(basicAuth);

// api routes
const routes = require('./api/v1/routes/authRoutes'); //importing route
routes('/api/v1/', app); //register the route

// global error handler
app.use(errorHandler);

// app.use(function (req, res) {
//   res.status(404).send({ url: req.originalUrl + ' not found' })
// });

// start server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('A Nodejs RESTful API server started on: ' + port);
});