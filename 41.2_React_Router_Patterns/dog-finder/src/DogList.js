import React from 'react';
import Dog from './Dog';


const DogList = (props) => {
  return (
    <div>
      <div>
        {props.dogs.map(dog => <Dog name={dog.name} 
                                    age={dog.age} 
                                    src={dog.src} 
                                    facts={dog.facts} 
                                />
        )}
      </div>
    </div>
  )

}

export default DogList;