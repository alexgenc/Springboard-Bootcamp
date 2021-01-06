const Person = (props) => (
  <div>
    <p><strong>Learn some information about this person</strong></p>
      <p><strong>Name:</strong> {props.name.length > 8 ? props.name.slice(0,6) : props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p>{props.age > 18 ? "Please go vote!" : "You must be 18"}</p>
      <span><strong>Hobbies:</strong>
        <ul>
          {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
      </span>
  </div>
)