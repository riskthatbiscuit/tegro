'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { HiMenu } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import TermsConditions from './modals/TermsConditions';
import PrivacyPolicy from './modals/PrivacyPolicy';
import ContactUs from './modals/ContactUs';
import { useModal } from './modals/ModalContext';

const navigation = [
  { name: 'Home', href: '/', public: true },
  { name: 'About', href: 'about', public: true },
  {
    name: 'Services',
    href: 'services',
    public: true,
  },
  { name: 'News', href: 'news', public: true },
];

const modals = [
  {
    name: 'Terms',
    id: 1,
    content: <TermsConditions />,
  },
  { name: 'Privacy Policy', content: <PrivacyPolicy />, id: 2 },
  { name: 'Contact Us', content: <ContactUs />, id: 3 },
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
            <img className="h-24" src="./TegroDark.svg" alt="" />
            <span className="sr-only">Tegro</span>
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
                <Link
                  href={`/${item.href}`}
                  className="text-b3_custom leading-6 text-mainDark hover:text-mainBlue"
                >
                  {item.name}
                </Link>
              </Menu>
            ))}
          </div>
        </div>
      </nav>
      <div className="bg-mainDark py-2 text-center">
        <div className="flex items-center justify-center space-x-4">
          <a href="/news" className="text-sm text-white">
            Waterfall is now Tegro Commodity Partners
          </a>
        </div>
      </div>
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
                <span className="sr-only">Tegro</span>
                <img className="h-8 w-auto" src="./TegroLight.svg" alt="" />
                <p className="h6 ml-2 mt-2 h-8 text-mainDark md:hidden">
                  TEGRO
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
                    <Link
                      key={item.name}
                      href={`/${item.href}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-b3_custom text-mainDark hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <div className="flex h-40 flex-col flex-wrap ">
              <a
                className="b3 h-8 px-4 py-6 text-left text-secGray4"
                href="/termsPolicies#TermsConditions"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms
              </a>
              <a
                className="b3 h-8 px-4 py-6 text-left text-secGray4"
                href="/termsPolicies#PrivacyPolicy"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy Policy
              </a>
              <button
                className="b3 h-8 px-4 py-6 text-left text-secGray4"
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
