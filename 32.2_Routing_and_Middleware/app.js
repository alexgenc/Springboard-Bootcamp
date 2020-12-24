const express = require('express');
const app = express();
const ExpressError = require('./error');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use("/items", routes);

// 404 error handler
app.use(function (req, res, next) {
  const err = new ExpressError("Page Not Found!", 404);

  return next(err);
});

// General error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: {
      message: err.message,
      status: err.status,
    }
  });
});


module.exports = app