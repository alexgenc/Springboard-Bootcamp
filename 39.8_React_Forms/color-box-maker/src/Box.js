import React from 'react';

const Box = ({ id, width, height, backgroundColor, handleRemove }) => {

  const removeBox = () => handleRemove(id);

  return (
    <div>
      <div 
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${backgroundColor}`,
          margin: "20px"
        }}
      >
      <button onClick={removeBox}>X</button>
      </div>
    </div>
  )
}

export default Box;