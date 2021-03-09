### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  React Router is a library that allows users to have navigational components. This way, components can have their own URLs, be bookmarked, and navigated back and forth.

- What is a single page application?

  Single page application is a web app that dynamically displays/updates the web page with the new data coming from the client based on what the user is interacting with, instead of the default method of browser loading entire new pages from the server.

- What are some differences between client side and server side routing?

  On a webapp that uses server side routing:

  - The browser detects that the user has clicked on an anchor element.
  - It makes an HTTP GET request to the URL found in the href tag
  - The server processes the request, and sends a new document (usually HTML) as a response.
  - The browser discards the old webpage altogether, and displays the newly downloaded one.

  If the webapp uses client side routing:
  
  - The browser detects that the user has clicked on an anchor element, just like before.
  - A client side code (usually the routing library) catches this event, detects that the URL is not an external link, and then prevents the browser from making the HTTP GET request.
  - The routing library then manually changes the URL displayed in the browser (using the HTML5 history API, or maybe URL hashbangs on older browsers)
  - The routing library then changes the state of the client app. For example, it can change the root React/Angular/etc component according to the route rules.
  - The app (particularly the MVC library, like React) then processes state changes. It renders the new components, and if necessary, it requests new data from the server. But this time the response isn't necessarily an entire webpage, it may also be "raw" data, in which case the client-side code turns it into HTML elements.

- What are two ways of handling redirects with React Router? When would you use each?
  
  There are 2 ways of handling redirects. First method is using a redirect component and the second method is using the browser history API. If we don't care about storing previous URLs, we can use the redirect component. If we want to keep track of the previous URLs, then we should use the history API and store URLs there.

- What are two different ways to handle page-not-found user experiences using React Router? 

  Inside the Switch component from React Router, we can declare a final catch-all route at the bottom of the route declarations to act as a page-not-found. This won't be a page but a component. Another option is to redirect users to another page if the page they're looking for doesn't exist.

- How do you grab URL parameters from within a component using React Router?

  URL parameters can be accessed using useParams hook.

- What is context in React? When would you use it?

  Usually in a React application, data is passed down from parent element to child elements. This is a cumbersome usage and it's not always ideal to pass data this way. Context provides a way to share data between components without having to explicitly pass any data down.

- Describe some differences between class-based components and function
  components in React.

  Functional components back in the day were known as stateless components. If users needed to update state, they had to use class based components. With the addition of hooks, now functional components can have and update state just like class-based components. At this point, the main difference is the syntax, and the different life-cycle hooks each method uses.

- What are some of the problems that hooks were designed to solve?

  React team have learned from the trade-offs of mixins, higher order components, and render props to bring us new ways to create contained, composable behaviors that can be consumed in a flat and declarative manner by using Hooks.