import React from 'react';
import axios from 'axios';
import Pokemon from './components/PokemonCard';
import './App.css';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { PokemonProps } from './components/PokemonCard';

function App() {
  const [list, setList] = useState<PokemonProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const listRes = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        
        const details = await Promise.all(
          listRes.data.results.map((p: { name: string; url: string }) =>
            axios.get(p.url).then((r) => ({
              id: r.data.id,
              name: r.data.name,
              img: r.data.sprites.front_default as string,
            }))
          )
        );

        setList(details);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  
  return (
    <div>
      <Header/>
      {/* <body> */}
        <Searchbar/>
        <div className='pokemon-cards'>
          {list.map((p) => (
            <Pokemon key={p.id} id={p.id} name={p.name} img={p.img} />
          ))}
        </div>
      {/* </body> */}
      

      <Footer/>
    </div>
  );
}

export default App;
