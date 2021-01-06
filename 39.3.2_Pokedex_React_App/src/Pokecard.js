import React from 'react';
import './Pokecard.css';

const Pokecard = ({id, name, type, base_experience}) => {

  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <div className="Pokecard">
      <p className="Pokecard-title">{name}</p>
      <img className="Pokecard-image" src={imgSrc} />
      <p className="Pokecard-data">Type: {type}</p>
      <p className="Pokecard-data">Exp: {base_experience}</p>
    </div>
  )
}


export default Pokecard;