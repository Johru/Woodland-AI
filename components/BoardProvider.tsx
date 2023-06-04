import React, { useState } from 'react';
import BoardContext, { BoardState } from '../contexts/BoardContext';

export const BoardProvider: React.FC = ({ children }) => {
  const [boardState, setBoardState] = useState<BoardState | undefined>(
    undefined
  );

  return (
    <BoardContext.Provider value={{ boardState, setBoardState }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
