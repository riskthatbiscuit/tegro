'use client';
import { FcGoogle } from 'react-icons/fc';

const features = [
  {
    name: 'Bias to Action',
    description:
      'We deliver. We roll up our sleeves, jump in and get things done. Even when the odds are against us, we find a way',
    href: '#',
    icon: FcGoogle,
  },
  {
    name: 'Forward moving',
    description:
      'Our finger is on the pulse and our eyes are fixed on the innovations that shape what’s next. Because standing still is falling behind.',
    href: '#',
    icon: FcGoogle,
  },
  {
    name: 'Simplicity is in our DNA',
    description:
      'Climate solutions are complex. Financing is complex. Everything we do is focused on making things simple, easy and transparent.',
    href: '#',
    icon: FcGoogle,
  },
];

export default function Values() {
  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-secBlue1 p-4 sm:mt-6 lg:max-w-none lg:basis-5/12">
      <h2 className="text-center font-palanquinDark text-h4_custom text-mainBlue md:text-h2_custom">
        Values
      </h2>
      <div className={`$ mx-auto max-w-5xl  py-2`}>
        <div className="mx-auto text-center">
          <p className=" mt-2 text-h6_custom lg:text-h5_custom">
            We're a team of passionate innovators working across carbon, nature,
            waste and energy. We connect companies deploying sustainable
            infrastructure assets with suitable investors to drive accelerated
            climate action on a gloabl basis.
          </p>
          <dl className="mt-4 flex max-w-xl flex-col gap-x-8 gap-y-8 px-4 lg:max-w-none ">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center justify-between rounded-2xl border border-mainBlue bg-mainLight bg-opacity-50 px-4 py-2 md:flex-row"
              >
                <div className="flex flex-row items-center align-middle md:w-1/3">
                  <dt className="text-h5_custom font-palanquinDark leading-7 text-mainBlue">{feature.name}</dt>
                </div>
                <div className="flex md:w-2/3 flex-col md:border-l md:border-mainBlue">
                  <dd className="my-4 leading-7 text-mainDark md:pl-8">
                    <p className="md:text-b1_custom text-b2_custom text-left">{feature.description}</p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <p className="text-b2_custom mt-8">
            Located out of Sydney's Salesforce Tower, the Waterfall team works
            out of Australia's largest dedicated climate tech hub alongside
            leading climate-aligned businesses.
          </p>
        </div>
      </div>
    </div>
  );
}
