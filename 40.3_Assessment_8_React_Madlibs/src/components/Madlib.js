import React, {useState} from 'react';
import MadlibForm from './MadlibForm';

const Madlib = () => {

  const [story, setStory] = useState('');
  const [showResult, setShowResult] = useState(false);

  const createStory = (story) => {
    const {selection, noun1, noun2, adjective, color} = story;
    
    if (selection === "Happy") {
      setStory(`There was a ${color} ${noun1} who loved a ${adjective} ${noun2}`);
    } else {
      setStory(`There was a ${color} ${noun1} who hated a ${adjective} ${noun2}`);
    }

    setShowResult(true);
  }

  const resetForm = () => {
    setShowResult(false);
  }

  return (
    <div>
      <h1>Madlibs!</h1>
      {!showResult &&
        <MadlibForm createStory={createStory} />
      }
      {showResult && 
        <div>
          <p>
            {story}
          </p> 
          <button onClick={resetForm}>Restart</button>
        </div>
      }
    </div>
  )
}


export default Madlib;