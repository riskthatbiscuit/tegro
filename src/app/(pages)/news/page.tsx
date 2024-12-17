'use client';
import React, { useState } from 'react';
import Hero from './Hero';
import NewsCard from '../../components/built/NewsCard';
import { newsArticles } from './newsData';
import { handleSubscribe } from '../../components/subscribeForm';

export default function NewsPage() {
  const [expanded, setExpanded] = useState<number | null>(null); 
  const [subscribeModal, setSubscribeModal] = useState<boolean>(false);
  const [email, setEmail] = useState('');

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <Hero />
      <div className="mx-auto space-y-4 px-6 py-2 text-left md:w-2/3">
        {newsArticles.map((article, index) => (
          <div key={index} className="py-2">
            {article.isSpecialForm ? (
              // Special form for APAC SAF Market Map
              <NewsCard headline={article.headline} blurb={article.blurb}>
                <form
                  className="w-full"
                  onSubmit={(e) =>
                    handleSubscribe(
                      e,
                      setEmail,
                      setSubscribeModal,
                      article.headline
                    )
                  }
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
                      className="sm:text-sm min-w-0 flex-auto rounded-md border px-3.5 py-2"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="rounded-md bg-mainBlue px-3.5 py-2.5 text-mainLight hover:bg-mainLight hover:text-mainBlue"
                    >
                      Request Access
                    </button>
                  </div>
                </form>
              </NewsCard>
            ) : article.isFullContent ? (
              // Render full article content inline
              <div className="container w-full px-4 py-2">
                <div className="rounded-lg bg-white p-6 shadow-2xl">
                  <h2 className="text-h3_custom font-bold leading-relaxed text-mainBlue">
                    {article.headline}
                  </h2>

                  {/* Content Section */}
                  <div
                    className={`space-y-4 overflow-hidden text-b2_custom leading-relaxed transition-all duration-500 ${
                      expanded === index ? 'max-h-full' : 'max-h-48'
                    }`}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />

                  {/* Read More Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-4 font-semibold text-mainBlue hover:underline"
                  >
                    {expanded === index ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ) : (
              // Standard NewsCard
              <NewsCard
                headline={article.headline}
                blurb={article.blurb}
                link={article.link || ''}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
