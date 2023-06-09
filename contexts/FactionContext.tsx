import React, { Dispatch, SetStateAction, useState } from 'react';

// Define and export a type for your board state here
type FactionState = {
  //store instances of faction classes
  placeholderVar : string 
};
const initialFactionState: FactionState = {
  placeholderVar: "Default Faction String"
};

const FactionContext = React.createContext<{
  factionState: FactionState | undefined;
  setFactionState:
    | Dispatch<SetStateAction<FactionState | undefined>>
    | undefined;
  }>({
    factionState: initialFactionState,
    setFactionState: undefined,
  });

export const FactionProvider: React.FC = ({ children }) => {
  const [factionState, setFactionState] = useState<FactionState | undefined>(
    undefined
  );

  return (
    <FactionContext.Provider value={{ factionState, setFactionState }}>
      {children}
    </FactionContext.Provider>
  );
};