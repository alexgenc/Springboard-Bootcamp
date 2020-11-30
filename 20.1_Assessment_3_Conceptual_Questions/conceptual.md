### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?

  * JavaScript makes use of curly brackets for defining code blocks. Python uses indentation for defining code blocks.
  * Python doesn't allow implicit data type conversion unlike JavaScript.
  * JavaScript has a prototype-based inheritance model while Python has class-based inheritance model.
  * JavaScript only has floating-point numbers. Python has int, float, and complex.
  * JavaScript has the "this" keyword for object access while Python has the "self" keyword.
  * JavaScript doesn't care if you call functions without the parameters stated when the function was defined. Python doesn't accept this behavior and it requires you to call functions with the correct parameters.
  * If a user is trying to access a property that doesn't exist, JavaScript creates that property for the user instead of raising an error. Python raises an error unless you use .get() method.
  * JavaScript has arrays while Python has lists.
  * JavaScript has objects while Python has dictionaries. Python also has objects but they're different than the objects in JavaScript. 
  * In JavaScript objects, keys are stored as strings. In Python dictionaries, keys can be stored as anything immutable.
  * In Python, we can check if 2 arrays or dictionaries have the same items by doing [1,2,3] == [1,2,3]. We can't do this very easily in JavaScript because arrays and objects are reference based in Js. 
  * Python only has 1 for loop which behaves similar to the for of loop in JavaScript. JavaScript has multiple for loop options.
  * Python has ranges which are very useful for generating numbers. In JavaScript, we have to generate a list ourselves using math.random().
  * In Python, we can pass arguments by name.
  * Python has list comprehensions which makes creating new lists from other iterables very easy.
  * Python has tuples, which are ordered and unchangeable collections. JavaScript doesn't have an equivalent of this.
  * Python comes with a standard library which contains dozens of useful modules.
  * JavaScript has loose and strict equality. In Python, there's no loose equality. 
  * For Python, lower snake case is recommended while for JavaScript camel case is recommended.
  * There is no keyword for declaring variables in Python unlike JavaScript (let, const, var).
  * Python uses and, or, not while JavaScript uses &&, ||, !
  * Python has triple quotes """ for multi line strings.
  *  Python has integer division operator 10//3 = 3

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.

  * .get('c', default_value) --> This looks for key c in the dict, and if it doesn't find it, it returns the default_value. The dict remains unchanged.

  * .setdefault('c', default_value) --> This looks for key c in the dict, and if it doesn't find it, it creates a key/value pair as 'c': default_value and adds that to the dict.
  
  * Can also use try except blocks to handle the error.

- What is a unit test?

  Unit test is a software testing method which only looks at how individual components work separately.

- What is an integration test?

  Integration test is a software testing method which looks at how individual components work together.

- What is the role of web application framework, like Flask?

  A framework "is a code library that makes a developer's life easier when building reliable, scalable, and maintainable web applications" by providing reusable code or extensions for common operations. Frameworks complete a great deal of small, tedious tasks in the background for us, which saves a lot of time and energy for the developers.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

  Using the route URL (such as /foods/pretzel) would be a better fit if that page is for the object itself. For example, /foods/pretzel should be a page containing information about pretzel. On the other hand, URL query parameters are used for describing the object. For example: /foods/pretzel?type=soft

- How do you collect data from a URL placeholder parameter using Flask?

  We need to have a variable URL, which we create by adding '<name>' placeholders in the URL and accepting corresponding name arguments in the view function.

- How do you collect data from the query string using Flask?

  Query string data is stored in request.args object.

- How do you collect data from the body of the request using Flask?

  Depends on how the data is sent back from the browers. If data from a HTML post form, request.form should be used. If it's coming as parsed JSON data, request.json should be used. If a file is stored in the body, request.files should be used.

- What is a cookie and what kinds of things are they commonly used for?

  Cookies are a way to store small bits of info on client by the browser. They are "name"-"value" pairs. They are mostly used for storing stateful information as well users' browsing activity.

- What is the session object in Flask?

  Flask sessions are a "magic" dictionary that contain info for the browser. They are very much improved version of cookies since sessions allow browsers to store many different things in one session. There is no need to have multiple sessions like having multiple cookies. Sessions also preserve type and they are signed so users can't modify data.

- What does Flask's `jsonify()` do?

  Jsonify will take JSON serializeable data in Python and convert it to a JSON string.
