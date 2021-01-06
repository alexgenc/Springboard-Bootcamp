const App = () => (
  <div>
    <Person name="Lionel" age={26} hobbies={["Chess", "History", "Music"]} />
    <Person name="Ronaldinho" age={35} hobbies={["Soccer", "Reddit"]} />
    <Person name="Ryan" age={16} hobbies={["Games"]} />
  </div>
)


ReactDOM.render(<App />, document.getElementById("root"));