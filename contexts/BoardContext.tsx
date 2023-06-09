import React, { Dispatch, SetStateAction, useState } from 'react';


export type BoardState = {
  boardColors: string[];
  boardConnections: number[][];
};

const BoardContext = React.createContext<{
  boardState: BoardState | undefined;
  setBoardState: Dispatch<SetStateAction<BoardState | undefined>> | undefined;
}>({
  boardState: undefined,
  setBoardState: undefined,
});

export const BoardProvider: React.FC = ({ children }) => {
  const [boardState, setBoardState] = useState<BoardState | undefined>(
    undefined
  );

  return (
    <BoardContext.Provider value={{ boardState, setBoardState }}>
      {children}
    </BoardContext.Provider>
  );

  }
