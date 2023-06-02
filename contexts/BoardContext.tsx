import React, { Dispatch, SetStateAction } from 'react';

// Define and export a type for your board state here
export type BoardState = {
  strings: string[];
  numbers: number[][];
};

const BoardContext = React.createContext<{
  boardState: BoardState | undefined;
  setBoardState: Dispatch<SetStateAction<BoardState | undefined>> | undefined;
}>({
  boardState: undefined,
  setBoardState: undefined,
});

export default BoardContext;
