import './PokemonCard.css';
// import React, { useState } from 'react';
import { useNavigate } from 'react-router';

type PokemonProps = {
    name: string;
    img: string;
    id: number;
}

function Pokemon({name, img, id} : PokemonProps) {
  name = name.charAt(0).toUpperCase() + name.slice(1);  
  // const [message, setMessage] = useState('');
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  }
  
  return (
      <div onClick={handleClick} className="card-bg">
        <div className='card-inner'>
            <div className='title'>
              <h2>{name}</h2>
              <p>{id}</p>
            </div>
            
            <img className='sprite' src={img} alt={name}/>
            {/* <p>Pokemon Description</p> */}
        </div>
      </div>
    );
}

export default Pokemon;
export type { PokemonProps };