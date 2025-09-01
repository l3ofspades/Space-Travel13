import { useContext } from "react";
import { SpacecraftContext } from "../context/SpacecraftContext";
import './Planets.css';

const Planets = () => {
  const { spacecrafts, dispatchSpacecraft } = useContext(SpacecraftContext);

  // Get unique planet locations from spacecrafts
  const planets = [...new Set(spacecrafts.map(sc => sc.location))];

  const handleDispatch = (scId, planet) => {
    dispatchSpacecraft(scId, planet);
  };

  return (
    <div className="planets-container">
      <h2>🪐 Planets</h2>
      {planets.map((planet) => (
        <div key={planet} className="planet-card">
          <h3>{planet}</h3>
          <ul>
            {spacecrafts
              .filter(sc => sc.location === planet)
              .map(sc => (
                <li key={sc.id} className="spacecraft-item">
                  <span>{sc.name}</span>
                  <div className="actions">
                    <button onClick={() => handleDispatch(sc.id, "Earth")}>Send to Earth</button>
                    <button onClick={() => handleDispatch(sc.id, "Mars")}>Send to Mars</button>
                    <button onClick={() => handleDispatch(sc.id, "Jupiter")}>Send to Jupiter</button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Planets;
