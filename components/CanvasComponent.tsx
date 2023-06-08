import React, { useRef, useEffect, useState } from 'react';
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
};

const CanvasComponent: React.FC<CanvasProps> = ({
  clearings,
  clearingPaths,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const rows = 3;
  const cols = 4;
  const gap = 20; // define the gap between circles
  const sidebarWidth = 260;
  const lineWidth = 10;
  const pathColor = '#f3e5d8';
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
      clearCanvas(context, canvas.width, canvas.height);

      clearings.forEach((clearing, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = col * (circleDiameter + gap) + circleRadius;
        const y = row * (circleDiameter + gap) + circleRadius;
        const effectiveRadius = Math.max(0, circleRadius - lineWidth / 2);

        context.beginPath();
        context.arc(x, y, effectiveRadius, 0, Math.PI * 2);
        context.strokeStyle = clearing.color;
        context.lineWidth = lineWidth;
        context.stroke();
      });

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

      clearings.forEach((clearing, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = col * (circleDiameter + gap) + circleRadius;
        const y = row * (circleDiameter + gap) + circleRadius;
        const effectiveRadius = Math.max(0, circleRadius - lineWidth / 2);
        drawCircle(context, x, y, effectiveRadius, pathColor);
      });
    }
  }, [clearings, dimensions, circleDiameter]);

  return <canvas ref={canvasRef} className={styles['canvas']} />;
};

export default CanvasComponent;
