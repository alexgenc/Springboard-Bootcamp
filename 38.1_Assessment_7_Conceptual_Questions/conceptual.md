### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  JWT stands for JSON Web Token. It functions as a keycard that holds encrypted authentication information which is used for granting access to users for some or all parts of an application.

  Each JWT is made up of 3 parts. ==> A header which contains metadata about token (signing algorithm used and type of token), a payload which contains the data to be stored in the token (typically an object that store things like the userID, etc.), and lastly a signature.

- What is the signature portion of the JWT?  What does it do?

  The signature portion of the JWT is a wrapper that takes the header and the payload portions of the JWT and it cryptographically hashes them. The end result is a signature that's unique to that header and payload. If any information in either the header or the payload changes, the signature will also change. This way, we can use the signature to verify that the header and the payload hasn't been tampered with. We can think of the signature as a wax seal on a letter. 

  Furthermore, the signature portion of the JWT also has a secret key which comes from our server. If the JWT coming into our server has the correct secret key, we know that we can trust that JWT and that it is coming from one of our servers and not somewhere else.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  Yes because the data inside the payload is only encoded in Base64. It's not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

  After authenticating a user's id and password from our database, we can create a JWT for that user, and respond and store that token in the user's session. Then in our routes, we can check to see if the user's token matches the correct authentication and authorizations.

- Compare and contrast unit, integration and end-to-end tests.

  Unit tests are tests that only test a single unit. Integration tests are used for testing how connected single units interact with each other. End to end tests are used for testing the user flow from beginning to end.

- What is a mock? What are some things you would mock?

  Mock is an object that replaces dependencies and simulate the behaviour of those dependencies. It's a common practice to mock APIs and other 3rd party integrations that your code might depend on. The idea is that we don't need to test APIs and other dependencies that we have no control over how they behave. Therefore, we create mocks that simulate the behaviour of those dependencies. 

  For example, we might make an Axios request to an API to get some data. Instead of testing that entire process in our tests, we would create a mock that returns that data, just like how Axios would return that data from an API. This way, we only have to test the functionality of our own code and not Axios. 

- What is continuous integration?

  Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle. The goal is to build better software by developing and testing in smaller increments.

- What is an environment variable and what are they used for?

  Environment variables are dynamically-named values that can affect how a process runs. It's used commonly for congifuration purposes. It allows your app to behave differently based on the environment you want them to run in. 

  For example, using environment variables, we can determine which database to use. This can be very useful when running tests. We can tell our app to use a different database when running tests and another database when running the actual app.

- What is TDD? What are some benefits and drawbacks?

  TDD stands for Test Driven Development. It's an approach used when developing applications and the idea is, you write the tests before actually writing your code. Your tests will initially fail but the main benefit is, this approach forces you to think about how this function should behave, what it should return, what the inputs should be, etc. This way you write more testable code which results in code that's easier to work with and also more managable. Afterwards, you write your code to get those tests to pass. Main drawback is development process takes longer. 

- What is the value of using JSONSchema for validation?

  Without JSONSchema, it's extremely difficult to validate the data that's being sent to the server. A server lacking adequate validation can result in corrupt or incomplete data which can crash our server, cause problems in our database, or display errors to the frontend.

  With JSONSchema, we can quickly validate the data coming to the server. This way, incomplete or corrupt data will fail immediately and will never get to the database. JSONSchema also reduces the amount of code needed for processing and validating data, and therefore, it's easy to setup and maintain.

  Without JSONSchema, we have to check if the data exists first, then we have to check if that data meets the requirements. This is difficult to do just for a single property. If we have multiple properties that we have to check for, this quickly becomes very difficult to accomplish.

- What are some ways to decide which code to test?

  We should test everything that could possibly break but at the same time, we don't want to test 3rd party dependencies and API's since we have no control over how/if they function.

  Ideally, we should test major functionalities that affect the entire app over smaller things since time is a scarce resource. Afterwards, we can add tests for smaller things to increase our coverage.

- What are some differences between Web Sockets and HTTP?

  HTTP is an application protocol. It basically means that HTTP itself can't be used to transport information to/from a remote end point. Instead it relies on an underlying protocol which in HTTP's case is TCP.

  Sockets on the other hand are an API that most operating systems provide to be able to talk with the network. The socket API supports different protocols from the transport layer and down.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?

  I thought Flask was much easier to work with because Flask has better and easier packages to work with. On the other hand, being able to write only Js both on the frontend and the backend was also nice because I didn't have to consistently make syntax changes. Overall, I'm about 50-50 at this point.