'use client';

import { handleSubscribe } from '../subscribeForm';
import { useState } from 'react';
import { useModal } from '../modals/ModalContext';
import { Modal } from '../modals/Modal';
import Subscribe from '../modals/Subscribe';

export default function Contact({title=""}) {
  const [subscribeModal, setSubscribeModal] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const { currentModal, closeModal, setCurrentModal } = useModal();

  return (
    <div
      className="mx-auto max-w-7xl py-16 sm:py-24 lg:max-w-5xl lg:py-32"
      id="contact"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="tracking-tight text-mainDark lg:col-span-6">
          <h2 className="font-palanquinDark text-h5_custom md:text-h3_custom">
            {title}
          </h2>{' '}
          <p className="inline sm:block lg:inline xl:block">
            Join our email list for the latest market insights
          </p>
        </div>
        <form
          onSubmit={(e) => handleSubscribe(e, setEmail, setSubscribeModal, 'Mailing List Request')}
          className="w-full lg:col-span-6 lg:pt-2"
        >
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="flex-none cursor-pointer rounded-md bg-mainBlue px-3.5 py-2.5 text-mainLight shadow-sm hover:bg-mainLight hover:text-mainBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Connect
            </button>
          </div>
          <p className="mt-4 text-right leading-6 text-gray-900">
            We care about your data. Read our{' '}
            <a
              href="/termsPolicies#PrivacyPolicy"
              className="cursor-pointer text-mainBlue hover:font-bold"
            >
              privacy&nbsp;policy
            </a>
            .
          </p>
        </form>
        {subscribeModal && (
          <Modal
            isOpen={subscribeModal}
            onClose={() => setSubscribeModal(false)}
          >
            <Subscribe />
          </Modal>
        )}
      </div>
    </div>
  );
}
