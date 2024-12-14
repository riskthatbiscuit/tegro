'use client';

import React, { useState, useEffect } from 'react';

export default function GridBackground({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const numSquaresX = 20;
  const numSquaresY = 10;
  const probability1 = 0.5;
  const probability2 = 0.1;
  // const gridSize = 50;

  const [gridSize, setGridSize] = useState(5000);

  const [fillColors, setFillColors] = useState(
    new Array(numSquaresX * numSquaresY).fill('var(--mainLight)')
  );

  // Function to update shaded squares and fill colors
  const updateShadedSquares = () => {
    const newShadedSquares1: number[] = [];
    const newShadedSquares2: number[] = [];

    for (let i = 0; i < numSquaresX * numSquaresY; i++) {
      if (Math.random() < probability1) {
        newShadedSquares1.push(i);
      }
      if (Math.random() < probability2) {
        newShadedSquares2.push(i);
      }
    }

    setFillColors((currentFillColors) =>
      currentFillColors.map((color, index) =>
        newShadedSquares1.includes(index)
          ? 'var(--mainBlue)'
          : newShadedSquares2.includes(index)
            ? 'var(--secGreen2)'
            : 'var(--mainLight)'
      )
    );
  };

  // Initialize and set interval on component mount
  useEffect(() => {
    handleResize();
    updateShadedSquares(); // Initialize immediately on component mount

    function handleResize() {
      const newSize =
        window.innerWidth > 900 ? 200 : window.innerWidth > 400 ? 100 : 50;
      setGridSize(newSize);
    }
    const intervalId = setInterval(() => {
      handleResize();
      updateShadedSquares(); // Update every 10 seconds
    }, 5000);

    return () => clearInterval(intervalId);
  }, [numSquaresX, numSquaresY, probability1, probability2]);

  return (
    <div className="max-h-full">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <svg
            // className="z-0 h-full w-full"
            className="z-0 h-full w-full opacity-20 blur-sm "
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="gridPattern"
                x="0"
                y="0"
                width={gridSize * numSquaresX}
                height={gridSize * numSquaresY}
                patternUnits="userSpaceOnUse"
              >
                {Array.from({ length: numSquaresX * numSquaresY }).map(
                  (_, index) => (
                    <rect
                      key={index}
                      x={(index % numSquaresX) * gridSize}
                      y={Math.floor(index / numSquaresX) * gridSize}
                      width={gridSize}
                      height={gridSize}
                      stroke="var(--mainDark)"
                      fill={fillColors[index]}
                    />
                  )
                )}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPattern)" />
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
}
