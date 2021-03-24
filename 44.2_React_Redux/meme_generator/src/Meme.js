import React from 'react';
import './Meme.css';

const Meme = ({ id, imageURL, topText, bottomText, deleteMeme }) => {

  function handleDeleteMeme() {
    deleteMeme(id);
  }

  return (
    <div id="foo" className="Meme">
      <div className="container">
        <span className="top-text">{topText}</span>
        <img src={imageURL} alt="a meme" />
        <span className="bottom-text">{bottomText}</span>
        <button id="meme_deleteBtn" onClick={handleDeleteMeme}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Meme;