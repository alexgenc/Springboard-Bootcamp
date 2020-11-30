Part 1

- What is HTTP?

HTTP is the protocol that decides how clients get and send data from and to a server.

- What is a URL?

URL is a string of text that is used to locate a certain resource on the internet.

- What is DNS?

DNS takes URL addresses and turns them into IP addresses. We can think of DNS as the phonebook of the internet.

- What is a query string? 

Query string is the component of the URL where it starts with the first “?”. We can pass key value pairs into a query string.

- What are two HTTP verbs and how are they different?

Get Method - Requests without side effects. For getting some data from a server.
Post Method - Requests with side effects. For sending some data to a server.

- What is an HTTP request?

HTTP request is a request made from a client to a server which follows the HTTP protocol.

- What is an HTTP response?

HTTP response is a response sent from a server to a client which follows the HTTP protocol.

- What is an HTTP header? Give a couple examples of request and response headers you have seen.

Headers are used when sending requests to get more information or specific information. Headers provide additional information about the request or the response.

Request headers: Host, User-Agent, Accept, Cookie, Cache-Control 
Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control

- What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?

Step 1. Browser takes the url and turns that into an ip address using DNS.
Step 2. Browser sends a request to the ip address.
Step 3. Server associated with that IP address sends a response back.
Step 4. Browser renders the DOM based on what it received from the server (html, js, css).
Step 5. The browser makes separate HTTP requests for those resources and receives response from the server for each


