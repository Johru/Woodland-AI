import React, { useState, useEffect, useContext } from 'react';
import { Clearing } from '../models';
import CanvasComponent from './CanvasComponent';
import styles from '../styles/Board.module.scss';
import { BoardContext } from '../contexts';
import {maps} from '../data/maps'

export const BoardComponent = () => {
  const [clearings, setClearings] = useState<Clearing[]>([]);
const {boardState} = useContext(BoardContext)
const setupSettings = boardState?.setupSettings
let mapSelected = setupSettings?.map
let map=maps[mapSelected || 'Autumn']

useEffect(() => {
  if (boardState) {
    console.log(boardState);
  
mapSelected = setupSettings?.map
map=maps[mapSelected || 'Autumn']
console.log('setupSettings:')
console.log(setupSettings)
  }
}, [boardState]);


  const clearingPaths: Array<[number, number]> =map.clearingPaths;
  const clearingRivers: Array<[number, number]> = map.clearingRivers;
  const clearingGridPositions: Array<number> = map.clearingGridPositions;

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
    const newClearings = repeatedColors.map((color, index) => new Clearing(color, index));

    setClearings(newClearings);
  };

  useEffect(() => {
    generateNewClearings();
   


  }, []);
  
 
  return (
    <div className={styles['canvas']}>
      
      <CanvasComponent
        clearingPaths={clearingPaths}
        clearingRivers={clearingRivers}
        clearings={clearings}
        clearingGridPositions={clearingGridPositions}
      />
    <div>Selected Map: {mapSelected}
    </div>
  
    </div>
  );
};

export default BoardComponent;
