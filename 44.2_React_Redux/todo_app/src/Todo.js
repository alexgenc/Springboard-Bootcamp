import React from 'react';


const Todo = ({task, deleteTodo, id}) => {

  function handleRemove() {
    deleteTodo(id);
  }

  return (
    <div>
      <li>{task} <span><button onClick={handleRemove}>X</button></span></li>
    </div>
  );
}

export default Todo;