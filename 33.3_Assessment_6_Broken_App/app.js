const express = require('express');
const app = express();
const ExpressError = require('./error');
const getDevData = require('./helpers')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async function(req, res, next) {
  try {
    
    let output = await getDevData(req);

    return res.send(JSON.stringify(output));
  } 
  catch(err) {
    next(err);
  }
});

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
