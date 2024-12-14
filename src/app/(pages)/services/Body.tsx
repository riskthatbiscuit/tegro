'use client';

import React, { useState } from 'react';

const features = [
  {
    name: 'Capital Advisory',
    description:
      'Investment Support\n - Due diligence\n - Commercialization services \n - Market entry studies \n - Project design and development \n\n Transactions\n - Capital raising\n - Buy/sell side M&A\n - Transaction services\n - Offtake development\n\n Specialized finance\n - Green and sustainable financing\n - Project financing\n - Debt structuring\n - Blended and innovation capital',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
    imageAlt: '',
  },
  {
    name: 'Corporate Partnerships',
    description:
      'The Waterfall model removes the need for high risk, speculative investments. We custom build diversified, high integrity, and tailored platforms that provide operating solutions, sourcing and access to the decarbonization solutions you need. \n \n Our network allows us to bring expert management, capital and support to deliver outcomes at scale.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: '',
  },
  {
    name: 'Innovation Sandbox',
    description:
      'Outsourced Venture\n - We introduce corporations and help to develop ideas that drive industrial decarbonization and operational resilience. From business cases to strategic investment, the Waterfall team makes ideas possible. \n \n Financing Innovation\n - Scoping, building and deploying financing solutions to connect climate-hardware innovation to institutional partners, enable effective collaboration throughout the capital stack, and reduce risk for customers, to achieve scale and commercialization.\n\nTechnology and Data\n - We are building data and technology to underpin market intelligence, advanced risk and impact assessment models and technology that supports transparent, streamlined and efficient investment processes.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: '',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="w-screen bg-secGray1 bg-opacity-70">
      <div className="py-8">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
          <h1 className="font-palanquinDark text-h3_custom text-mainBlue">
            Service offering
          </h1>

          <div className="mt-4 md:grid md:grid-cols-2 md:items-center">
            <div className="order-1 h-full md:order-1">
              {features.map((item, idx) => (
                <div key={idx} className="">
                  <h1
                    onClick={() => setSelectedIdx(idx)}
                    className={classNames(
                      'cursor-pointer text-left',
                      selectedIdx === idx
                        ? 'border-b-2 border-mainBlue bg-mainBlue bg-opacity-20 font-palanquinDark text-h4_custom text-mainDark'
                        : 'font-palanquinDark text-h6_custom text-secBlue4 hover:text-secBlue5 md:text-h4_custom',
                      'py-2 pl-4 md:py-4'
                    )}
                  >
                    {item.name}
                  </h1>
                  <div
                    className={classNames(
                      'cursor-pointer',
                      selectedIdx === idx ? 'block text-b2_custom' : 'hidden',
                      'max-w-2xl py-4 text-left text-b1_custom tracking-tight text-mainDark md:hidden'
                    )}
                  >
                    <p>{item.description}</p>
                    {/* {item.status && (
                      <p className="text-mainBlue">{item.status}</p>
                    )} */}
                  </div>
                </div>
              ))}
            </div>
            <div className="order-2 flex h-full md:order-2 md:border-l-2 md:border-mainBlue">
              <div className="hidden max-w-2xl w-full bg-mainBlue bg-opacity-20 pl-2 text-left text-b1_custom tracking-tight text-mainDark md:flex md:flex-col md:justify-center">
                <p style={{ whiteSpace: 'pre-line' }}>
                  {features[selectedIdx].description}
                </p>
                {/* {features[selectedIdx].status && (
                  <p className="mt-8 w-full text-mainBlue">
                    {features[selectedIdx].status}
                  </p>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

