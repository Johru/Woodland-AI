import React, { useState, useEffect } from 'react';
import { Clearing } from '../models';
import ClearingComponent from './ClearingComponent';
import CanvasComponent from './CanvasComponent';
import styles from '../styles/Board.module.scss';

const Board = () => {
  const [clearings, setClearings] = useState<Clearing[]>([]);

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

  //   return (
  //     <div>
  //       <button onClick={() => generateNewClearings()}>
  //         Generate new clearings
  //       </button>
  //       {clearings.map((clearing, index) => (
  //         <ClearingComponent
  //           key={index}
  //           index={index + 1}
  //           color={clearing.color}
  //         />
  //       ))}
  //     </div>
  //   );
};

export default Board;
