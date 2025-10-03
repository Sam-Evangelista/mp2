import { PokemonProps } from './PokemonCard';
import { useLocation } from 'react-router';

function StatsPage () {
    const location = useLocation();
    return (
        <div>
            <h1>{location.state.name}</h1>
            <img src={location.state.img} alt={location.state.name}/>
            <p>ID: {location.state.id}</p>
        </div>
        );
}

export default StatsPage;