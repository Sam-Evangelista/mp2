import axios from 'axios';
import Pokemon from './components/PokemonCard';
import './App.css';
import Searchbar from './components/Searchbar';
import Sort from './components/Sort';
import { useState, useEffect } from 'react';
import { PokemonProps } from './components/PokemonCard';
import PokemonDrop from './components/PokemonDrop';

function App() {
  const [list, setList] = useState<PokemonProps[]>([]);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  
  const [selectedType, setSelectedType] = useState<string>('');

  const typeButtons = [
    { label: 'Normal', value: 'normal' },
    { label: 'Fire', value: 'fire' },
    { label: 'Water', value: 'water' },
    { label: 'Electric', value: 'electric' },
    { label: 'Grass', value: 'grass' },
    { label: 'Ice', value: 'ice' },
    { label: 'Fighting', value: 'fighting' },
    { label: 'Poison', value: 'poison' },
    { label: 'Ground', value: 'ground' },
    { label: 'Flying', value: 'flying' },
    { label: 'Psychic', value: 'psychic' },
    { label: 'Bug', value: 'bug' },
    { label: 'Rock', value: 'rock' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Dragon', value: 'dragon' },
  ];

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
              types: r.data.types.map((t: { type: { name: string } }) => t.type.name) as string[],
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
              <PokemonDrop key={p.id} name={p.name} img={p.img} id={p.id} types={p.types}/>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className='pokemon-cards'>
            <div className='buttons'>
              <button onClick={() => setSelectedType('')}>All</button>
              {typeButtons.map(t => (
              <button
                key={t.value}
                onClick={() => setSelectedType(t.value)}
                className={selectedType === t.value ? 'active' : ''}
              >
              {t.label}
              </button>
              ))}
            </div>

            {list
              .filter(p => !selectedType || p.types.includes(selectedType))
              .map(p => (
                <Pokemon
                  key={p.id}
                  name={p.name}
                  img={p.img}
                  id={p.id}
                  types={p.types}
                />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
