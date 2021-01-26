### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

  React is a Js library for building user interfaces. It allows us to create small, separate components and then combine these components later on when building user interfaces. 

- What is Babel?

  Babel is a Js transcompiler that is used to convert newer Js syntax into a backwards compatible version of Js that can be run by older Js engines. Babel also allows us to write JSX when designing react components and those components are then converted into backward compatible Js code by Babel.

- What is JSX?

  JSX stands for JavaScript XML. It's a special syntax extension to Js which allows us to write HTML codes inside our React components while also allowing us to use Js functionality.

- How is a Component created in React?

  We can create components by either extending from a class: 
  
  ```js
  class MyComponent extends React.Component {}
  ```

  or we can create functional components:

  ```js
  const MyComponent = () => {}
  ```

- What are some difference between state and props?

  Props are read only and they do not change. There, if we know a value is not going to change, we can pass it down as a prop. If we know a variable is going to change its value at some point, then we should instantiate that variable as a state and use setState to change its value.

- What does "downward data flow" refer to in React?

  When building React apps, we often nest child components within higher-order parent components. One of the biggest advantages of React is, instead of giving each component a state, we can handle the state within the parent functions and make most/all of the nested child components stateless, i.e., dummy components. We can then pass those states to our child components in a downward data flow. 

- What is a controlled component?

  In a controlled component, form data is handled by the state within the component. The state within the component serves as “the single source of truth” for the input elements that are rendered by the component.

- What is an uncontrolled component?

  Uncontrolled components act more like traditional HTML form elements. The data for each input element is stored in the DOM, not in the component. Instead of writing an event handler for all of your state updates, you use a ref to retrieve values from the DOM.

- What is the purpose of the `key` prop when rendering a list of components?

  A key prop should be a unique identifier, that remains constant, which is used to identify each item in a list of components. For example, a unique ID number can be used as a key prop.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  Using array index values should be avoided because index values can change if we alter an array. As mentioned in the previous question, key props should be unique but they should also remain constant. Shifting and unshifting an array will cause each item's key to change since their array index values will change.

- Describe useEffect.  What use cases is it used for in React components?

  useEffect is one of the built in React hooks, that allows us to run a specific piece of code after a render. It's a way of implementing side effects. React will remember the function we pass into useEffect, and it will run that function after rendering the DOM. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

  useRef is another built in React hook. The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument, the initial value. The returned object will persist for the full lifetime of the component. 

- When would you use a ref? When wouldn't you use one?

  useRef is useful when we don't want the component to re-render again but we want the value in some form or another so we can use it later. For all other cases, useState would be the better choice.

- What is a custom hook in React? When would you want to write one?

  Custom Hooks are a mechanism to reuse stateful logic. If there is a piece of code that we use in multiple components, it might be a good idea to create a custom hook for that code and just use that custom hook in components instead.
