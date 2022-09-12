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

function Card({ service }: { service: { name: string; icon: IconType } }) {
  return (
    <div className="rounded-md border border-blue-600 flex flex-col gap-4 justify-center items-center p-4 hover:cursor-pointer hover:bg-slate-100">
      <service.icon
        className="flex-1 flex justify-center items-center h-[50px] w-[50px] flex-shrink-0 text-blue-600 fill-blue-600 stroke-blue-600"
        aria-hidden="true"
      />
      <p className="flex-1 flex justify-center items-center">{service.name}</p>
    </div>
  );
}

function CardV2({ service }: { service: { name: string; icon: IconType } }) {
  return (
    <div className="rounded-md border border-blue-300 flex flex-col md:flex-row gap-4 justify-center items-center m-4 hover:cursor-pointer hover:bg-slate-100">
      <div className="rounded-t-md md:rounded-tl-md md:rounded-bl-md bg-slate-100 flex-1 flex justify-center items-center py-4 w-full">
        <service.icon
          className=" h-[50px] w-[50px] flex-shrink-0 text-blue-600 fill-blue-600 stroke-blue-600"
          aria-hidden="true"
        />
      </div>
      <p className="flex-1 flex justify-center items-center my-4">
        {service.name}
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section className="my-4">
      <h2 className="text-center font-black uppercase text-5xl my-4">
        Services
      </h2>
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-4">
        {services.map((service) => (
          <Card service={service} />
        ))}
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <CardV2 service={service} />
        ))}
      </div>
    </section>
  );
}
