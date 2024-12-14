'use client';

import React, { useState } from 'react';

export default function PrivacyPolicy() {
  // States for managing the visibility of each section
  const [showCollection, setShowCollection] = useState(false);
  const [showUseDisclosure, setShowUseDisclosure] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [showAccuracy, setShowAccuracy] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showComplaints, setShowComplaints] = useState(false);

  return (
    <div className="relative px-8 pt-14">
      <div className="pt-24 sm:pt-24">
        <h2
          className="mb-4 font-palanquinDark text-h3_custom text-mainBlue"
          id="PrivacyPolicy"
        >
          Privacy Policy
        </h2>
        <button
          onClick={() => setShowCollection(!showCollection)}
          className="w-full text-left"
        >
          <h3 className="mb-2 mt-4 font-palanquinDark text-h6_custom">
            Our Policy
          </h3>
        </button>
        {showCollection && (
          <div>
            <p className="border-none text-b3_custom ">
              Protecting our clients' privacy is very important to us. To ensure
              our compliance with the Privacy Act and as part of our commitment
              to ensuring the safety of your private and confidential
              information, we have established and implemented this Policy.
            </p>

            <h3 className="mb-2 mt-4 font-palanquinDark text-h6_custom">
              Information We Collect
            </h3>

            <p className="border-none text-b3_custom ">
              Information will only be collected by lawful and fair means. By
              engaging with us and using our products and services, you consent
              to the collection and use of the information you have provided to
              us for the purposes described in this Privacy Policy.
            </p>

            <h3 className="mb-2 mt-4 font-palanquinDark text-h6_custom">
              When We Collect Information
            </h3>

            <p className="border-none text-b3_custom ">
              We collect personal information in order to: comply with our legal
              obligations, such as verifying your identity, promote and provide
              the products and services offered by Waterfall, manage
              communications and promotional activities in respect of our
              clients and prospective clients, enhance and improve your use of
              the website, our products and services, respond to any questions,
              comments, queries or complaints, disperse marketing materials and
              keep you informed about new products, initiatives, and
              opportunities, for internal business purposes, for example, to
              research and develop the website, digital portals, our products
              and services, record keeping, data analytics, auditing, or
              training, and as required or authorised by law, including under
              the APPs.
            </p>
          </div>
        )}

        <button
          onClick={() => setShowUseDisclosure(!showUseDisclosure)}
          className="w-full text-left"
        >
          <h3 className="mb-2 mt-4 font-palanquinDark text-h6_custom">
            Use and Disclosure of Information
          </h3>
        </button>
        {showUseDisclosure && (
          <p className="border-none text-b3_custom ">
            Where we collect personal information to deliver our products and
            services, we may also use and disclose the information for another
            purpose that is related to the delivery of those products and
            services. Your personal information may be disclosed by us to third
            parties.
          </p>
        )}

        <button
          onClick={() => setShowTransfer(!showTransfer)}
          className="w-full text-left"
        >
          <h3 className="mb-2 mt-4 font-palanquinDark text-h6_custom">
            Transfer of Information Overseas
          </h3>
        </button>
        {showTransfer && (
          <p className="border-none text-b3_custom ">
            We keep personal information in physical and electronic records, at
            our premises and the premises of our service providers, which may
            include processing or storage in the cloud, which may mean in
            practice that this information is stored outside Australia.
          </p>
        )}

        <button
          onClick={() => setShowCookies(!showCookies)}
          className="w-full text-left"
        >
          <h3 className="mb-2 mt-4 font-palanquinDark text-h6_custom">
            Cookies
          </h3>
        </button>
        {showCookies && (
          <p className="border-none text-b3_custom ">
            A 'cookie' is a packet of information placed on a user's computer by
            a website for record keeping purposes. Cookies are generally used on
            Waterfall's sites to: access online services.
          </p>
        )}

        <button
          onClick={() => setShowAccuracy(!showAccuracy)}
          className="w-full text-left"
        >
          <h3 className="mb-2 mt-4 font-palanquinDark text-h6_custom">
            Access to and Accuracy of Your Information
          </h3>
        </button>
        {showAccuracy && (
          <p className="border-none text-b3_custom ">
            We take reasonable steps to ensure that the personal information
            held by us is accurate, complete, and up to date.
          </p>
        )}

        <button
          onClick={() => setShowSecurity(!showSecurity)}
          className="w-full text-left"
        >
          <h3 className="mb-2 mt-4 font-palanquinDark text-h6_custom">
            Data Security
          </h3>
        </button>
        {showSecurity && (
          <p className="border-none text-b3_custom ">
            We take measures to safeguard your information from unauthorized
            access, misuse, loss, or modification.
          </p>
        )}

        <button
          onClick={() => setShowComplaints(!showComplaints)}
          className="w-full text-left"
        >
          <h3 className="mb-2 mt-4 font-palanquinDark text-h6_custom">
            Complaints
          </h3>
        </button>
        {showComplaints && (
          <div>
            <p className="border-none text-b3_custom ">
              If you have any questions or complaints regarding privacy or
              information handling, please write to hello@waterfall.finance.
            </p>
            <h3 className="mb-2 mt-4 font-palanquinDark text-h6_custom">
              Contacting the Privacy Officer
            </h3>
            <p className="border-none text-b3_custom ">
              You can contact us by: Mail Waterfall Finance Greenhouse Climate
              Tech Hub Level 2, Salesforce Tower, 180 George St, Sydney NSW
              2000, Australia Email: hello@waterfall.finance
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
