import React, { useRef, useEffect, useState, useContext } from 'react';
import styles from '../styles/Board.module.scss';
import {
  clearCanvas,
  drawCircle,
  drawCircleOutline,
  drawLine,
} from '../utils/drawingUtils';


type CanvasProps = {
  clearings: Array<{ color: string; index: number }>;
  clearingPaths: Array<[number, number]>;
  clearingRivers: Array<[number, number]>;
  clearingGridPositions: Array<number>
};

const CanvasComponent: React.FC<CanvasProps> = ({
  clearings,clearingPaths,clearingRivers,clearingGridPositions
}) => {

const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
   const rowsRef = useRef(3);

  useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');
      if (renderCtx) {
        setContext(renderCtx);
      }
    }
  }, []);

 
  const cols = 4;
  const gap = 20;
  const sidebarWidth = 260;
  const lineWidth = 10;
  const pathColor = '#f3e5d8';
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [circleDiameter, setCircleDiameter] = useState(300);

  useEffect(() => {
   reRow()

  }, [clearingGridPositions]);

  function reRow (){
    if (clearingGridPositions.some(num => num > 12)) {
      rowsRef.current = 4;
    } else {
      rowsRef.current = 3;
    }

  }

  //Adjust the clearings grid to always fit the screen
  useEffect(() => {
     handleResize();
    if (typeof window !== 'undefined') window.addEventListener('resize', handleResize);

    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('resize', handleResize);
    };
  }, []);


  function handleResize() {
reRow();
   
    const rows=rowsRef.current
    const totalCanvasWidth = window.innerWidth - sidebarWidth;
    const totalCanvasHeight = window.innerHeight - 150;

    const diameterBasedOnWidth = (totalCanvasWidth - gap * (cols - 1)) / cols;
    const diameterBasedOnHeight =
      (totalCanvasHeight - gap * (rows - 1)) / rows;

    const newCircleDiameter = Math.min(
      diameterBasedOnWidth,
      diameterBasedOnHeight
    );

    if (canvasRef.current) {
      canvasRef.current.width = totalCanvasWidth;
      canvasRef.current.height = totalCanvasHeight;
      setDimensions({ width: totalCanvasWidth, height: totalCanvasHeight });
    }
    setCircleDiameter(newCircleDiameter);
  }

   useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const circleRadius = circleDiameter / 2;

    if (context) {

      clearCanvas(context, canvas.width, canvas.height);  
      renderClearingOutlines(context,circleRadius); 
      renderPaths(context,circleRadius);
      renderClearingBackgrounds(context,circleRadius);
      renderRivers(context,circleRadius);
      renderFactionPieces();
      
   
    }
     
  }, [clearings, dimensions, circleDiameter, context,clearingGridPositions]);


function renderClearingOutlines(context: CanvasRenderingContext2D, circleRadius: number){

  clearings.forEach((clearing, index) => {
    const gridIndex = clearingGridPositions[index] - 1
    const row = Math.floor(gridIndex / cols);
    const col = gridIndex % cols;
    const x = col * (circleDiameter + gap) + circleRadius;
    const y = row * (circleDiameter + gap) + circleRadius;
    const effectiveRadius = Math.max(0, circleRadius - lineWidth / 2);
    drawCircleOutline(context,x,y,effectiveRadius,clearing.color,lineWidth)
     });
}

function renderPaths (context: CanvasRenderingContext2D,circleRadius: number){
  clearingPaths.forEach((path) => {
        const [from, to] = path;
    const fromRow = Math.floor((from - 1) / cols);
    const fromCol = (from - 1) % cols;
    const fromX = fromCol * (circleDiameter + gap) + circleRadius;
    const fromY = fromRow * (circleDiameter + gap) + circleRadius;

    const toRow = Math.floor((to - 1) / cols);
    const toCol = (to - 1) % cols;
    const toX = toCol * (circleDiameter + gap) + circleRadius;
    const toY = toRow * (circleDiameter + gap) + circleRadius;
    drawLine(context, fromX, fromY, toX, toY, lineWidth, pathColor);
  });
}

  function renderClearingBackgrounds (context: CanvasRenderingContext2D,circleRadius: number){
clearings.forEach((clearing, index) => {
  const gridIndex = clearingGridPositions[index] - 1
  const row = Math.floor(gridIndex / cols);
  const col = gridIndex % cols;
  const x = col * (circleDiameter + gap) + circleRadius;
  const y = row * (circleDiameter + gap) + circleRadius;
  const effectiveRadius = Math.max(0, circleRadius - lineWidth / 2);
  drawCircle(context, x, y, effectiveRadius, pathColor);
});
  }

function renderRivers(context: CanvasRenderingContext2D,circleRadius: number){
  clearingRivers.forEach((river) => {
    const [from, to] = river;

    const fromRow = Math.floor((from - 1) / cols);
    const fromCol = (from - 1) % cols;
    const fromX = fromCol * (circleDiameter + gap) + circleRadius;
    const fromY = fromRow * (circleDiameter + gap) + circleRadius;

    const toRow = Math.floor((to - 1) / cols);
    const toCol = (to - 1) % cols;
    const toX = toCol * (circleDiameter + gap) + circleRadius;
    const toY = toRow * (circleDiameter + gap) + circleRadius;
    drawLine(context, fromX, fromY, toX, toY, lineWidth, 'blue');

  });
}
function renderFactionPieces(){
 // faction rendering logic goes here
};
  return <canvas ref={canvasRef} className={styles['canvas']} />;
};

export default CanvasComponent;
