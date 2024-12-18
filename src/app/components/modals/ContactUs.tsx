import { MdOutlineEmail } from 'react-icons/md';
import { useState } from 'react';
import GridBackground from '../backgrounds/grid';
import { Modal } from './Modal';
import Subscribe from './Subscribe';
import { useModal } from './ModalContext';

export default function ContactUs({prefillMessage=""}) {
  const {closeModal, additionalData} = useModal()

  const handleContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const phoneNumber = formData.get('phone-number');
    const message = formData.get('message');
    if (typeof email === 'string') {
      const success = await connectEmail(
        email,
        firstName,
        lastName,
        phoneNumber,
        message
      );
      if (success) {
        closeModal();
      } else {
        // Insert error message?
      }
    }
  };


  // Function to connect email on "Connect press"
  const connectEmail = async (
    email: string,
    firstName: FormDataEntryValue | null,
    lastName: FormDataEntryValue | null,
    phoneNumber: FormDataEntryValue | null,
    message: FormDataEntryValue | null
  ) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          email: email,
          type: 'connect',
          firstName: firstName,
          lastName: lastName,
          phoneNumber,
          message: message,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response;
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  };

  return (
    <div className="isolate overflow-auto rounded-md ">
      {/* <GridBackground> */}
      <div className="mx-auto grid h-fit grid-cols-1 ">
        <div className="static px-6">
          <div className="mx-auto">
            <div className="absolute inset-y-0 left-0 -z-10 w-full lg:w-1/2"></div>
            <h2 className="font-palanquinDark text-h4_custom text-mainBlue md:text-h2_custom">
              Get in touch
            </h2>
            <p className="my-2 text-b3_custom text-gray-600 md:my-4 md:text-b2_custom ">
              Send us a message here and we'll get in contact with you
            </p>
          </div>
        </div>
        <form onSubmit={handleContact} className="px-6">
          <div className="mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 md:gap-y-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-b4_custom font-semibold leading-4 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-1 md:mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-b4_custom sm:leading-4 md:py-2"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-b4_custom font-semibold leading-4 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-1 md:mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-b4_custom sm:leading-4 md:py-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-b4_custom font-semibold leading-4 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-1 md:mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-b4_custom sm:leading-4 md:py-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-b4_custom font-semibold leading-4 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-1 md:mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-b4_custom sm:leading-4 md:py-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-b4_custom font-semibold leading-4 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-1 md:mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    className="block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-b4_custom sm:leading-4 md:py-2"
                    defaultValue={
                      additionalData?.message || prefillMessage || ''
                    }
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 flex justify-end lg:mt-8">
              <button
                type="submit"
                className="flex-none rounded-md bg-mainBlue px-3.5 py-2.5 text-b4_custom text-mainLight shadow-sm hover:bg-mainLight hover:text-mainBlue md:my-6 "
              >
                Send message
              </button>
            </div>
          </div>
        </form>
        <div className="static h-fit px-6">
          <div className="mx-auto max-w-xl">
            <p className="mt-2 text-b3_custom text-gray-600 md:text-b2_custom ">
              Alternatively, you can send us an email directly:
            </p>
            <dl className="text-base my-2 text-gray-600 md:space-y-4">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <MdOutlineEmail
                    className="h-7 w-6 text-mainBlue"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="text-b2_custom hover:text-gray-900"
                    href="mailto:alex@tegro.partners"
                  >
                    alex@tegro.partners
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/* </GridBackground> */}
    </div>
  );
}
