import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

const cities = [
  'Aliso Viejo',
  'Anaheim',
  'Brea',
  'Buena Park',
  'Costa Mesa',
  'Cypress',
  'Dana Point',
  'Fountain Valley',
  'Fullerton',
  'Garden Grove',
  'Huntington Beach',
  'Irvine',
  'La Habra',
  'La Palma',
  'Laguna Beach',
  'Laguna Hills',
  'Laguna Niguel',
  'Laguna Woods',
  'Lake Forest',
  'Los Alamitos',
  'Mission Viejo',
  'Newport Beach',
  'Orange',
  'Placent',
  'Rancho Santa Margarita',
  'San Clemente',
  'San Juan Capistrano',
  'Santa Ana',
  'Seal Beach',
  'Stanton',
  'Tustin',
  'Villa Park',
  'Westminster',
  'Yorba Linda',
];

export function TwoColumns({
  title = 'Areas We Service',
  content = '',
  callToAction = 'Request Service',
  callToActionLink = '',
}: {
  title?: string;
  content?: string;
  callToAction?: string;
  callToActionLink?: string;
}) {
  return (
    <div className="w-full">
      <div className="flex bg-white lg:h-[600px] flex-col-reverse lg:flex-row">
        <div className="flex items-center text-left md:px-12 lg:w-1/2">
          <div className="max-w-[570px] ml-0 md:ml-auto">
            <div className="m-4">
              <h2 className="text-3xl font-semibold md:text-4xl uppercase text-center md:text-left">
                Build Your <span className="text-sky-700">Idea</span>
              </h2>
              <p className="mt-2 text-sm  md:text-base">
                We provide our handyman services to all Orange County. We take
                pride in what we do. We're available for all your handyman
                needs.
              </p>
              <p className="mt-2 text-sm md:text-base">
                Areas we service include:
              </p>
              <div className="flex flex-wrap mt-2 text-sm md:text-base">
                {cities.map((city, i) => (
                  <span key={city} className="pr-2">
                    {city}
                    {i !== cities.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => scrollTo('#contact')}
              className="m-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700 bg-transparent transition duration-150 ease-in-out hover:bg-white hover:border-sky-800 lg:text-xl lg:font-bold  hover:text-sky-800 rounded border border-sky-700 text-sky-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              {callToAction}
            </button>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2 relative"
          style={{ clipPath: `polygon(10% 0, 100% 0%, 100% 100%, 0 100%)` }}
        >
          <StaticImage
            className="h-full w-full"
            src="../../images/handyman-square.jpg"
            alt="Handyman"
            placeholder="tracedSVG"
            objectFit="cover"
            objectPosition="50% 50%"
          />
          <div className="bg-white/[.4] absolute top-0 left-0 rigth-0 bottom-0 w-full h-full"></div>
        </div>
        <div className="flex lg:hidden h-[300px] relative">
          <StaticImage
            className="h-auto w-auto"
            src="../../images/handyman-square.jpg"
            alt="Handyman"
            placeholder="tracedSVG"
          />
          <div className="bg-white/[.4] absolute top-0 left-0 rigth-0 bottom-0 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}
