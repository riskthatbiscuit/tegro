'use client';

import React, { useEffect, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function Logo() {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;

      const clone = ul.cloneNode(true) as HTMLUListElement;
      clone.setAttribute('aria-hidden', 'true');

      ul.parentNode?.insertBefore(clone, ul.nextSibling);
    }
  }, []);

  return (
    <div className="bg-secGreen1 opacity-70">
      <p className="mx-auto pl-4 max-w-5xl py-4 text-h5_custom md:text-h4_custom lg:text-h4_custom">
        Working with change makers
      </p>
      <div className="mx-auto inline-flex w-screen flex-nowrap overflow-hidden pb-8">
        <ul
          ref={logosRef}
          className="flex  animate-infinite-scroll items-center justify-center gap-16 md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        >
          {/* List of logos */}
          <li>
            <img className="h-8" src="./companies/agriprove.jpg"></img>
          </li>
          <li>
            <img className="h-8" src="./companies/carbonaught.png"></img>
          </li>
          <li>
            <img className="h-8" src="./companies/agriprove.jpg"></img>
          </li>
          <li>
            <img className="h-8" src="./companies/carbonaught.png"></img>
          </li>
          <li>
            <img className="h-8" src="./companies/agriprove.jpg"></img>
          </li>
          <li>
            <img className="h-8" src="./companies/carbonaught.png"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}
