import React, { createContext, useRef, useState, useEffect, ReactNode } from 'react';

interface CanvasProviderProps {
  children: ReactNode;
}

export const CanvasContext = createContext<{
  canvasRef: React.RefObject<HTMLCanvasElement>;
  context: CanvasRenderingContext2D | null;
} | undefined>(undefined);

export const CanvasProvider = ({ children }: CanvasProviderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const newContext = canvasRef.current.getContext('2d');
      if (newContext) {
        setContext(newContext);
      }
    }
  }, []);


  return (
    <CanvasContext.Provider value={{ canvasRef, context }}>
      {children}
    </CanvasContext.Provider>
  );
};
