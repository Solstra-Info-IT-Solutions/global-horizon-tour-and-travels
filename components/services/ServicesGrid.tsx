"use client";

import {
  Car,
  Plane,
  TrainFront,
  BriefcaseBusiness,
  Palmtree,
  Map,
  Hotel,
  Users,
  Landmark,
  Camera,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Private Taxi",
    eyebrow: "Personal Mobility",
    description:
      "Comfortable and professionally managed transportation designed around your personal schedule and destination.",
    icon: Car,
    accent: "teal",
  },
  {
    number: "02",
    title: "Airport Transfers",
    eyebrow: "Seamless Arrivals",
    description:
      "Reliable airport pickups and drop-offs designed to make every journey smooth, punctual and stress-free.",
    icon: Plane,
    accent: "gold",
  },
  {
    number: "03",
    title: "Railway Transfers",
    eyebrow: "Connected Journeys",
    description:
      "Convenient transportation to and from railway stations with comfort and dependable travel assistance.",
    icon: TrainFront,
    accent: "teal",
  },
  {
    number: "04",
    title: "Corporate Travel",
    eyebrow: "Business Mobility",
    description:
      "Professional transportation solutions for executives, corporate teams, delegates and important events.",
    icon: BriefcaseBusiness,
    accent: "gold",
  },
  {
    number: "05",
    title: "Holiday Packages",
    eyebrow: "Beautiful Escapes",
    description:
      "Carefully planned holiday experiences that combine comfort, discovery and unforgettable destinations.",
    icon: Palmtree,
    accent: "gold",
  },
  {
    number: "06",
    title: "Customized Tours",
    eyebrow: "Travel Your Way",
    description:
      "Personalized travel itineraries created around your interests, preferred destinations and schedule.",
    icon: Map,
    accent: "teal",
  },
  {
    number: "07",
    title: "Hotel Reservations",
    eyebrow: "Comfortable Stays",
    description:
      "Assistance with selecting comfortable accommodation that perfectly fits your travel plans and preferences.",
    icon: Hotel,
    accent: "gold",
  },
  {
    number: "08",
    title: "Group & Family Tours",
    eyebrow: "Together We Travel",
    description:
      "Well-organized travel experiences designed for families, friends and groups travelling together.",
    icon: Users,
    accent: "teal",
  },
  {
    number: "09",
    title: "Pilgrimage Tours",
    eyebrow: "Meaningful Journeys",
    description:
      "Thoughtfully arranged spiritual journeys focused on comfort, convenience and peaceful travel.",
    icon: Landmark,
    accent: "gold",
  },
  {
    number: "10",
    title: "Sightseeing Tours",
    eyebrow: "Discover More",
    description:
      "Explore iconic landmarks, hidden gems and memorable destinations with comfortable local travel.",
    icon: Camera,
    accent: "teal",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-24 sm:py-28 lg:py-32">

      {/* Background */}
      <div className="pointer-events-none absolute -left-64 top-[20%] h-[600px] w-[600px] rounded-full border border-[#d9a737]/10" />

      <div className="pointer-events-none absolute -right-64 bottom-[10%] h-[700px] w-[700px] rounded-full border border-[#14596a]/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d9a737]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#14596a]">
              What We Offer
            </span>

            <span className="h-px w-10 bg-[#d9a737]" />
          </div>

          <h2 className="mt-6 font-serif text-[40px] font-bold leading-tight text-[#123f55] sm:text-5xl lg:text-[60px]">
            Travel Services For
            <span className="block italic font-medium text-[#d9a737]">
              Every Kind Of Journey.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#687276]">
            Whether you are travelling for business, leisure, family or
            exploration, our services are designed to make your journey
            easier from beginning to end.
          </p>

        </div>


        {/* Services */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;
            const isGold = service.accent === "gold";

            return (
              <article
                key={service.number}
                className="group relative min-h-[360px] overflow-hidden rounded-[32px] border border-[#dfd9ce] bg-[#fbfaf8] p-7 transition-all duration-500 sm:p-8 hover:-translate-y-2 hover:border-[#d9a737]/50 hover:bg-white hover:shadow-[0_30px_70px_rgba(18,63,85,0.12)]"
              >

                {/* Background Number */}
                <span
                  className={`pointer-events-none absolute right-4 top-[-10px] font-serif text-[110px] font-bold leading-none tracking-[-0.08em] ${
                    isGold
                      ? "text-[#d9a737]/[0.05]"
                      : "text-[#123f55]/[0.035]"
                  }`}
                >
                  {service.number}
                </span>


                {/* Icon */}
                <div
                  className={`relative flex h-[64px] w-[64px] items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 ${
                    isGold
                      ? "border-[#d9a737]/30 bg-[#fbf4e3] text-[#c99528]"
                      : "border-[#14596a]/20 bg-[#eaf3f4] text-[#14596a]"
                  }`}
                >

                  <div
                    className={`absolute inset-[5px] rounded-full border ${
                      isGold
                        ? "border-[#d9a737]/20"
                        : "border-[#14596a]/15"
                    }`}
                  />

                  <Icon
                    size={25}
                    strokeWidth={1.6}
                    className="relative z-10"
                  />

                </div>


                {/* Eyebrow */}
                <div className="mt-8 flex items-center gap-3">

                  <span
                    className={`h-px w-9 transition-all duration-500 group-hover:w-14 ${
                      isGold
                        ? "bg-[#d9a737]"
                        : "bg-[#14596a]"
                    }`}
                  />

                  <span
                    className={`text-[9px] font-bold uppercase tracking-[0.22em] ${
                      isGold
                        ? "text-[#b98a2c]"
                        : "text-[#14596a]"
                    }`}
                  >
                    {service.eyebrow}
                  </span>

                </div>


                {/* Title */}
                <h3 className="mt-6 font-serif text-[29px] font-bold leading-tight text-[#123f55]">
                  {service.title}
                </h3>


                {/* Description */}
                <p className="mt-4 max-w-[330px] text-[14px] leading-7 text-[#687276]">
                  {service.description}
                </p>


                {/* Bottom */}
                <div className="absolute bottom-0 left-7 right-7 sm:left-8 sm:right-8">

                  <div className="h-px bg-[#ded8cd]" />

                  <div className="flex items-center justify-between py-5">

                    <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#8a9496]">
                      Global Horizon
                    </span>

                    <span
                      className={`h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150 ${
                        isGold
                          ? "bg-[#d9a737]"
                          : "bg-[#14596a]"
                      }`}
                    />

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}