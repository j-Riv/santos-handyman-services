import React from 'react';
import { GiHouse } from 'react-icons/gi';
import type { IconType } from 'react-icons';

export function Banner({
  title = 'Ready to start your project?',
  icon = GiHouse,
  content = 'Give us a call for a free consultation.',
  callToAction = 'Call us today!',
  callToActionLink = '',
}: {
  title?: string;
  icon?: IconType;
  content?: string;
  callToAction?: string;
  callToActionLink?: string;
}) {
  return (
    <section className="relative bg-slate-100 min-h-[300px] flex justify-content items-center">
      <div className="container mx-auto text-center">
        <h2 className="my-4 text-5xl font-semibold uppercase">{title}</h2>
        <div className="text-xl">{content}</div>
        <button className="px-4 py-2 mt-4 text-sm text-white transition duration-150 ease-in-out border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-sky-700 hover:bg-sky-800 lg:text-xl lg:font-bold sm:px-10 sm:py-4">
          {callToAction}
        </button>
      </div>
    </section>
  );
}
