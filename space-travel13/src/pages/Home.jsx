import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1>🚀 Space Command Center</h1>
        <p>Welcome Commander! Manage your planets and spacecrafts below:</p>

        <div className="button-group">
          <Link to="/planets" className="home-button">🌍 Manage Planets</Link>
          <Link to="/spacecrafts" className="home-button">🛸 Manage Spacecrafts</Link>
        </div>
      </div>
    </div>
  );
}
