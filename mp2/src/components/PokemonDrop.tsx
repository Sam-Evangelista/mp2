import '../PokemonDrop.css'
import { PokemonProps } from './PokemonCard';
import { useNavigate } from 'react-router';

function PokemonDrop({name, img, id} : PokemonProps) {
    let navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/${id}`)} className='outer-pk-container'>
            <div className='pokemon-container'>
                <img src={img} alt={name}/>
                <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <p>{id}</p>
            </div>
        </div>
    );}

export default PokemonDrop;