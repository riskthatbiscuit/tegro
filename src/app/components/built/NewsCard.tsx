import React, { ReactNode } from 'react';

interface NewsCardProps {
  headline: string;
  blurb: string;
  content?: string;
  link?: string;
  children?: ReactNode; // Optional children prop for custom content
  pdf?: string;
  id?: string;
}

export default function NewsCard({
  headline,
  blurb,
  content,
  link,
  children,
  id,
}: NewsCardProps) {
  return (
    <div className="container w-full px-4 py-2 ">
      <div className="rounded-lg bg-white p-6 shadow-2xl">
        <h2 className="text-h3_custom font-bold text-mainBlue">{headline}</h2>
        <p className="mt-2 text-b2_custom">{content}</p>
        <p className="mt-2 text-b2_custom font-bold">{blurb}</p>
        {link && (
          <a href={link} className="mt-4 inline-block text-mainBlue underline">
            Read More
          </a>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
