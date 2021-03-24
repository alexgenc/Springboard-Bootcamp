import React, { useState } from 'react';

function NewItemForm( { addItem }) {
  
  const INITIAL_STATE = {
    type: "snack",
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  };

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData( (formData) => ({
      ...formData, 
      [name]: value
    }));
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    <div>
      <h2>Add a New Item </h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="type">Type:</label>
          <select id="type" name="type" onChange={handleChange}> 
            <option defaultValue="snack">Snack</option>
            <option value="drink">Drink</option>
          </select>
        </div>

        <div>
          <label htmlFor="id">Id:</label>
          <input id="id"
                 name="id"
                 value={formData.id}
                 onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="name">Name:</label>
          <input id="name"
                 name="name"
                 value={formData.name}
                 onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <input id="description" 
                name="description"
                value={formData.description}
                onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="recipe">Recipe:</label>
          <input id="recipe"
                name="recipe"
                value={formData.recipe}
                onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="serve">Serve:</label>
          <input id="serve"
                name="serve"
                value={formData.serve}
                onChange={handleChange} 
          />
        </div>

        <button className="form-button">Add a New Item!</button>
      </form>
    </div>
  )
}

export default NewItemForm;