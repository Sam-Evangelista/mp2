import '../Sort.css';
function Sort ({sort, setSort} : {sort: string, setSort: (q: string) => void}) {
    console.log(sort);
    return (
        <div className="sort">
            <select className="sort-select" onChange={(e) => setSort(e.target.value)}>
                <option value="">Sort By</option>
                <option value="id-asc">ID (Ascending)</option>
                <option value="id-desc">ID (Descending)</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
            </select>
        </div>
    );
}

export default Sort;