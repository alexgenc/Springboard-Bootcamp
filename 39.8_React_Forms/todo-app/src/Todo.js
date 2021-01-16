import React from 'react';

const Todo = ({ id, task, handleRemove }) => {
  
  const removeTodo = () => handleRemove(id);

  return (
    <div>
      <p>{task} <span><button onClick={removeTodo}>X</button></span></p>
    </div>  
  )
}

export default Todo;