import React, { useState } from 'react';


const NewTodoForm = ({ addTodo }) => {
  
  const INITIAL_STATE = {task: ""};

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((formData) => ({
      ...formData, 
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    <div>
      <h2>Add a Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Task:</label>
          <input id="task"
            name="task"
            value={formData.task}
            onChange={handleChange} 
          />
        </div>
        <button>Add Todo</button>
      </form>
    </div>
  )
}


export default NewTodoForm;