import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

const headline = 'What Can we do for you?';
const subtext =
  'Regardless of the size of your home, maintaining it can be a struggle. Call us today!';

export function Hero() {
  return (
    <div className="relative min-h-[350px] md:min-h-[700px]">
      <StaticImage
        className="!absolute w-full h-full"
        src="../../images/hero.jpg"
        alt="Logo"
        placeholder="tracedSVG"
        objectFit="cover"
        objectPosition="50% 50%"
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center min-h-[350px] md:min-h-[700px] bg-white/[.4]">
        <div className="hero__inner">
          <div className="container flex flex-col items-center py-12 mx-auto sm:py-24 hero__divider">
            <div className="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
              <h2 className="mb-10 text-2xl font-semibold leading-7 text-center uppercase sm:text-3xl md:text-4xl xl:text-5xl md:leading-10">
                {headline}
              </h2>
              <div className="text-center"></div>
              <p className="mt-2 text-sm font-normal text-center text-black lg:w-10/12 sm:text-lg">
                {subtext}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => scrollTo('#services')}
                className="px-4 py-2 text-sm text-white transition duration-150 ease-in-out border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-sky-700 hover:bg-sky-800 lg:text-xl lg:font-bold sm:px-10 sm:py-4"
              >
                Services
              </button>
              <a
                href={`tel:${process.env.GATSBY_PHONE}`}
                className="block px-4 py-2 mx-auto ml-4 text-sm transition duration-150 ease-in-out bg-transparent border border-blue-700 rounded w-max focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 hover:bg-white hover:border-sky-700 lg:text-xl lg:font-bold hover:text-sky-700 text-sky-700 sm:px-10 sm:py-4"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
