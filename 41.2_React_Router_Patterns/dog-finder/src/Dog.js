import React from 'react';
import './Dog.css';

const Dog = ({ name, age, src, facts }) => {
  return (
    <div className="Dog">
      <h2>Name: <a href={`/dogs/${name}`}>{name}</a></h2>
      <p>Age: {age}</p>
      <ul>
        <h4>Facts About {name}:</h4>
        {facts.map(fact => <li>{fact}</li>)}
      </ul>
      <img src={src} width="300" height="300" alt=""></img>
      
    </div>
  )
  
}

export default Dog;