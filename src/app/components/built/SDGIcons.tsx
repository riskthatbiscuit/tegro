'use client';

import React, { useEffect, useRef } from 'react';

const categories = [
  {
    name: '08',
    href: 'https://sdgs.un.org/goals/goal8',
    imageSrc: './sdgIcons/E-WEB-Goal-08.png',
  },
  {
    name: '09',
    href: 'https://sdgs.un.org/goals/goal9',
    imageSrc: './sdgIcons/E-WEB-Goal-09.png',
  },
  {
    name: '10',
    href: 'https://sdgs.un.org/goals/goal10',
    imageSrc: './sdgIcons/E-WEB-Goal-10.png',
  },
  {
    name: '13',
    href: 'https://sdgs.un.org/goals/goal13',
    imageSrc: './sdgIcons/E-WEB-Goal-13.png',
  },
  {
    name: '14',
    href: 'https://sdgs.un.org/goals/goal14',
    imageSrc: './sdgIcons/E-WEB-Goal-14.png',
  },
  {
    name: '15',
    href: 'https://sdgs.un.org/goals/goal15',
    imageSrc: './sdgIcons/E-WEB-Goal-15.png',
  },
  {
    name: '08',
    href: 'https://sdgs.un.org/goals/goal8',
    imageSrc: './sdgIcons/E-WEB-Goal-08.png',
  },
  {
    name: '09',
    href: 'https://sdgs.un.org/goals/goal9',
    imageSrc: './sdgIcons/E-WEB-Goal-09.png',
  },
  {
    name: '10',
    href: 'https://sdgs.un.org/goals/goal10',
    imageSrc: './sdgIcons/E-WEB-Goal-10.png',
  },
  {
    name: '13',
    href: 'https://sdgs.un.org/goals/goal13',
    imageSrc: './sdgIcons/E-WEB-Goal-13.png',
  },
  {
    name: '14',
    href: 'https://sdgs.un.org/goals/goal14',
    imageSrc: './sdgIcons/E-WEB-Goal-14.png',
  },
  {
    name: '15',
    href: 'https://sdgs.un.org/goals/goal15',
    imageSrc: './sdgIcons/E-WEB-Goal-15.png',
  },
];

export default function SGD() {
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
      <div className="w-screen overflow-hidden py-8 ">
        <div className="my-2 flow-root">
          <div className="">
            <div className="inline-flex w-full flex-nowrap overflow-hidden ">
              <ul
                ref={tileRef}
                className="flex animate-infinite-scroll items-center justify-center "
              >
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="group relative flex h-16 flex-col overflow-hidden w-16 md:h-24 md:w-24 lg:h-32 lg:w-32"
                  >
                    <a href={category.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
                      <span aria-hidden="true" className="absolute inset-0">
                        <img
                          src={category.imageSrc}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                    </a>
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
