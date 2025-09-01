import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/spacecrafts">Spacecrafts</Link></li>
                <li><Link to="/planets">Planets</Link></li>
            </ul>
        </nav>
    );
}