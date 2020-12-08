### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?

  RESTful routing is an architectural style defining constraits to control CRUD actions when creating web services.

- What is a resource?

  A resource is the data stored at the requested URL address. It can be a visual representation of a website, some sort of a file, JSON, XML, etc.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

  JSON API passes the information to the postgresQL via POST request.

- What does idempotent mean? Which HTTP verbs are idempotent?

  Idempotent means an operation can be performed many times (with the same data), with the result of all operations being the same as if it was done once.

  Idempotent HTTP verbs are GET, PUT, PATCH, and DELETE.

- What is the difference between PUT and PATCH?

  PUT updates the entire resource while PATCH updates part of the resource, i.e., it patches the resource up.

- What is one way encryption?

  One way encryption means it's impossible to reverse the encryption process to find out a user's password based on the hashed password.

- What is the purpose of a `salt` when hashing a password?

  Salt is a random string that is attached to the hashed password. This additional randomness is needed for protection of the hashed password, since hashing by itself always returns the same hashed text for a same password. This way, 2 people with the same password will end up with different hashed passwords due to salt/random string.

- What is the purpose of the Bcrypt module?

  Bcrypt is a cryptographic hash that creates a non-reversible hashed password from a user's password. It's very secure because a small change in input changes the output unpredictably and also, the entire process of Bcrypt is very slow which makes it difficult to crack users' passwords. 

- What is the difference between authorization and authentication? 

  Authentication is verifying the person is who they say they are. Authorization is permission to do certain things.