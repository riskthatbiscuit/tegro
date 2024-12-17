'use client';
import React, { useState } from 'react';
import Hero from './Hero';

import { useModal } from '../../components/modals/ModalContext';
import { handleSubscribe } from '../../components/subscribeForm';

import NewsCard from '../../components/built/NewsCard';
// import PdfDownloadSection from './PdfDownloadSection';

export default function NewsPage() {
    const [subscribeModal, setSubscribeModal] = useState<boolean>(false);
    const [email, setEmail] = useState('');
  return (
    <div>
      <Hero />
      <div className="mx-auto px-6 py-12 text-center md:w-2/3">
        {/* Tegro Commodity Partners intro */}
        <NewsCard
          headline="Introducing Tegro Commodity Partners"
          blurb="A letter from Joe introducing Tegro Commodity Partners. Learn about our mission and goals."
          link="/news/tegro-introduction"
        />

        {/* APAC SAF Market Map */}
      <div className="container mx-auto py-8">
        {/* Example NewsCard with form */}
        <NewsCard
          headline="APAC SAF Market Map"
          blurb="Download the APAC SAF Market Map by signing up below. Stay informed about sustainable aviation fuel developments in Southeast Asia."
        >
          <form
            className="w-full"
            onSubmit={(e) => handleSubscribe(e, setEmail, setSubscribeModal, 'APAC SAF Market Map')}
          >
            <div className="flex w-full gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="sm:text-sm min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-mainBlue px-3.5 py-2.5 text-b4_custom text-mainLight shadow-sm hover:bg-mainLight hover:text-mainBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Request Access 
              </button>
            </div>
          </form>
        </NewsCard>

        <NewsCard
          headline="Tegro Commodity Partners supports leading Australian carbon developer to acquire Agtech platform"
          blurb="Discover how Tegro Commodity Partners helped acquire a leading Agtech platform."
          link="/about#AcquisitionOfAgtechPlatform"
        />
      </div>
    </div>
    </div>
  );
}