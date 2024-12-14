'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { HiMenu } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import TermsConditions from './modals/TermsConditions';
import PrivacyPolicy from './modals/PrivacyPolicy';
import ContactUs from './modals/ContactUs';
import { useModal } from './modals/ModalContext';

const navigation = [
  { name: 'Home', href: '/', public: true },
  { name: 'About', href: 'about', public: true },
  // { name: 'Waterfall Platform', href: 'waterfallPlatform', public: true },
  {
    name: 'Services',
    href: 'services',
    public: true,
  },
];

const modals = [
  {
    name: 'Terms',
    id: 1,
    content: <TermsConditions />,
  },
  { name: 'Privacy Policy', content: <PrivacyPolicy />, id: 2 },
  { name: 'Contact Us', content: <ContactUs />, id: 3 },
  // { name: 'Investors', content: <ContactUs />, id: 4 },
  // { name: 'News', content: <ContactUs />, id: 5 },
];

function classNames(...classes: [string]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentModal, closeModal, setCurrentModal } = useModal();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-mainLight">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex h-16 lg:flex-1">
          <a href="/" className="-m-1.5 flex ">
            <img
              className="h-20"
              src="./WF_primary_logo_primary.svg"
              alt=""
            />
            <span className="sr-only">Waterfall Finance</span>
            {/* <div className="ml-2 flex flex-col text-mainDark">
              <p className="mt-2 h-8 font-palanquinDark text-h4_custom text-mainDark">
                WATERFALL
              </p>
              <p className="font-palanquinDark text-b4_custom">
                STREAMLINING CLIMATE FINANCE
              </p>
            </div> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-mainDark"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiMenu className="h-8 w-8 text-mainBlue" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden items-center lg:flex lg:gap-x-12">
          <div className="hidden  lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Menu
                as="div"
                key={item.name}
                className="relative inline-block text-left"
              >
                {/* {!item.dropdown ? ( */}
                  <Link
                    href={`/${item.href}`}
                    className="text-b3_custom leading-6 text-mainDark hover:text-mainBlue"
                  >
                    {item.name}
                  </Link>
                {/* ) : (
                  <Menu.Button className="text-b_custom flex leading-6 text-mainDark after:align-bottom hover:text-mainBlue">
                    {item.name}
                    <IoIosArrowDown
                      className="my-auto ml-1"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                )} */}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {/* {item.dropdown?.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={`/${option.href}`}
                              className={classNames(
                                active
                                  ? 'block bg-gray-100 px-4 py-2 text-b3_custom text-secGray5 hover:bg-secBlue1'
                                  : 'block px-4 py-2 text-b3_custom text-secGray4 hover:bg-secBlue1'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))} */}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://app.waterfall.finance/login"
              className="ml-8 cursor-pointer rounded-lg border border-mainDark bg-mainLight px-2 py-2 text-b4_custom text-mainDark hover:bg-mainLight hover:text-mainBlue lg:px-4 lg:text-b3_custom"
            >
              Log in
            </a>
          </div> */}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 flex w-full flex-col justify-between overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-mainDark/10">
          <div>
            <div className="flex items-center justify-between ">
              <a href="/" className="k align-center -m-1.5 flex flex-row p-1.5">
                <span className="sr-only">Waterfall Finance</span>
                <img className="h-8 w-auto" src="./WaterfallLogo.svg" alt="" />
                <p className="h6 ml-2 mt-2 h-8 text-mainDark md:hidden">
                  WATERFALL
                </p>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-mainDark"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <IoIosArrowDown
                  className="h-8 w-8 text-mainBlue"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 ">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Menu
                      as="div"
                      key={item.name}
                      className="relative flex flex-row text-left"
                    >
                      {/* {!item.dropdown ? (
                        <Link
                          key={item.name}
                          href={`/${item.href}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2 text-b3_custom text-mainDark hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ) : ( */}
                        <>
                          <Menu.Button className="flex py-2 text-b3_custom text-mainDark hover:text-mainBlue">
                            {item.name}
                            <IoIosArrowDown
                              className="my-auto ml-1"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {/* {item.dropdown?.map((option) => (
                                <Menu.Item key={option.name}>
                                  {({ active }) => (
                                    <a
                                      href={`/${option.href}`}
                                      className={classNames(
                                        active
                                          ? 'text-sm block bg-gray-100 px-4 py-2 text-b3_custom  text-secGray5 hover:bg-secBlue1'
                                          : 'text-sm block px-4 py-2 text-b3_custom text-secGray4 hover:bg-secBlue1'
                                      )}
                                    >
                                      {option.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))} */}
                            </div>
                          </Menu.Items>
                        </>
                      {/* )} */}
                    </Menu>
                  ))}
                </div>

                <div className="py-6">
                  {/* <Link
                    href="https://app.waterfall.finance/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-b3_custom leading-7 text-mainDark hover:bg-gray-50"
                  >
                    Log in
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className="flex h-40 flex-col flex-wrap ">
              <a
                className="b3 h-8 px-4 py-6 text-left text-secGray4 underline"
                href="/termsPolicies#TermsConditions"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms
              </a>
              <a
                className="b3 h-8 px-4 py-6 text-left text-secGray4 underline"
                href="/termsPolicies#PrivacyPolicy"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy Policy
              </a>
              <button
                className="b3 h-8 px-4 py-6 text-left text-secGray4 underline"
                onClick={() => {
                  setCurrentModal('Contact Us');
                  setMobileMenuOpen(false);
                }}
              >
                Contact us
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
