'use client';

import React, { useRef } from 'react';
import { useIsVisible } from '@/app/hooks/useIsVisible';

const services = [
  {
    id: 1,
    title: 'Capital Advisory',
    href: '/services',
    description:
      'Joining forces to accelerate the energy transition, advance cutting-edge technologies, and unlock new market potential across Asia Pacific.',
  },
  {
    id: 2,
    title: 'Corporate Partnerships',
    href: '/services',
    description:
      'Co-developing direct investment platforms that drive industrial decarbonization, scale impact and build operational resilience.',
  },
  {
    id: 3,
    title: 'Innovation Sandbox',
    href: '/services',
    description:
      'From outsourcing your corporate venture program, building and deploying financing innovations and advanced risk and impact data models, our Innovation Sandbox is a space to test, learn and grow.',
  },
];

export default function Services2() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      className=" flex flex-col items-center py-8 md:py-16 lg:pt-36"
      id="services"
    >
      <h2 className="text-center font-palanquinDark text-h5_custom text-mainBlue lg:text-h4_custom">
        Our Services
      </h2>
      <p className="my-2 text-center font-palanquinDark text-h5_custom leading-8 text-mainDark md:my-4 md:text-h3_custom lg:my-6 lg:text-h2_custom ">
        Your commodity partners
      </p>
      <div
        className={`mx-4 max-w-7xl rounded-lg bg-secBlue1 py-2 md:mx-6 ${isVisible1 ? 'animate-fade animate-duration-[4000ms] animate-once animate-ease-out' : ''}`}
      >
        <div className="mx-auto text-center ">
          <p className="mx-8 mt-4 text-h5_custom lg:mt-8 md:mt-6 lg:text-h4_custom">
            By bringing together innovators, capital, and industries we identify emerging technologies and create the investment structures, risk management and scalability required to deliver an investable program that supports all project participants to gain value from the low carbon economy.
          </p>
          <div
            ref={ref1}
            className={`m-4 rounded-md bg-mainLight bg-opacity-50 p-6 px-6 text-left md:m-8 lg:px-6 `}
          >
            <div className=" flex flex-col gap-x-2 lg:mx-0 lg:max-w-none  lg:flex-row ">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={service.href}
                  className="group flex basis-1/3 cursor-pointer flex-col rounded-lg p-2 lg:p-4 hover:bg-secBlue1"
                >
                  <div className="py-2 font-palanquinDark text-h5_custom text-mainDark md:text-h4_custom">
                    {service.title}
                  </div>
                  <p className=" line-clamp-8 text-b3_custom lg:text-b1_custom leading-6 md:text-b2_custom text-gray-600 ">
                    {service.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
