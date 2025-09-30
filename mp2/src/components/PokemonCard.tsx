import './PokemonCard.css';

interface PokemonProps {
    name: string;
    img: string;
    id: number;
}

function Pokemon({name, img, id} : PokemonProps) {
    return (
      <div className="card-bg">
        <div className='card-inner'>
            <h2>{name}</h2>
            <p>{id}</p>
            <img className='sprite' src={img}/>
            <p>Pokemon Description</p>
        </div>
      </div>
    );
}

export default Pokemon;
export type { PokemonProps };