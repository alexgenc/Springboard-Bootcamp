import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewMemeForm.css';

const NewMemeForm = ({ addMeme }) => {
  
  const INITIAL_STATE = {
    imageURL: "",
    topText: "",
    bottomText: ""
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
    addMeme({ ...formData, id: uuidv4() });
    setFormData(INITIAL_STATE);
  }

  return (
    <div>
      <h2>GENERATE A MEME</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="imageURL">Image URL: </label>
          <input id="imageURL" 
                 name="imageURL"
                 value={formData.imageURL}
                 onChange={handleChange} 
          />
        </div>
        
        <div>
          <label htmlFor="topText">Top Text: </label>
          <input id="topText"
                 name="topText"
                 value={formData.topText}
                 onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="bottomText">Bottom Text: </label>
          <input id="bottomText"
                 name="bottomText"
                 value={formData.bottomText}
                 onChange={handleChange} 
          />
        </div>

        <button className="form-button">Generate!</button>
      </form>
    </div>
  )
}


export default NewMemeForm;