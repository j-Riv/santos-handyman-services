/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  HomeModernIcon,
  LifebuoyIcon,
  PhoneIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  GiStoneBlock,
  GiBrickWall,
  GiHouse,
  GiAutoRepair,
} from 'react-icons/gi';
import { GoTools, GoPaintcan } from 'react-icons/go';
import { GiToolbox } from 'react-icons/gi';
import { VscExtensions } from 'react-icons/vsc';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import scrollTo from 'gatsby-plugin-smoothscroll';

const services = [
  {
    name: 'Assembly',
    description: 'Furniture Assembly, Bed Frames & More',
    href: '#',
    icon: GiStoneBlock,
  },
  {
    name: 'Drywall',
    description: 'Drywall Repair & Finishing',
    href: '#',
    icon: GiBrickWall,
  },
  {
    name: 'Exterior',
    description: 'Exterior home services: repair, install & clean',
    href: '#',
    icon: GiHouse,
  },
  {
    name: 'Installation',
    description: 'Flooring, Vanities, Cabinets, Doors & More',
    href: '#',
    icon: GiToolbox,
  },
  {
    name: 'Maintenance',
    description: 'Repair, replace, install...',
    href: '#',
    icon: GoTools,
  },
  {
    name: 'Painting',
    description: 'Paint, stain, spray & more',
    href: '#',
    icon: GoPaintcan,
  },
  {
    name: 'Repair',
    description: 'Toilets, Screen Doors, Drywall, Tile & More',
    href: '#',
    icon: GiAutoRepair,
  },
  {
    name: 'Tile',
    description: 'Installation & repair',
    href: '#',
    icon: VscExtensions,
  },
];
const callsToAction = [
  {
    name: 'Request Service',
    href: '',
    icon: HomeModernIcon,
    scrollTo: '#contact',
  },
  {
    name: 'Get a Quote',
    href: `tel:${process.env.GATSBY_PHONE}`,
    icon: PhoneIcon,
    scrollTo: '',
  },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Header({ path }: { path: string }) {
  return (
    <Popover className="relative z-10 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Santos Hanyman Services</span>
              <StaticImage
                className="h-[50px] md:h-[50px] w-auto"
                src="../../images/santos-handyman-services.svg"
                alt="Logo"
                placeholder="tracedSVG"
                objectFit="contain"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      {({ close }) => (
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                            {services.map((item) => (
                              <span
                                key={item.name}
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-sky-700"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </span>
                            ))}
                          </div>
                          <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                {item.href !== '' && item.scrollTo === '' ? (
                                  <a
                                    href={item.href}
                                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 w-6 h-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                ) : (
                                  <a
                                    href="#"
                                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md cursor-pointer hover:bg-gray-100"
                                    onClick={() => {
                                      close();
                                      scrollTo(item.scrollTo);
                                    }}
                                  >
                                    <item.icon
                                      className="flex-shrink-0 w-6 h-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link
              to="/why-hire-us"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Why Hire Us
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About Us
            </Link>
          </Popover.Group>
          <div className="items-center justify-end hidden lg:flex lg:flex-1 lg:w-0">
            {path === '/' ? (
              <span
                className="text-base font-medium text-gray-500 cursor-pointer whitespace-nowrap hover:text-gray-900"
                onClick={() => scrollTo('#contact')}
              >
                Request Service
              </span>
            ) : (
              <Link
                to="/#contact"
                className="text-base font-medium text-gray-500 cursor-pointer whitespace-nowrap hover:text-gray-900"
              >
                Request Service
              </Link>
            )}
            <a
              href={`tel:${process.env.GATSBY_PHONE}`}
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer whitespace-nowrap bg-sky-700 hover:bg-sky-800"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden"
        >
          {({ close }) => (
            <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link to="/">
                      <StaticImage
                        className="h-[50px] w-auto"
                        src="../../images/santos-handyman-services.svg"
                        alt="Logo"
                        placeholder="tracedSVG"
                        objectFit="contain"
                      />
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {services.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 w-6 h-6 text-blue-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    to="/why-hire-us"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={() => close()}
                  >
                    Why Hire Us
                  </Link>

                  <Link
                    to="/about"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={() => close()}
                  >
                    About Us
                  </Link>
                  {/* {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))} */}
                </div>
                <div>
                  {path === '/' ? (
                    <span
                      className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-700 hover:bg-sky-800"
                      onClick={() => {
                        close();
                        scrollTo('#contact');
                      }}
                    >
                      Request Service
                    </span>
                  ) : (
                    <Link
                      to="/#contact"
                      className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-700 hover:bg-sky-800"
                    >
                      Request Service
                    </Link>
                  )}
                  <a
                    href={`tel:${process.env.GATSBY_PHONE}`}
                    className="flex items-center justify-center w-full mt-6 text-base font-medium text-center text-gray-500"
                  >
                    Get A Quote
                  </a>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
