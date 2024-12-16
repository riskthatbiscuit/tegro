'use client';

import React, { useRef } from 'react';
import { useIsVisible } from '@/app/hooks/useIsVisible';
import SideImages from './SideImages';
import { useModal } from '../components/modals/ModalContext';

export default function Hero() {
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref2);

  const { currentModal, closeModal, setCurrentModal, additionalData } = useModal();

  const prefillMessage = "I'm interested in learning more about your services.";

  return (
    <div className="relative isolate -z-10 ">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-36 lg:px-10">
          <div className="mx-auto flex flex-col md:flex-row md:items-center">
            <div
              ref={ref2}
              className={`w-full md:pr-4 flex-col md:flex md:w-4/6 md:shrink-0 lg:max-w-xl ${isVisible1 ? 'animate-fade-right animate-duration-[2000ms] animate-ease-in-out' : ''}`}
            >
              <h1 className="font-palanquinDark text-h3_custom font-bold leading-tight tracking-tight text-gray-900 md:text-h2_custom lg:text-h1_custom">
                Empowering <br />
                industrial evolution
              </h1>
              <h4 className="font-text-secGray3 relative mt-6 text-h6_custom leading-8 sm:max-w-md md:max-w-none md:text-h5_custom">
                Tegro is a strategic advisory and investment firm that works with industrial leaders to safely and securely execute their sustainable transformation.
              </h4>
              <div className="h-full py-8">
                <a
                  href="#services"
                  className="my-2 mr-6 w-36 cursor-pointer rounded-lg font-medium bg-mainBlue px-2 py-4 text-b4_custom text-mainLight shadow-sm hover:bg-mainLight hover:text-mainBlue lg:px-4 lg:text-b3_custom "
                >
                  Our Services
                </a>
                <a
                  key="Contact_Us"
                  onClick={() => setCurrentModal('Contact Us', prefillMessage)}
                  className="my-2 mr-6 w-36 cursor-pointer rounded-lg bg-mainBlue font-medium px-2 py-4 text-b4_custom text-mainLight shadow-sm hover:bg-mainLight hover:text-mainBlue lg:px-4 lg:text-b3_custom "
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className={`${isVisible1? 'animate-fade-left':''}`}>
              <SideImages />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
