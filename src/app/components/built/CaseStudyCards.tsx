import React from 'react';

interface CaseStudyCardProps {
  id: string;
  headline: string;
  blurb: string;
  image: string;
  filters: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  headline,
  blurb,
  image,
  filters,
}) => {
  return (
    <div id={id} className="overflow-hidden rounded-lg bg-white shadow-lg">
      <img src={image} alt={headline} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800">{headline}</h3>
        <p className="mt-2 text-gray-600">{blurb}</p>
        <span className="text-b3_custom mt-4 inline-block rounded bg-mainDark px-2.5 py-0.5 text-white">
          {filters}
        </span>
      </div>
    </div>
  );
};

export default CaseStudyCard;
