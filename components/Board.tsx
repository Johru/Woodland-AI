import React, { useState, useEffect } from 'react';
import { Clearing } from '../models';
import ClearingComponent from './ClearingComponent';

const Board = () => {
  const [clearings, setClearings] = useState<Clearing[]>([]);

  const generateNewClearings = (color: string) => {
    const newClearings = [];
    for (let i = 0; i < 12; i++) {
      newClearings.push(new Clearing(color)); // replace with your actual property values
    }
    setClearings(newClearings);
  };

  useEffect(() => {
    generateNewClearings('orange');
  }, []);

  return (
    <div>
      {clearings.map((clearing, index) => (
        <ClearingComponent
          key={index}
          index={index + 1}
          color={clearing.color}
        />
      ))}
      <button onClick={() => generateNewClearings('yellow')}>
        Generate new clearings
      </button>
    </div>
  );
};

export default Board;
