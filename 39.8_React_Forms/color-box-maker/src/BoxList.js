import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuidv4 } from 'uuid';


const BoxList = () => {

  const [boxes, setBoxes] = useState([]);

  const createBox = (box) => {
    let newBox = {...box, id: uuidv4() };
    setBoxes( (boxes) => [...boxes, newBox] );
  }

  const removeBox = (id) => {
    setBoxes( (boxes) => boxes.filter(box => box.id !== id ));
  };

  const allBoxes = boxes.map(box => (
    <Box 
      key = {box.id}
      id = {box.id}
      width = {box.width}
      height = {box.height}
      backgroundColor = {box.backgroundColor}
      handleRemove = {removeBox}
    />
  ))

  return (
    <div>
      <div>
        <NewBoxForm createBox={createBox}/>
      </div>
      <div>
        {allBoxes}
      </div>
      
    </div>
  )
}

export default BoxList;