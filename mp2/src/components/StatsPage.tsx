import { PokemonProps } from './PokemonCard';
import { useLocation, useNavigate } from 'react-router';

function StatsPage () {
    const location = useLocation();
    let navigate = useNavigate();
    return (
        <div>
            <h1>{location.state.name}</h1>
            <img src={location.state.img} alt={location.state.name}/>
            <p>ID: {location.state.id}</p>
            {/* <button onClick={() => navigate(`/${(location.state.id - 1) % 151}`, {state: {location.id, location.name, location.img}})}>Previous</button> */}
            {/* <button onClick={() => navigate(`/${(location.state.id + 1) % 151}`, {state: {location.id, location.name, location.img}})}>Next</button> */}
        </div>
        );
}

export default StatsPage;