import { useContext } from "react";
import { SpacecraftContext } from "../context/SpacecraftContext";
import './Planets.css';

export default function Planets() {
  const { spacecrafts, moveSpacecraft } = useContext(SpacecraftContext);

  // Get unique planet names
  const planets = [...new Set(spacecrafts.map(sc => sc.planet))];

  return (
    <div className="planets-container">
      <h2>🪐 Planets</h2>
      {planets.map((planet) => (
        <div key={planet} className="planet-card">
          <h3>{planet}</h3>
          <ul>
            {spacecrafts
              .filter(sc => sc.planet === planet)
              .map(sc => (
                <li key={sc.id} className="spacecraft-item">
                  <span>{sc.name}</span>
                  <div className="actions">
                    <button onClick={() => moveSpacecraft(sc.id, "Earth")}>Send to Earth</button>
                    <button onClick={() => moveSpacecraft(sc.id, "Mars")}>Send to Mars</button>
                    <button onClick={() => moveSpacecraft(sc.id, "Jupiter")}>Send to Jupiter</button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
