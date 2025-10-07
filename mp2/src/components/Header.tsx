import { Link } from 'react-router';
import '../Header.css';

function Header () {
    return (
        <header className="header">
        <Link to="/">
            <h1>Pokemon Database</h1>
        </Link>
        </header>
    )
}

export default Header;