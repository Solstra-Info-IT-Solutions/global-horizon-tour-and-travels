"use client";

import Link from "next/link";
import {
  Users,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  CarFront,
} from "lucide-react";

const vehicles = [
  {
    image: "/luxury.jpg",
    title: "Luxury SUV / XUV",
    capacity: "6–7 Guests",
    bags: "4 Bags",
    badge: "Most Popular",
    description:
      "A refined and spacious choice for families, executives and premium road journeys.",
    features: [
      "Spacious legroom & premium upholstery",
      "Climate control & ambient comfort",
      "Ideal for family trips & corporate groups",
    ],
  },
  {
    image: "/sedan.jpg",
    title: "Premium Sedan",
    capacity: "4 Guests",
    bags: "3 Bags",
    description:
      "Comfortable, elegant and perfectly suited for airport transfers and private journeys.",
    features: [
      "Smooth ride for city or highway",
      "Excellent boot space for luggage",
      "Perfect for couples or solo travelers",
    ],
  },
  {
    image: "/tempo.jpg",
    title: "Tempo Traveller / Bus",
    capacity: "12–17 Guests",
    bags: "Large Capacity",
    description:
      "Designed for groups seeking comfort, convenience and seamless travel together.",
    features: [
      "Push-back seats & ample headroom",
      "Quality entertainment system",
      "Ideal for large groups & extended tours",
    ],
  },
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-[#faf9f5] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-[#e5b34d]/15" />

      <div className="pointer-events-none absolute right-[-180px] bottom-10 h-[450px] w-[450px] rounded-full bg-[#14596a]/[0.025] blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">

            <span className="h-[2px] w-10 bg-[#d9a737]" />

            <div className="flex items-center gap-2">

              <CarFront
                size={15}
                className="text-[#14596a]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#14596a] sm:text-[11px] sm:tracking-[2.5px]">
                Premium Transportation
              </span>

            </div>

            <span className="h-[2px] w-10 bg-[#d9a737]" />

          </div>

          {/* Heading */}

          <h2 className="mt-6 font-serif text-[36px] font-bold leading-[1.12] text-[#123f55] sm:text-[46px] lg:text-[52px]">

            Travel in

            <span className="italic text-[#d9a737]">
              {" "}Comfort
            </span>

          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#657176] sm:text-[16px]">
            Choose the perfect vehicle for your journey. From private luxury
            transfers to spacious group transportation, every ride is designed
            around comfort, reliability and convenience.
          </p>

        </div>

        {/* ================= FLEET CARDS ================= */}

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">

          {vehicles.map((vehicle, index) => (

            <article
              key={vehicle.title}
              className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#e7e1d7] bg-white shadow-[0_12px_30px_rgba(20,89,106,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(20,89,106,0.15)]"
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-[250px] overflow-hidden sm:h-[280px] lg:h-[300px]">

                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Cinematic Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#082f39]/70 via-transparent to-transparent opacity-80" />

                {/* Number */}

                <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-[11px] font-semibold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Popular Badge */}

                {vehicle.badge && (

                  <div className="absolute right-5 top-5">

                    <span className="rounded-full border border-white/20 bg-[#14596a]/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[1.5px] text-white shadow-lg backdrop-blur-md">

                      {vehicle.badge}

                    </span>

                  </div>

                )}

              </div>

              {/* ================= CONTENT ================= */}

              <div className="flex flex-1 flex-col px-6 pb-6 pt-7">

                {/* Title */}

                <h3 className="font-serif text-[26px] font-bold text-[#123f55] transition duration-300 group-hover:text-[#14596a]">
                  {vehicle.title}
                </h3>

                {/* Gold Divider */}

                <div className="mt-4 h-px w-12 bg-[#e5b34d] transition-all duration-500 group-hover:w-20" />

                {/* Description */}

                <p className="mt-5 text-[14px] leading-6 text-[#687276]">
                  {vehicle.description}
                </p>

                {/* ================= VEHICLE DETAILS ================= */}

                <div className="mt-6 grid grid-cols-2 gap-3 border-y border-[#e9e4dc] py-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f5f5] text-[#14596a]">

                      <Users size={17} />

                    </div>

                    <div>

                      <p className="text-[9px] font-semibold uppercase tracking-[1px] text-[#9aa1a3]">
                        Capacity
                      </p>

                      <p className="mt-1 text-[13px] font-medium text-[#123f55]">
                        {vehicle.capacity}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8f2e6] text-[#d9a737]">

                      <Briefcase size={16} />

                    </div>

                    <div>

                      <p className="text-[9px] font-semibold uppercase tracking-[1px] text-[#9aa1a3]">
                        Luggage
                      </p>

                      <p className="mt-1 text-[13px] font-medium text-[#123f55]">
                        {vehicle.bags}
                      </p>

                    </div>

                  </div>

                </div>

                {/* ================= FEATURES ================= */}

                <div className="mt-6 space-y-4 flex-1">

                  {vehicle.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle2
                        size={18}
                        strokeWidth={1.8}
                        className="mt-[2px] shrink-0 text-[#d9a737]"
                      />

                      <span className="text-[13px] leading-6 text-[#687276]">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                {/* ================= CTA ================= */}

                <Link
                  href="/transport-request-quote"
                  className="group/button mt-8 flex h-[52px] items-center justify-center gap-3 border border-[#14596a] text-[11px] font-bold uppercase tracking-[1.5px] text-[#14596a] transition duration-300 hover:bg-[#14596a] hover:text-white"
                >

                  Request a Quote

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                  />

                </Link>

              </div>

            </article>

          ))}

        </div>

        {/* ================= BOTTOM TEXT ================= */}

        <div className="mt-14 flex items-center justify-center gap-3 text-center text-[10px] uppercase tracking-[2px] text-[#8b9698] sm:text-[11px]">

          <span className="h-px w-10 bg-[#d9a737]/60" />

          Travel Beyond Ordinary

          <span className="h-px w-10 bg-[#d9a737]/60" />

        </div>

      </div>
    </section>
  );
}