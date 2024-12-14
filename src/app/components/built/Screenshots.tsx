import React, { useState, useEffect } from 'react';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from 'react-icons/md';


interface Image {
  href: string;
  src: string;
  alt: string;
  title: string;
}

function Screenshots() {
  const [screenshotIndex, setScreenshotIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const images: Image[] = [
    {
      href: '/fundingPartners',
      src: './screenshots/FundingPartners.png',
      alt: 'Funding Partners',
      title: 'Funding Partners',
    },
    {
      href: '/waterfallPlatform',
      src: './screenshots/WaterfallPlatform.png',
      alt: 'Waterfall Platform',
      title: 'Waterfall Platform',
    },
    {
      href: '/ProjectDevs',
      src: './screenshots/ProjectDevs.png',
      alt: 'Project Developers',
      title: 'Project Developers',
    },
  ];

  const nextSlide = (): void => {
    setScreenshotIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (): void => {
    setScreenshotIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [screenshotIndex, isPlaying]);

  const toggleEnlargeImage = (image: Image): void => {
    setEnlargedImage(image.src); 
    setIsPlaying(false);
  };

  return (
    <div className="mx-auto flex h-48 w-full max-w-5xl flex-col space-y-4 md:h-[32rem]">
      <div className="flex h-full items-center justify-between ">
        <button
          onClick={prevSlide}
          className="h-24 rounded py-2 text-h3_custom text-mainDark hover:bg-secGray1 md:ml-24 md:text-h1_custom"
        >
          <MdOutlineArrowBackIos />
        </button>
        <div
          className="group flex h-full cursor-pointer items-center object-contain p-2"
          onClick={() => toggleEnlargeImage(images[screenshotIndex])}
        >
          <img
            src={images[screenshotIndex].src}
            alt={images[screenshotIndex].alt}
            className="mx-auto max-h-full w-auto object-contain"
          />
        </div>
        <button
          onClick={nextSlide}
          className="h-24 rounded py-2 text-h3_custom text-mainDark hover:bg-secGray1 md:mr-24 md:text-h1_custom"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
      {enlargedImage && (
        <div className="fixed inset-0 flex max-h-full flex-col items-center justify-center bg-black bg-opacity-75 p-4">
          <img
            src={enlargedImage}
            alt={`Enlarged view`}
            className="h-1/2 md:h-3/4 max-w-full"
          />
          <button
            className="my-2 mr-6 w-36 cursor-pointer rounded-lg bg-mainBlue px-2 py-4 text-b4_custom text-mainLight shadow-sm hover:bg-mainLight hover:text-mainBlue lg:px-4 lg:text-b3_custom "
            onClick={() => {
              setEnlargedImage(null);
              setIsPlaying(true);
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Screenshots;
