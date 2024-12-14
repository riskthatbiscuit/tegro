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
    <div className="inline-flex lg:max-w-5xl md:max-w-2xl max-w-screen-sm flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logosRef}
        className="animate-infinite-scroll flex items-center justify-center gap-16 md:justify-start [&_img]:max-w-none [&_li]:mx-8"
      >
        {/* List of logos */}
        <li>
          <FcGoogle />
        </li>
        <li>
          <FcGoogle />
        </li>
        <li>
          <FcGoogle />
        </li>
        <li>
          <FcGoogle />
        </li>
        <li>
          <FcGoogle />
        </li>
        <li>
          <FcGoogle />
        </li>
        <li>
          <FcGoogle />
        </li>
        <li>
          <p className="border-mainBlue border text-black">
            Example Companies?
          </p>
        </li>
      </ul>
    </div>
  );
}
