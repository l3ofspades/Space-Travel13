import React from 'react';
import './PlanetCard.css';

export default function PlanetCard({ planet, spacecrafts, onMove }) {
  return (
    <div className="planet-card">
      <h3>{planet}</h3>
      <ul>
        {spacecrafts.map((sc) => (
          <li key={sc.id} className="spacecraft-item">
            <span>{sc.name}</span>
            <div className="actions">
              <button onClick={() => onMove(sc.id, 'Earth')}>Send to Earth</button>
              <button onClick={() => onMove(sc.id, 'Mars')}>Send to Mars</button>
              <button onClick={() => onMove(sc.id, 'Jupiter')}>Send to Jupiter</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
