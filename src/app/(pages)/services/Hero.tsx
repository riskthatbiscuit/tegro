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
              Services
            </h1>
            <h1
              className={`text-Maindark font-palanquinDark text-h3_custom tracking-tight md:text-h2_custom `}
            >
              Specializing in capital innovation for next generation commodity
              markets
            </h1>
            <div
              ref={ref1}
              className={`mx-auto mt-2 flex max-w-5xl flex-col items-center rounded-lg bg-secBlue1 ${isVisible1 ? 'animate-fade animate-duration-[4000ms] animate-once animate-ease-out' : ''}`}
            >
              <p className="m-4 max-w-3xl px-4 text-b2_custom lg:my-8 lg:text-b1_custom ">
                Tegro Partner&#39;s unique skill set can provide you with access to market leading early stage innovations, institutional M&A, sustainable finance and impact investment. We enable high growth, capital intensive and essential industries such as oil and gas, aviation, maritime, digital infrastructure and manufacturing to transition effectively. 
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
``;
