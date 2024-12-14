'use client';

import React, { useRef } from 'react';
import { useIsVisible } from '@/app/hooks/useIsVisible';
import { useModal } from '../../components/modals/ModalContext';

export default function Career() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const { currentModal, closeModal, setCurrentModal } = useModal();

  return (
    <div
      ref={ref1}
      className={`mr-4 justify-between transition-opacity duration-700 ease-in py-8 flex lg:mx-auto lg:max-w-5xl lg:flex-row lg:pt-24 ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}
    >
      <img
        src="./TeamPhoto.jpeg"
        alt=""
        className="w-1/2 object-contain"
      />
      <div className="mx-auto max-w-md py-4 lex-auto lg:mx-0 lg:py-32">
        <h2 className="text-right font-palanquinDark text-h6_custom  text-mainBlue lg:text-h4_custom md:text-h5_custom ">
          Are you with us?
        </h2>
        <div className="flex justify-end gap-x-6 text-center">
          <a
            onClick={() => setCurrentModal('Contact Us')}
            className="my-2 w-36 cursor-pointer rounded-lg bg-mainBlue px-2 py-4 text-b4_custom text-mainLight shadow-sm hover:bg-mainLight hover:text-mainBlue lg:px-4 lg:text-b3_custom "
          >
            Join the change
          </a>
        </div>
      </div>
    </div>
  );
}
