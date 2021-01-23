# Bugs

## Bug #1 - authUser in /middleware/auth.js 

Per the docstring, the function should verify the token before getting the information in the payload. The SECRET_KEY is actually imported to this file but it's never used. That's because jwt.decode only decodes the token and not verify it. Therefore, we should use jwt.verify() with the SECRET_KEY to verify the token.

## Bug #2 - /users/:username PATCH Route

Per the docstring, only the user themselves or an admin user should be able to update user information. However, the function initially runs 3 middleware: authUser, requireLogin, and requireAdmin. With this setup, the user themselves are not able to update their own information because the 3rd middleware causes the function to throw an authorized 401 error since the user isn't an admin.

## Bug #3 - /users/:username PATCH Route Changeable Fields

Per the docstring, only first_name, last_name, email, and phone should be changeable using the PATCH route.  Therefore, we need to make sure we check what data is passed through from req.body and if they try to change anything else, raise an error. Otherwise, this can create security issues since users would be able to change their admin status to true.

## Bug #4 - /auth/login POST Route User Authentication 

This route is supposed to authenticate users but it doesn't! Any combination of username, password submission is granted a token from the server. This is caused because initially we don't have the "await" keyword when calling User.authenticate(). This causes the remaining code to run before User.authenticate actually resolves.


## Bug #5 - /users/:username DELETE Route 

The delete route wasn't functioning as expected even though the tests made it seem like it was working. Again, this was caused because the await keyword was forgotten when calling User.delete(). Even though the delete route was responding with a message {message: 'deleted'}, the user wasn't actually being deleted. 