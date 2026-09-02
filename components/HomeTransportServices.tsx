"use client";

import Link from "next/link";
import {
  Car,
  Plane,
  TrainFront,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Private Taxi",
    icon: Car,
    description: "Comfortable private transportation for your journey.",
  },
  {
    title: "Airport Transfers",
    icon: Plane,
    description: "Reliable pickups and drop-offs with complete comfort.",
  },
  {
    title: "Railway Transfers",
    icon: TrainFront,
    description: "Seamless station transfers whenever you need them.",
  },
  {
    title: "Corporate Travel",
    icon: BriefcaseBusiness,
    description: "Professional mobility solutions for businesses.",
  },
];

export default function HomeTransportServices() {
  return (
    <section className="bg-[#f7f5f1] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a737]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#14596a]">
                Travel With Comfort
              </span>
            </div>

            <h2 className="mt-6 font-serif text-[42px] font-bold leading-[1.1] text-[#123f55] sm:text-5xl">
              Transportation
              <span className="block italic font-medium text-[#d9a737]">
                Made Effortless.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-[14px] leading-7 text-[#687276]">
              Whether it is an airport transfer, private journey or corporate
              travel, we provide transportation designed around reliability
              and comfort.
            </p>

            <Link
              href="/transport"
              className="group mt-8 inline-flex items-center gap-3 bg-[#123f55] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#d9a737]"
            >
              Explore Transport

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* RIGHT */}

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href="/transport"
                  key={service.title}
                  className="group border border-[#ded8ce] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#d9a737]/50 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf3f4] text-[#14596a] transition-all group-hover:bg-[#123f55] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-6 font-serif text-[22px] font-bold text-[#123f55]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-[#687276]">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}