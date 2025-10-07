import React from 'react';
import axios from 'axios';
import Pokemon from './components/PokemonCard';
import './App.css';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Sort from './components/Sort';
import { useState, useEffect } from 'react';
import { PokemonProps } from './components/PokemonCard';
import PokemonDrop from './components/PokemonDrop';

function App() {
  const [list, setList] = useState<PokemonProps[]>([]);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  // const q = query.trim().toLowerCase();

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

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
      <button className='toggle-button' onClick={handleToggle}>
        {isToggled ? 'Switch to Gallery' : 'Switch to List'} View
      </button>


      
      
      
      {isToggled ? (
        <div>
          <div className='container'>
            <Searchbar query={query} setQuery={setQuery}/>
            <Sort sort={sort} setSort={setSort}/>
          </div>
          
          <div className='pokemon-cards'>
            
            {list.filter((item) => {
              if (query.trim() === '') return false;
              return query.toLowerCase() === '' ? item : item.name.toLowerCase().includes(query);
            }).sort((a, b) => {
              if (sort === "name-asc") {
                return a.name.localeCompare(b.name);
              }
              if (sort === "name-desc") {
                return b.name.localeCompare(a.name);
              }
              if (sort === "id-asc") {
                return a.id - b.id;
              }
              if (sort === "id-desc") {
                return b.id - a.id;
              }
              return 0;
            }).slice(0,5).map((p) => (
              <PokemonDrop key={p.id} name={p.name} img={p.img} id={p.id}/>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className='pokemon-cards'>
          {list.map((p) => (
                <Pokemon key={p.id} name={p.name} img={p.img} id={p.id} />
                ))}
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default App;
