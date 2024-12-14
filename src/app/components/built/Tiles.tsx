'use client';

import React, { useEffect, useRef } from 'react';

const categories = [
  {
    name: 'Nature & Carbon',
    href: '#',
    imageSrc: './homeTiles/nature.jpeg',
  },
  {
    name: 'Airplane',
    href: '#',
    imageSrc: './homeTiles/airplane.jpg',
  },
  {
    name: 'Built Environment',
    href: '#',
    imageSrc: './homeTiles/Building.jpg',
  },
  {
    name: 'Manufacturing',
    href: '#',
    imageSrc: './homeTiles/manufacturing.webp',
  },
  {
    name: 'Tanker',
    href: '#',
    imageSrc: './homeTiles/tanker.jpg',
  },
  {
    name: 'Corn',
    href: '#',
    imageSrc: './homeTiles/corn-field.jpg',
  },
  {
    name: 'Waste',
    href: '#',
    imageSrc: './homeTiles/waste.jpeg',
  },
  {
    name: 'Battery & Storage',
    href: '#',
    imageSrc: './homeTiles/Batteries.jpg',
  },
  {
    name: 'Water',
    href: '#',
    imageSrc: './homeTiles/water.jpg',
  },
];

export default function Tiles() {
  const tileRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (tileRef.current) {
      const ul = tileRef.current;

      const clone = ul.cloneNode(true) as HTMLUListElement;
      clone.setAttribute('aria-hidden', 'true');

      ul.parentNode?.insertBefore(clone, ul.nextSibling);
    }
  }, []);
  return (
    <div className="">
      <div className="w-screen overflow-hidden sm:pt-8">
        <div className="mt-2 flow-root">
          <div className="-my-2">
            <div className="inline-flex w-full flex-nowrap overflow-hidden ">
              <ul
                ref={tileRef}
                className="hover:animate-infinte-scroll(off) flex animate-infinite-scroll items-center justify-center "
              >
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="group relative flex h-16 w-16 flex-col overflow-hidden md:h-32 md:w-24 lg:h-80 lg:w-64"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img
                        src={category.imageSrc}
                        alt=""
                        className="h-full w-full object-cover object-center group-hover:opacity-10"
                      />
                    </span>
                    <span className="fold-bold relative z-10 mt-auto hidden h-full items-center justify-center text-center text-h2_custom text-mainBlue group-hover:flex">
                      {category.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
