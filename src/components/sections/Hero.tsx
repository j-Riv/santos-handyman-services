import React from 'react';

const headline = 'What Can we do for you?';
const subtext =
  'Regardless of the size of your home, maintaining it can be a struggle. Call us today!';

export function Hero() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-[url('/hero.jpg')]">
      <div className="flex justify-center items-center min-h-[350px] md:min-h-[700px] bg-white/[.4]">
        <div className="hero__inner">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24 hero__divider">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center uppercase text-black font-black leading-7 md:leading-10 mb-10">
                {headline}
              </h1>
              <div className="text-center"></div>
              <p className="mt-2 lg:w-10/12 text-black font-normal text-center text-sm sm:text-lg">
                {subtext}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-blue-700 py-2 sm:py-4 text-sm">
                Services
              </button>
              <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-transparent transition duration-150 ease-in-out hover:bg-white hover:border-blue-600 lg:text-xl lg:font-bold  hover:text-blue-600 rounded border border-blue-700 text-blue-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
