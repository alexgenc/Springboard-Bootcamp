import React, {useState} from 'react';

const MadlibForm = ({ createStory }) => {

  const INITIAL_STATE = {
    selection: 'Happy',
    noun1: '',
    noun2: '',
    adjective: '',
    color: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData( (formData) => ({
      ...formData, 
      [name]: value
    }));
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.noun1 && formData.noun2 && formData.adjective && formData.color) {
      createStory(formData);
      setFormData(INITIAL_STATE);
    } else {
      alert("Please fill out the form");
    }
  } 

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="selection">Story Type: </label>
          <select id="selection"
                  name="selection"
                  onChange={handleChange}>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
          </select>
        </div>

        <div>
          <input id="noun1"
                 name="noun1"
                 placeholder="1st Noun"
                 value={formData.noun1}
                 onChange={handleChange} 
          />
        </div>

        <div>
          <input id="noun2" 
                 name="noun2"
                 placeholder="2nd Noun"
                 value={formData.noun2}
                 onChange={handleChange} 
          />
        </div>

        <div>
          <input id="adjective"
                 name="adjective"
                 placeholder="Adjective"
                 value={formData.adjective}
                 onChange={handleChange} 
          />
        </div>

        <div>
          <input id="color"
                 name="color"
                 placeholder="Color"
                 value={formData.color}
                 onChange={handleChange} 
          />
        </div>

        <button className="form-button">Get Story!</button>
      </form>
    </div>
  )

}

export default MadlibForm;