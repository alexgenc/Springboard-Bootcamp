import React, { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({ createBox }) => {

  const INITIAL_STATE = {
    width: '',
    height: '',
    backgroundColor: ''
  }

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
    createBox(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    <div>
      <h2>Create a Box </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="width">Width (px) :</label>
          <input id="width"
                name="width"
                value={formData.width}
                onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="height">Height (px) :</label>
          <input id="height" 
                name="height"
                value={formData.height}
                onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="backgroundColor">Background Color:</label>
          <input id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange} 
          />
        </div>

        <button className="form-button">Create Box!</button>
      </form>
    </div>
  )
}

export default NewBoxForm;
