import '../Searchbar.css';

function Searchbar({query, setQuery} : {query: string, setQuery: (q: string) => void}) {
    return (
        <div className='outer-container'>
            <div className='smaller-container'>
                <input className='searchbar' type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Pokemon..." />
            </div>
        </div>
    );
}

export default Searchbar;