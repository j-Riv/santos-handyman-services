import React from 'react';
import {
  GiStoneBlock,
  GiBrickWall,
  GiHouse,
  GiAutoRepair,
} from 'react-icons/gi';
import { GoTools, GoPaintcan } from 'react-icons/go';
import { GiToolbox } from 'react-icons/gi';
import { VscExtensions } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

const services = [
  {
    name: 'Assembly',
    icon: GiStoneBlock,
  },
  {
    name: 'Drywall',
    icon: GiBrickWall,
  },
  {
    name: 'Exterior',
    icon: GiHouse,
  },
  {
    name: 'Installation',
    icon: GiToolbox,
  },
  {
    name: 'Maintenance',
    icon: GoTools,
  },
  {
    name: 'Painting',
    icon: GoPaintcan,
  },
  {
    name: 'Repair',
    icon: GiAutoRepair,
  },
  {
    name: 'Tile',
    icon: VscExtensions,
  },
];

// small projects, updates & remodels

function Card({ service }: { service: { name: string; icon: IconType } }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 m-4 border rounded-md drop-shadow-md md:flex-row hover:cursor-pointer hover:bg-slate-100">
      <div className="flex items-center justify-center flex-1 w-full py-4 rounded-t-md md:rounded-tl-md md:rounded-bl-md bg-slate-100">
        <service.icon
          className="h-[50px] w-[50px] flex-shrink-0 text-sky-700 fill-sky-700 stroke-sky-700"
          aria-hidden="true"
        />
      </div>
      <p className="flex items-center justify-center flex-1 my-4">
        {service.name}
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="my-10">
      <h2 className="my-4 text-2xl font-semibold text-center uppercase md:text-4xl xl:text-5xl">
        Services
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
}
