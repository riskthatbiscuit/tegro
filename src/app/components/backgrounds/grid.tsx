'use client';

import React, { useMemo, useState, useEffect } from 'react';

export default function GridBackground({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [gridSize, setGridSize] = useState(50); // Default size

  useEffect(() => {
    // Adjust gridSize based on client-side `window` object.
    function handleResize() {
      const newSize =
        window.innerWidth > 900 ? 200 : window.innerWidth > 400 ? 100 : 50;
      setGridSize(newSize);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Setting Parameters for background grid
  const numSquaresX = 20;
  const numSquaresY = 10;
  const probability1 = 0.1;
  const probability2 = 0.05;

  // Use useMemo to generate shaded squares only once on component mount
  const shadedSquares1 = useMemo(() => {
    const shaded = [];
    for (let i = 0; i < numSquaresX * numSquaresY; i++) {
      if (Math.random() < probability1) {
        shaded.push(i);
      }
    }
    return shaded;
  }, [numSquaresX, numSquaresY]);

  // Use useMemo to generate shaded squares only once on component mount
  const shadedSquares2 = useMemo(() => {
    const shaded = [];
    for (let i = 0; i < numSquaresX * numSquaresY; i++) {
      if (Math.random() < probability2) {
        shaded.push(i);
      }
    }
    return shaded;
  }, [numSquaresX, numSquaresY]);

  return (
    <div className="min-h-full">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <svg className="h-full w-full opacity-20 blur-sm z-0 " aria-hidden="true">
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
                      stroke="var(--mainDark)" // Ensure this CSS variable is defined or use a direct color value
                      fill={
                        shadedSquares1.includes(index)
                          ? 'var(--mainBlue)'
                          : shadedSquares2.includes(index)
                            ? 'var(--secGreen2)'
                            : 'var(--mainLight)'
                      }
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
