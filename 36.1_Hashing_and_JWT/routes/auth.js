const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressError');
const User = require('../models/user');


/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/

router.post("/login", async (req, res, next) => {
  try {
    // Destructure needed fields from req.body
    const { username, password } = req.body;
    // Log in user, this also updates user's last_login_at and returns user's JWT
    const token = await User.authenticate(username, password);
    // Check if login is successful, if so, return token
    if (token) {
      return res.json({token});
    }
    // Else, throw error
    throw new ExpressError("Invalid username/password!", 400);
  } catch(e) {
    return next(e);
  }
})

/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

 router.post("/register", async (req, res, next) => {
   try {
      // Destructure needed fields from req.body
      const { username, password, first_name, last_name, phone } = req.body;
      // Register user
      const result = await User.register({username, password, first_name, last_name, phone});
      // Log in user, this also updates user's last_login_at and returns user's JWT
      const token = await User.authenticate(username, password);

      return res.json({token});

   } catch(e) {
     return next(new ExpressError("Unable to register. Make sure all requierd fields are submitted.", 400));
   }
})


 module.exports = router;