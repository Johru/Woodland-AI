import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Board.module.scss';

type CanvasProps = {
  clearings: Array<{ color: string; index: number }>;
};

const CanvasComponent: React.FC<CanvasProps> = ({ clearings }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [dimensions, setDimensions] = useState({
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
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

    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      const rows = 3;
      const cols = 4;
      const gap = 5; // define the gap between circles

      clearings.forEach((clearing, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        // adjust the circle radius calculation to consider the gap
        const circleRadius =
          Math.min(
            (canvas.width - gap * (cols + 1)) / cols,
            (canvas.height - gap * (rows + 1)) / rows
          ) / 2;

        // adjust the position of the circle to consider the gap
        const x =
          (col + 1) * gap +
          (col + 0.5) * ((canvas.width - gap * (cols + 1)) / cols);
        const y =
          (row + 1) * gap +
          (row + 0.5) * ((canvas.height - gap * (rows + 1)) / rows);

        context.beginPath();
        context.arc(x, y, circleRadius, 0, Math.PI * 2);
        context.strokeStyle = clearing.color;
        context.lineWidth = 2;
        context.stroke();
      });
    }
  }, [clearings]);

  return <canvas ref={canvasRef} className={styles['canvas']} />;
};

export default CanvasComponent;
