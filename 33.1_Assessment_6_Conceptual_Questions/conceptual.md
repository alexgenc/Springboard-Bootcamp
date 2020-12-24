### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  1. Promises with then and catch.
  2. Async & Await.

- What is a Promise?

  A promise is a one time guarantee of a future value. The value might end up being an actual value or undefined.

- What are the differences between an async function and a regular function?

  With asynch functions, JavaScript will make sure the function will return with a promise. Combined with the await keyword, async functions will run in the background until the promise is resolved.

- What is the difference between Node.js and Express.js?

  Node.js is a server side platform made using JavaScript. Express.js is a framework for Node.js. 

- What is the error-first callback pattern?

  With error-first callback pattern, the first argument in the callback function is the error. 

  Regular callback pattern => function(data, error)
  Error-first callback pattern => function(error, data)

- What is middleware?

  Middleware is the code that runs in the middle of the request/response cycle.

- What does the `next` function do?

  Next() is a callback function, a reference to follow-up code to be executed after the current function's execution. Next() will move on to the next function in line and execute that function.

- What does `RETURNING` do in SQL? When would you use it?

  The RETURNING clause allows you to retrieve values of columns that were modified by an insert, delete or update. Without RETURNING , we would have to run another SELECT statement afterwards.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```


  
