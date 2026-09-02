"use client";

import { useState } from "react";
import {
  ChevronDown,
  ShieldCheck,
  Car,
  MapPinned,
  BadgeCheck,
  Compass,
} from "lucide-react";

const features = [
  {
    title: "Comfortable Vehicles",
    description:
      "Travel in clean, comfortable and well-maintained vehicles designed to make every journey relaxing.",
    icon: Car,
    number: "01",
  },
  {
    title: "Professional Drivers",
    description:
      "Our experienced and professional drivers provide safe, reliable and courteous transportation.",
    icon: ShieldCheck,
    number: "02",
  },
  {
    title: "Customised Travel",
    description:
      "We create personalised travel experiences based on your destination, schedule and preferences.",
    icon: MapPinned,
    number: "03",
  },
  {
    title: "Transparent Service",
    description:
      "Clear pricing and honest communication ensure there are no surprises during your journey.",
    icon: BadgeCheck,
    number: "04",
  },
  {
    title: "Local Expertise",
    description:
      "Our local knowledge helps you discover authentic places, hidden gems and memorable experiences.",
    icon: Compass,
    number: "05",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#faf9f5] px-6 py-20 md:px-10 lg:px-20 lg:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-[#125467]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#e6b442]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">

          {/* Small Heading */}
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#e6b442]" />

            <span className="text-xs font-semibold tracking-[3px] text-[#125467]">
              WHY TRAVEL WITH US
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#123f55] md:text-5xl">
            More Than a Ride.
            <br />

            <span className="italic text-[#b9471e]">
              It&apos;s Your Journey.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-[16px] leading-7 text-gray-600">
            Every journey deserves comfort, reliability and thoughtful
            planning. We combine local expertise with personalised service to
            create travel experiences you can truly enjoy.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-[460px_1fr] lg:gap-16">

          {/* ================= IMAGE SIDE ================= */}
          <div className="relative">

            {/* Gold Border Decoration */}
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l-2 border-t-2 border-[#e6b442]" />

            <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(18,63,85,0.16)]">

              <img
                src="/Frame 33.png"
                alt="Premium travel experience"
                className="h-[400px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[570px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062f3b]/75 via-[#062f3b]/10 to-transparent" />

              {/* Experience Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e6b442] text-[#123f55]">
                    <Compass size={22} />
                  </div>

                  <div>
                    <p className="font-serif text-xl font-bold">
                      Travel With Confidence
                    </p>

                    <p className="mt-1 text-sm leading-5 text-white/80">
                      Thoughtfully planned journeys from start to finish.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-7 -right-4 hidden rounded-xl border border-[#125467]/10 bg-white px-6 py-5 shadow-xl md:block">

              <p className="font-serif text-3xl font-bold text-[#b9471e]">
                20+
              </p>

              <p className="mt-1 text-xs font-semibold tracking-[1.5px] text-[#125467]">
                YEARS EXPERIENCE
              </p>

            </div>

          </div>

          {/* ================= ACCORDION ================= */}
          <div className="flex flex-col gap-4">

            {features.map((feature, index) => {
              const isOpen = activeIndex === index;
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`group overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#125467]/30 bg-white shadow-[0_15px_35px_rgba(18,63,85,0.08)]"
                      : "border-[#125467]/10 bg-white/70 hover:border-[#125467]/25"
                  }`}
                >
                  {/* Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center gap-5 px-5 py-5 text-left md:px-7"
                    aria-expanded={isOpen}
                  >

                    {/* Number */}
                    <span
                      className={`font-serif text-sm font-bold ${
                        isOpen
                          ? "text-[#b9471e]"
                          : "text-[#125467]/40"
                      }`}
                    >
                      {feature.number}
                    </span>

                    {/* Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition ${
                        isOpen
                          ? "bg-[#125467] text-[#e6b442]"
                          : "bg-[#f2f0ea] text-[#125467]"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <span
                      className={`flex-1 font-serif text-lg font-bold transition ${
                        isOpen
                          ? "text-[#123f55]"
                          : "text-[#202020]"
                      }`}
                    >
                      {feature.title}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                        isOpen
                          ? "border-[#b9471e] bg-[#b9471e] text-white"
                          : "border-[#125467]/15 text-[#125467]"
                      }`}
                    >
                      <ChevronDown
                        size={18}
                        strokeWidth={2}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>

                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <div className="mx-7 border-t border-[#125467]/10 pb-6 pt-5 md:ml-[105px]">

                        <p className="max-w-xl text-[15px] leading-7 text-gray-600">
                          {feature.description}
                        </p>

                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="mt-20 border-t border-[#125467]/10 pt-10">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">

            <p className="max-w-3xl font-serif text-xl leading-8 text-[#123f55] md:text-2xl">
              We don&apos;t simply take you from one destination to another.
              We make sure every mile becomes part of your experience.
            </p>

            <div className="flex justify-start md:justify-end">

              <div className="border-l-2 border-[#e6b442] pl-5">

                <p className="text-2xl font-serif font-bold text-[#b9471e]">
                  20+ Years
                </p>

                <p className="mt-1 text-xs font-semibold tracking-[2px] text-[#125467]">
                  OF TRUSTED TRAVEL
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}