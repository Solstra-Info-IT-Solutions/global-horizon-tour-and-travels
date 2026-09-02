"use client";

import {
  Car,
  Plane,
  TrainFront,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    title: "Private Taxi",
    number: "01",
    eyebrow: "Personalized Mobility",
    description:
      "Private, comfortable and professionally managed transportation designed around your schedule, destination and journey.",
    icon: Car,
    accent: "teal",
  },
  {
    title: "Airport Transfers",
    number: "02",
    eyebrow: "Seamless Arrivals",
    description:
      "Punctual airport pickups and drop-offs that ensure every journey begins and concludes with complete comfort and ease.",
    icon: Plane,
    accent: "gold",
  },
  {
    title: "Railway Transfers",
    number: "03",
    eyebrow: "Connected Journeys",
    description:
      "Reliable railway station transfers with thoughtful assistance, comfortable vehicles and a seamless travel experience.",
    icon: TrainFront,
    accent: "teal",
  },
  {
    title: "Corporate Travel",
    number: "04",
    eyebrow: "Business Mobility",
    description:
      "Professional transportation solutions for executives, delegates, corporate teams and important business occasions.",
    icon: BriefcaseBusiness,
    accent: "gold",
  },
];

export default function TransportServices() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-24 sm:py-28 lg:py-32 xl:py-36">

      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      {/* Soft Luxury Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#d9a737]/[0.025] blur-[150px]" />

      {/* Decorative Rings */}
      <div className="pointer-events-none absolute -left-[280px] top-[20%] h-[700px] w-[700px] rounded-full border border-[#d9a737]/10" />

      <div className="pointer-events-none absolute -right-[300px] bottom-[-200px] h-[750px] w-[750px] rounded-full border border-[#14596a]/10" />

      {/* Vertical Architecture Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#d9a737]/15 to-transparent" />

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#14596a]/10 to-transparent" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#d9a737]/15 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-16 max-w-4xl text-center sm:mb-20 lg:mb-24">

          {/* Eyebrow */}

          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d9a737]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#14596a] sm:text-[10px]">
              Our Transportation Services
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#d9a737]" />

          </div>


          {/* Heading */}

          <h2 className="mt-7 font-serif text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[#123f55] sm:text-[52px] lg:text-[64px]">

            Travel Beyond The

            <span className="block italic font-medium text-[#d9a737]">
              Ordinary.
            </span>

          </h2>


          {/* Description */}

          <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-7 text-[#687276] sm:text-[15px] sm:leading-8">

            From private journeys to corporate transportation, every experience
            is thoughtfully designed around comfort, reliability and effortless
            travel.

          </p>

        </div>


        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7 xl:grid-cols-4">

          {services.map((service) => {

            const Icon = service.icon;
            const isGold = service.accent === "gold";

            return (

              <article
                key={service.title}
                className="group relative min-h-[440px] overflow-hidden rounded-[30px] border border-[#ded8cd] bg-[#fbfaf8] p-7 transition-all duration-500 sm:p-8 hover:-translate-y-2 hover:border-[#d9a737]/50 hover:bg-white hover:shadow-[0_30px_80px_rgba(18,63,85,0.13)]"
              >

                {/* =========================================
                    CARD GLOW
                ========================================== */}

                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-[230px] w-[230px] rounded-full blur-[70px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                    isGold
                      ? "bg-[#d9a737]/10"
                      : "bg-[#14596a]/10"
                  }`}
                />


                {/* =========================================
                    BACKGROUND NUMBER
                ========================================== */}

                <div className="pointer-events-none absolute right-[-10px] top-[-10px] select-none">

                  <span
                    className={`font-serif text-[125px] font-bold leading-none tracking-[-0.08em] transition-all duration-500 ${
                      isGold
                        ? "text-[#d9a737]/[0.045] group-hover:text-[#d9a737]/[0.08]"
                        : "text-[#123f55]/[0.035] group-hover:text-[#14596a]/[0.07]"
                    }`}
                  >
                    {service.number}
                  </span>

                </div>


                {/* =========================================
                    TOP ICON AREA
                ========================================== */}

                <div className="relative z-10 flex items-center justify-between">

                  {/* Premium Icon */}

                  <div
                    className={`relative flex h-[66px] w-[66px] items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      isGold
                        ? "border-[#d9a737]/35 bg-gradient-to-br from-[#fffaf0] to-[#f8edd3] text-[#c99528]"
                        : "border-[#14596a]/25 bg-gradient-to-br from-[#f4fbfc] to-[#e5f1f3] text-[#14596a]"
                    }`}
                  >

                    {/* Double Ring */}

                    <div
                      className={`absolute inset-[5px] rounded-full border ${
                        isGold
                          ? "border-[#d9a737]/20"
                          : "border-[#14596a]/15"
                      }`}
                    />

                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="relative z-10"
                    />

                  </div>


                  {/* Number */}

                  <span
                    className={`rounded-full border px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] ${
                      isGold
                        ? "border-[#d9a737]/20 text-[#b98a2c]"
                        : "border-[#14596a]/15 text-[#14596a]"
                    }`}
                  >
                    {service.number}
                  </span>

                </div>


                {/* =========================================
                    EYEBROW
                ========================================== */}

                <div className="relative z-10 mt-10 flex items-center gap-3">

                  <span
                    className={`h-px w-9 transition-all duration-500 group-hover:w-14 ${
                      isGold
                        ? "bg-[#d9a737]"
                        : "bg-[#14596a]"
                    }`}
                  />

                  <span
                    className={`text-[8px] font-bold uppercase tracking-[0.25em] ${
                      isGold
                        ? "text-[#b98a2c]"
                        : "text-[#14596a]"
                    }`}
                  >
                    {service.eyebrow}
                  </span>

                </div>


                {/* =========================================
                    TITLE
                ========================================== */}

                <h3 className="relative z-10 mt-7 min-h-[65px] font-serif text-[29px] font-bold leading-[1.08] tracking-[-0.02em] text-[#123f55]">

                  {service.title}

                </h3>


                {/* =========================================
                    DESCRIPTION
                ========================================== */}

                <p className="relative z-10 mt-5 text-[14px] leading-7 text-[#687276]">

                  {service.description}

                </p>


                {/* =========================================
                    BOTTOM AREA
                ========================================== */}

                <div className="absolute bottom-0 left-7 right-7 sm:left-8 sm:right-8">

                  {/* Divider */}

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d8d1c5] to-transparent" />


                  <div className="flex items-center justify-between py-6">

                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#8a9496]">

                      Global Horizon

                    </span>


                    {/* Premium Dot */}

                    <div className="flex items-center gap-2">

                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-500 group-hover:scale-[1.8] ${
                          isGold
                            ? "bg-[#d9a737]"
                            : "bg-[#14596a]"
                        }`}
                      />

                      <span
                        className={`h-[5px] w-[5px] rounded-full opacity-40 ${
                          isGold
                            ? "bg-[#d9a737]"
                            : "bg-[#14596a]"
                        }`}
                      />

                    </div>

                  </div>

                </div>


                {/* =========================================
                    BOTTOM ACCENT
                ========================================== */}

                <div
                  className={`absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full transition-all duration-500 group-hover:w-[65%] ${
                    isGold
                      ? "bg-[#d9a737]"
                      : "bg-[#14596a]"
                  }`}
                />

              </article>

            );

          })}

        </div>


        {/* =====================================================
            PREMIUM SIGNATURE
        ====================================================== */}

        <div className="mt-16 flex justify-center sm:mt-20">

          <div className="flex items-center gap-4">

            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#d9a737]/70" />

            <p className="text-center text-[8px] font-bold uppercase tracking-[0.32em] text-[#8a9496] sm:text-[9px]">

              Comfort • Reliability • Professionalism

            </p>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#d9a737]/70" />

          </div>

        </div>

      </div>
    </section>
  );
}