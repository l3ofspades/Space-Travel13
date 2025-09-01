import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { SpacecraftContext } from "../context/SpacecraftContext";
import './SpacecraftDetail.css';

export default function SpacecraftDetail() {
  const { spacecrafts } = useContext(SpacecraftContext);
  const { id } = useParams();

  const spacecraft = spacecrafts.find((sc) => sc.id === parseInt(id));

  if (!spacecraft) {
    return (
      <div className="detail-container">
        <h2>🚨 Spacecraft Not Found</h2>
        <Link to="/spacecrafts" className="terminal-link">Back to Spacecrafts</Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <h1>{spacecraft.name} <span className="blinking-cursor"></span></h1>
      <p><strong>Current Planet:</strong> {spacecraft.planet || "Unknown"}</p>

      <div className="log-container">
        <h3>Activity Log</h3>
        {spacecraft.log && spacecraft.log.length > 0
          ? spacecraft.log.map((entry, idx) => <p key={idx}>{entry}</p>)
          : <p>No logs available.</p>
        }
      </div>

      <Link to="/spacecrafts" className="terminal-link">⬅️ Back to Spacecrafts</Link>
    </div>
  );
}
