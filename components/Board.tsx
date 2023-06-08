import React, { useState, useEffect } from 'react';
import { Clearing } from '../models';
import CanvasComponent from './CanvasComponent';
import styles from '../styles/Board.module.scss';

const Board = () => {
  const [clearings, setClearings] = useState<Clearing[]>([]);

  const clearingPaths: Array<[number, number]> = [
    [1, 2],
    [1, 5],
    [5, 6],
    [7, 8],
    [11, 8],
  ];

  const generateNewClearings = () => {
    const colors = ['red', 'orange', 'yellow'];
    const repeatedColors = Array.from({ length: 4 }, () => colors).flat();
    // Shuffle the colors array
    for (let i = repeatedColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [repeatedColors[i], repeatedColors[j]] = [
        repeatedColors[j],
        repeatedColors[i],
      ];
    }

    // Create new clearings with the randomized colors
    const newClearings = repeatedColors.map((color) => new Clearing(color));

    setClearings(newClearings);
  };

  useEffect(() => {
    generateNewClearings();
  }, []);

  return (
    <div className={styles['canvas']}>
      <CanvasComponent
        clearingPaths={clearingPaths}
        clearings={clearings.map((clearing, index) => ({
          color: clearing.color,
          index,
        }))}
      />
      <button onClick={() => generateNewClearings()}>
        Generate new clearings
      </button>
    </div>
  );
};

export default Board;
