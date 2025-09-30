function Searchbar() {
    function search () {
        console.log("Searching...");
    }
    
    return (
        <div>
            <input type="text" placeholder="Search Pokemon..." />
            <button onClick={search}>Search</button>
        </div>
    );
}

export default Searchbar;