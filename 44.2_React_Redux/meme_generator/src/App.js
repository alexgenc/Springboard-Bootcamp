import React from 'react';
import Meme from './Meme';
import NewMemeForm from './NewMemeForm';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {

  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch();

  function addMeme(newMeme) {
    dispatch({ type: "ADD_MEME", meme: newMeme });
  }

  function deleteMeme(id) {
    dispatch({type: "REMOVE_MEME", id });
  }

  const memeContainer = memes.map(m => (
    <Meme
      key={m.id}
      topText={m.topText}
      bottomText={m.bottomText}
      imageURL={m.imageURL}
      deleteMeme={() => deleteMeme(m.id)}
    />
  ));

  return (
    <div className="App">
      <NewMemeForm addMeme={addMeme} />
      <hr />
      {memeContainer}
    </div>
  );
}

export default App;
