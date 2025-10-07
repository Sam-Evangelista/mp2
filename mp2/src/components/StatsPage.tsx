import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function StatsPage () {
    let navigate = useNavigate();
    const {id} = useParams();
    const [list, setList] = useState<any>(null);

    useEffect(() => {
        (async () => {
          try {
            const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
            setList(data);
          } catch (err) {
            console.error(err);
          }
        })();
      }, [id]);

    if (!id) return <p>No Pokémon selected.</p>;
    if (!list) return <p>Loading...</p>;
  

    return (
        <div>
            <h1>{list.name.charAt(0).toUpperCase() + list.name.slice(1)}</h1>
            <img src={list.sprites.front_default} alt={list.name}/>
            <p>ID: {list.id}</p>

            <button onClick={() => 
                {
                    const current = Number(id);
                    const prev = current === 1 ? 151 : current - 1;
                    navigate(`/${prev}`);
            
                }
                
            }>Previous</button>
            <button onClick={() => 
                {
                    const current = Number(id);
                    const next = current === 151 ? 1 : current + 1;
                    navigate(`/${next}`);
                }
                
            }>Next</button>
        </div>
        );
}

export default StatsPage;