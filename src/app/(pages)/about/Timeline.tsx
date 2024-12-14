'use client';

import React, { RefObject, useRef } from 'react';
import { useIsVisible } from '@/app/hooks/useIsVisible';

const timeline = [
  {
    name: 'Waterfall founded',
    description: '',
    date: 'Nov 2023',
    dateTime: '2023-11',
  },
  {
    name: 'Hired first employee',
    description: '',
    date: 'Dec 2023',
    dateTime: '2023-12',
  },
  {
    name: 'Signed first customer',
    description: '',
    date: 'Feb 2024',
    dateTime: '2024-02',
  },
  {
    name: 'Platform MVP launched',
    description: '',
    date: 'April 2024',
    dateTime: '2024-04',
  },
];

export default function Timeline() {
  const itemRefs = useRef<RefObject<HTMLParagraphElement>[]>(
    timeline.map(() => React.createRef<HTMLParagraphElement>())
  );
  const isVisibleStates = itemRefs.current.map((ref) => useIsVisible(ref));

  return (
    <div className="lg:pr-24 md:w-1/3 gap-6 px-6">
      <h2 className="font-palanquinDark text-h5_custom text-mainDark pt-8 text-center md:hidden">
        Company timeline
      </h2>
      <div className="grid grid-cols-1 justify-items-end gap-4 border-r-2 pr-4 border-mainBlue overflow-hidden text-right">
        {timeline.map((item, index) => (
          <div key={item.name} className="flex flex-col items-end ">
            <time
              dateTime={item.dateTime}
              className="flex items-center font-bold text-b2_custom leading-6 text-mainBlue"
            >
              {item.date}
              {/* <svg
                viewBox="0 0 4 4"
                className="ml-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg> */}
            </time>
            <p
              ref={itemRefs.current[index]}
              className={`text-base mt-1 leading-7 text-mainDark ${isVisibleStates[index] ? 'animate-fade-left animate-duration-[2000ms] animate-ease-in-out' : ''}`}
            >
              {item.name}
            </p>
            <p className="mt-6 font-palanquinDark text-h6_custom leading-8 tracking-tight text-mainDark">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
