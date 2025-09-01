import { createContext, useState } from 'react';
import { spacecraftsData } from '../services/api';

export const SpacecraftContext = createContext();

export const SpacecraftProvider = ({ children }) => {
  const [spacecrafts, setSpacecrafts] = useState(spacecraftsData);

  const dispatchSpacecraft = (scId, newPlanet) => {
    setSpacecrafts(spacecrafts.map(sc =>
      sc.id === scId
        ? {
            ...sc,
            location: newPlanet,
            log: [...sc.log, `[DISPATCH] Moved to ${newPlanet}`]
          }
        : sc
    ));
  };

  return (
    <SpacecraftContext.Provider value={{ spacecrafts, dispatchSpacecraft }}>
      {children}
    </SpacecraftContext.Provider>
  );
};
