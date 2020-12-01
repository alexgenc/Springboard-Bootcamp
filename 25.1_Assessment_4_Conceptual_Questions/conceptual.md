### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
  
  PostgreSQL is a relational database management system - RDBMS.

- What is the difference between SQL and PostgreSQL?

  SQL is a language used for managing relational databases. PostgreSQL is an implementation of that language (SQL). There are other implementations such as MySQL, SQLite, etc.

- In `psql`, how do you connect to a database?

  From the terminal, you can type "psql 'name_of_database' " to connect. Ex: Let's say you have a database named feedback, you can type "psql feedback" to connect. You can also connect to a database from pgAdmin4 for a better visual interface.

- What is the difference between `HAVING` and `WHERE`?

  WHERE can be used with all query selectors. HAVING can only be used in combination with GROUP BY.

- What is the difference between an `INNER` and `OUTER` join?

  INNER JOIN is the default join type and it results in only the rows that match the condition in both tables. OUTER JOIN has 3 different types, these are: 
    - LEFT OUTER JOIN: Everything from the left table, and matching rows from the right table.
    - RIGHT OUTER JOIN: Everything from the right table, and matching rows from the left table.
    - FULL OUTER JOIN: Everything from both tables regardless of if there's any overlap or not.

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
  
    - LEFT OUTER JOIN: Everything from the left table, and matching rows from the right table.
    - RIGHT OUTER JOIN: Everything from the right table, and matching rows from the left table.

    In theory, left outer join and right outer join are reverses of each other, so instead of using right outer join, we can use left outer join and swap the places of the tables. Same goes for the reverse.

- What is an ORM? What do they do?

  ORM stands for Object-Relational Mapping. It's a technique that allows developers to query and manipulate data from a database using an objected-oriented design. There are libraries, such as SQLAlchemy, that implement the ORM technique. With an ORM, instead of using regular SQL queries, a developer can achieve the same thing using models.

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?

  With AJAX, the requests are sent through the browser. This has a few disadvantages, such as:
    - Same origin policy may prevent requests
    - For API's that require a API_KEY, making requests through the browser isn't ideal because there's no good way to keep our API_KEY hidden. Which means users could learn it from reading the Js code.
    - It's easier for servder to store and process the data. 

- What is CSRF? What is the purpose of the CSRF token?
  
  CSRF stands for Cross Site Request Forgery. It's a security vulnerability where users, without knowing, might end up performing actions that they didn't intend to perform. Such as, a simple email login form,submitting to a malicious end destination where the attacker might be able to gain control of users' email account.

  CSRF token is a security measure that fights against CSRF. A CSRF token gets attached to a form and it gets sent to the server when the form submission occurs. Then the server checks and validates the CSRF token to make sure it matches the actual user.

- What is the purpose of `form.hidden_tag()`?

  Form.hidden_tag() is used to generate a hidden field to store the CSRF token in a form. If we delete the form.hidden_tag(), the CSRF token would show up on the form, which is not ideal for a user to see.