let axios = require('axios');
const { nextTick } = require('process');
const ExpressError = require('./error');

async function getDevData(req) {
  let developers = req.body.developers;

  // Check if developers exist
  if (!developers) {
    throw new ExpressError("Developer information is missing", 400);
  }

  const results = [];

  for (dev of developers) {
    resp = await axios.get(`https://api.github.com/users/${dev}`)
    results.push(resp.data);
  }

  let out = results.map(r => ({ name: r.name, bio: r.bio }));

  return out;
}

module.exports = getDevData