import '../Searchbar.css';

function Searchbar() {
    function search () {
        console.log("Searching...");
    }
    
    return (
        <div className='outer-container'>
            <div className='smaller-container'>
                <input className='searchbar' type="text" placeholder="Search Pokemon..." />
                <button className='searchbutton' onClick={search}>Search</button>
            </div>
        </div>
    );
}

export default Searchbar;