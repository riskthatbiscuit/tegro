'use client';

import React, { useRef } from 'react';
import { useIsVisible } from '@/app/hooks/useIsVisible';

export default function Hero() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <div className="mx-auto pt-14">
      <div className="mx-auto pb-4 pt-24 md:pt-24">
        <div className="mx-auto px-6">
          <div className=" mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1 className="font-palanquinDark text-h5_custom tracking-tight text-mainBlue ">
              News
            </h1>
            <h1
              className={`text-Maindark font-palanquinDark text-h3_custom tracking-tight md:text-h2_custom `}
            >
              Stay updated with the latest insights and developments from Tegro
              Commodity Partners.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
``;
