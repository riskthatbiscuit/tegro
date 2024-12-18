'use client';

import { useModal } from '../components/modals/ModalContext';

export default function Video() {
  const { currentModal, closeModal, setCurrentModal } = useModal();
  return (
    <div className="mx-4 max-w-7xl justify-center gap-8 pb-8 md:mx-6 md:pb-16 lg:flex">
      <div className="rounded-md lg:mx-0 lg:w-2/6 ">
        <img
          src="./screenshots/commodity_diagram.png"
          alt=""
          className="aspect-[3/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
        />
      </div>
      <div className="mt-4 flex flex-col items-end justify-center gap-4 rounded-md bg-secBlue2 bg-opacity-80 p-4 text-right lg:mt-0 lg:w-2/5">
        <p className="text-b3_custom md:text-b2_custom lg:text-b1_custom">
          The energy transition is a commodity problem. Our mission is to accelerate the transition of hard-to-abate sectors towards a sustainable future while enhancing strategic resilience and supply chain security.
        </p>
        <a
          onClick={() => setCurrentModal('Contact Us')}
          className="my-2 w-36 cursor-pointer rounded-lg bg-mainBlue px-2 py-4 text-center text-b4_custom font-medium text-mainLight shadow-sm hover:bg-mainLight hover:text-mainBlue lg:px-4 lg:text-b3_custom "
        >
          Find out how
        </a>
      </div>
    </div>
  );
}
