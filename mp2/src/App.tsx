import React from 'react';
import axios from 'axios';
import './App.css';

async function getPokemon () {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(response);
    let name:string = response.data.name;
    let id:number = response.data.id;
    console.log(name);
    console.log(id);
  }
  catch (error) {
    console.error(error);
  }
}

function App() {
  let name, id = getPokemon();
  return (
    <div>

      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
