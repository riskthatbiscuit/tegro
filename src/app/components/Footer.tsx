'use client';
import { useState } from 'react';
import { Modal } from './modals/Modal';
import TermsConditions from './modals/TermsConditions';
import PrivacyPolicy from './modals/PrivacyPolicy';
import ContactUs from './modals/ContactUs';
import Subscribe from './modals/Subscribe';
import React from 'react';
import { useModal } from './modals/ModalContext';
import { handleSubscribe } from './subscribeForm';

const modals = [
  {
    name: 'Terms',
    id: 1,
    content: <TermsConditions />,
  },
  { name: 'Privacy Policy', href: '/termsPolicies', id: 2 },
  { name: 'Contact Us', content: <ContactUs />, id: 3 },
];

export default function Footer() {
  const { currentModal, closeModal, setCurrentModal } = useModal();
  const [subscribeModal, setSubscribeModal] = useState<boolean>(false);
  const [email, setEmail] = useState('');

  return (
    <footer className=" w-full bg-secBlue4 p-4 ">
      <div className="mx-auto flex max-w-7xl justify-between overflow-hidden ">
        {/* Left */}
        <div className="hidden lg:flex">
          <img src="./Primary_logo_white.png" className="h-40 pr-16"></img>
          <nav className="flex h-40 flex-col flex-wrap " aria-label="Footer">
            <a
              className="h-8 px-4 py-6 text-left text-b3_custom font-bold text-secGray1"
              href="/termsPolicies#TermsConditions"
            >
              Terms
            </a>
            <a
              className="h-8 px-4 py-6 text-left text-b3_custom font-bold text-secGray1"
              href="/termsPolicies#PrivacyPolicy"
            >
              Privacy Policy
            </a>
            <button
              className="h-8 px-4 py-6 text-left text-b3_custom font-bold text-secGray1"
              onClick={() => setCurrentModal('Contact Us')}
            >
              Contact us
            </button>
          </nav>
        </div>
        {/* Right */}
        <div className="text-secGray1 lg:w-1/2">
          <h2 className="font-palanquinDark text-h4_custom">Stay informed</h2>
          <form
            className="w-full pb-4"
            onSubmit={(e) => handleSubscribe(e, setEmail, setSubscribeModal)}
          >
            <div className="flex w-full gap-x-4 ">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="sm:text-sm min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-mainBlue px-3.5 py-2.5 text-b4_custom text-mainLight shadow-sm hover:bg-mainLight hover:text-mainBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:px-4 lg:text-b3_custom"
              >
                Subscribe
              </button>
            </div>
          </form>
          {subscribeModal && (
            <Modal
              isOpen={subscribeModal}
              onClose={() => setSubscribeModal(false)}
            >
              <Subscribe />
            </Modal>
          )}
          <p className="text-b4_custom">
            Waterfall acknowledges the Traditional Owners of the lands that we
            live and work on, and pay our respects to all First Nations people
            and Elders past, present and emerging.
          </p>
          <p className="text-b4_custom">
            Waterfall Technologies Pty Ltd (ACN 664 241 052) is a corporate
            authorised representative (CAR No. 1308778) of Natural Capital
            Securities Pty Ltd (ACN 642 902 501) (AFSL 525278).
          </p>
          <p className="text-b4_custom">
            &copy; 2024 All Rights Reserved, Waterfall Technologies Pty Ltd.
          </p>
        </div>
      </div>
      {modals.map((modal) => (
        <Modal
          key={modal.id}
          isOpen={currentModal === modal.name}
          onClose={closeModal}
        >
          {modal.content}
        </Modal>
      ))}
    </footer>
  );
}
