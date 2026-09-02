"use client";

import Link from "next/link";
import {
  Compass,
  MapPinned,
  Car,
  Plane,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Tour Packages",
    eyebrow: "Curated Experiences",
    description:
      "Carefully designed travel experiences that bring together beautiful destinations, comfort and memorable moments.",
    icon: Compass,
    href: "/tour-packages",
    accent: "gold",
  },
  {
    number: "02",
    title: "Custom Travel",
    eyebrow: "Made For You",
    description:
      "Personalised journeys designed around your destination preferences, travel style, schedule and expectations.",
    icon: MapPinned,
    href: "/enquiry",
    accent: "teal",
  },
  {
    number: "03",
    title: "Transportation",
    eyebrow: "Travel With Comfort",
    description:
      "Reliable private transportation, airport transfers and professional travel solutions for every journey.",
    icon: Car,
    href: "/transport",
    accent: "teal",
  },
  {
    number: "04",
    title: "Travel Assistance",
    eyebrow: "Always Supported",
    description:
      "Professional assistance and thoughtful planning to make your travel experience smooth from start to finish.",
    icon: Plane,
    href: "/services",
    accent: "gold",
  },
];

export default function HomeServices() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-20 sm:py-24 lg:py-28 xl:py-32">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#d9a737]/15 to-transparent" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#14596a]/10 to-transparent" />

        <div className="absolute -left-52 top-1/3 h-[500px] w-[500px] rounded-full border border-[#d9a737]/10" />

        <div className="absolute -right-52 bottom-[-180px] h-[600px] w-[600px] rounded-full border border-[#14596a]/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADER */}

        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#d9a737] sm:w-12" />

            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#14596a] sm:text-[10px]">
              What We Offer
            </span>

            <span className="h-px w-8 bg-[#d9a737] sm:w-12" />
          </div>

          <h2 className="mt-6 font-serif text-[38px] font-bold leading-[1.1] tracking-[-0.02em] text-[#123f55] sm:text-5xl lg:text-[58px]">
            Every Journey.
            <span className="italic font-medium text-[#d9a737]">
              {" "}
              Thoughtfully Planned.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-[#687276] sm:text-[15px] sm:leading-8">
            From unforgettable holidays to reliable transportation, our
            services are designed to make every part of your journey easier,
            more comfortable and more memorable.
          </p>
        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isGold = service.accent === "gold";

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex min-h-[390px] flex-col overflow-hidden border border-[#d9d4ca] bg-[#fbfaf8] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#d9a737]/50 hover:bg-white hover:shadow-[0_24px_60px_rgba(18,63,85,0.10)] sm:p-7"
              >
                <span className="pointer-events-none absolute right-5 top-2 font-serif text-[82px] font-bold leading-none tracking-[-0.06em] text-[#123f55]/[0.035]">
                  {service.number}
                </span>

                <div
                  className={`relative flex h-[60px] w-[60px] items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 ${
                    isGold
                      ? "border-[#d9a737]/30 bg-[#fbf4e3] text-[#c99528]"
                      : "border-[#14596a]/20 bg-[#eaf3f4] text-[#14596a]"
                  }`}
                >
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <span
                    className={`h-px w-8 ${
                      isGold ? "bg-[#d9a737]" : "bg-[#14596a]"
                    }`}
                  />

                  <span
                    className={`text-[8px] font-bold uppercase tracking-[0.24em] ${
                      isGold ? "text-[#b98a2c]" : "text-[#14596a]"
                    }`}
                  >
                    {service.eyebrow}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-[28px] font-bold leading-[1.1] text-[#123f55]">
                  {service.title}
                </h3>

                <p className="mt-5 text-[13px] leading-7 text-[#687276]">
                  {service.description}
                </p>

                <div className="flex-grow" />

                <div className="mt-8 flex items-center justify-between border-t border-[#d9d4ca]/80 pt-5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#123f55]">
                    Explore Service
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={`transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                      isGold ? "text-[#d9a737]" : "text-[#14596a]"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 border border-[#123f55]/20 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#123f55] transition-all duration-300 hover:border-[#d9a737] hover:bg-[#d9a737] hover:text-white"
          >
            Explore All Services

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}