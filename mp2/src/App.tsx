import React from 'react';
import axios from 'axios';
import Pokemon from './components/PokemonCard';
import './App.css';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Footer from './components/Footer';
// import { PokemonProps } from './PokemonCard';

async function getPokemon () {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(response);
    let name:string = response.data.name;
    let id:number = response.data.id;
    console.log(name);
    console.log(id);
    console.log(response.data.sprites.front_default);
  }
  catch (error) {
    console.error(error);
  }
}



function App() {
  let name, id = getPokemon();
  return (
    <div>
      <Header/>
      <Searchbar/>
      <Pokemon name="Ditto" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" id={1}/>
      <Footer/>
    </div>
  );
}

export default App;
