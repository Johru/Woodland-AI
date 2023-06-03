import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Board.module.scss';

type CanvasProps = {
  clearings: Array<{ color: string; index: number }>;
  clearingPaths: Array<[number, number]>;
};

const CanvasComponent: React.FC<CanvasProps> = ({ clearings }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const rows = 3;
  const cols = 4;
  const gap = 20; // define the gap between circles
  const sidebarWidth = 260; // adjust this value to your sidebar's width
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [circleDiameter, setCircleDiameter] = useState(300);

  useEffect(() => {
    function handleResize() {
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

    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const circleRadius = circleDiameter / 2;

    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      const clearingPaths = [
        [1, 2],
        [1, 5],
        [5, 6],
        [7, 8],
        [11, 8],
      ];
      const lineWidth = 10;
      const pathColor = '#f3e5d8';

      clearings.forEach((clearing, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;

        // added padding to the position calculations
        const x = col * (circleDiameter + gap) + circleRadius;
        const y = row * (circleDiameter + gap) + circleRadius;

        context.beginPath();
        const effectiveRadius = Math.max(0, circleRadius - lineWidth / 2);
        context.arc(x, y, effectiveRadius, 0, Math.PI * 2);
        context.strokeStyle = clearing.color;
        context.lineWidth = lineWidth;
        context.stroke();
      });

      // Draw connections
      context.beginPath();
      context.strokeStyle = pathColor; // white color for connections
      context.lineWidth = 2;

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

        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.lineWidth = lineWidth;
        context.stroke();
      });

      clearings.forEach((clearing, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;

        const x = col * (circleDiameter + gap) + circleRadius;
        const y = row * (circleDiameter + gap) + circleRadius;

        context.beginPath();
        const effectiveRadius = Math.max(0, circleRadius - lineWidth / 2);
        context.arc(x, y, effectiveRadius, 0, Math.PI * 2);
        context.fillStyle = pathColor;
        context.lineWidth = lineWidth;
        context.fill();
      });
    }
  }, [clearings, dimensions, circleDiameter]);

  return <canvas ref={canvasRef} className={styles['canvas']} />;
};

export default CanvasComponent;
