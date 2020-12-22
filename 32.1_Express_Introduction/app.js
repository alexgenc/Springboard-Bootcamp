const express = require('express');
const app = express();

const {
  getQuery,
  getMean,
  getMedian,
  getMode,
} = require("./helpers");

// Routes
app.get('/mean', (req, res) => {
  
  let numbers = getQuery(req);

  let mean = getMean(numbers);

  let reqResponse = {
    "operation": "mean",
    "value": mean,
  }

  return res.json(reqResponse);
});

app.get('/median', (req, res) => {

  let numbers = getQuery(req);

  median = getMedian(numbers)
   
  let reqResponse = {
    "operation": "median",
    "value": median,
  }

  return res.json(reqResponse);
})

app.get('/mode', (req, res) => {

  let numbers = getQuery(req);

  mode = getMode(numbers);

  let reqResponse = {
    "operation": "mode",
    "value": mode,
  }

  return res.json(reqResponse);

})

app.get('/all', (req, res) => {

  let numbers = getQuery(req);

  let mean = getMean(numbers);
  let median = getMedian(numbers);
  let mode = getMode(numbers);

  let reqResponse = {
    "operation" : "all",
    "mean": mean,
    "median": median,
    "mode": mode,
  }

  return res.json(reqResponse);
});

// 404 error handler
app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

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

// Start server
app.listen(3000, function () {
  console.log('App on port 3000');
});

