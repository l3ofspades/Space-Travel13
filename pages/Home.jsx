import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
    return (
        <div className="page-container home-container">
            <h1>🌌 Space Travel</h1>
            <p>
                Welcome, Commander! Your mission is to evacuate humanity from Earth
                and manage our spacecraft fleet to reach new planets. Prepare for interstellar challenges ahead.
         </p>
            <Link to="/spacecrafts" className="button">
                View Spacecrafts
            </Link>
            <Link to="/planets" className="button" style={{ marginLeft: '10px' }}>
                Explore Planets
            </Link>
        </div>
    );
}
