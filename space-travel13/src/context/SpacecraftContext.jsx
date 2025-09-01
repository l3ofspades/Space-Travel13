// context/SpacecraftContext.jsx
import { createContext, useState } from 'react';

export const SpacecraftContext = createContext();

export const SpacecraftProvider = ({ children }) => {
  const [spacecrafts, setSpacecrafts] = useState([
    { id: 1, name: 'Enterprise', capacity: 5, planet: 'Earth', status: 'Operational', log: ["[INFO] Spacecraft initialized..."] },
    { id: 2, name: 'Discovery', capacity: 3, planet: 'Mars', status: 'Operational', log: ["[INFO] Spacecraft initialized..."] },
  ]);

  const moveSpacecraft = (id, newPlanet) => {
    setSpacecrafts(prev =>
      prev.map(sc => (sc.id === id ? { ...sc, planet: newPlanet } : sc))
    );
  };

  const decommission = (id) => {
    setSpacecrafts(prev => prev.filter(sc => sc.id !== id));
  };

  const addSpacecraft = (spacecraft) => {
    setSpacecrafts(prev => [...prev, spacecraft]);
  };

  return (
    <SpacecraftContext.Provider value={{ spacecrafts, moveSpacecraft, decommission, addSpacecraft }}>
      {children}
    </SpacecraftContext.Provider>
  );
};
