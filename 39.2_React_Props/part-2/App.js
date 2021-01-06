const App = () => (
  <div>
    <Tweet username="alexg" name="Alex Genc" date="01-06-2021" content="This is my first tweet!!!" />
    <Tweet username="Thor" name="Thor Odinson" date="99-99-9999" content="Where is Loki?!?!?!" />
    <Tweet username="MJ" name="Michael Jordan" date="08-08-1991" content="GOT MILK?"/>
  </div>
)


ReactDOM.render(<App />, document.getElementById("root"));