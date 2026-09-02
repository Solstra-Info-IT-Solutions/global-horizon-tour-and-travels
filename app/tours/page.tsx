"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tours = [
  {
    number: "01",
    title: "Family Holidays",
    category: "Curated Experiences",
    description:
      "Experience the joy of discovery with meticulously crafted journeys designed to celebrate family time. From multi-generational heritage explorations to engaging activities for all ages, we ensure every detail is handled so you can focus on creating memories that last a lifetime.",
    image: "/tours/family.jpg",
    reverse: false,
  },
  {
    number: "02",
    title: "Weekend Getaways",
    category: "Short Escapes",
    description:
      "Rejuvenating short escapes designed for those seeking a meaningful pause from the everyday. Our curated weekend itineraries blend relaxation with light exploration, ensuring you return refreshed and inspired.",
    image: "/tours/weekend.jpg",
    reverse: true,
  },
  {
    number: "03",
    title: "Group Tours",
    category: "Shared Journeys",
    description:
      "Experience the synergy of collective discovery with our expertly coordinated group travel solutions. Whether you’re traveling with extended family, social clubs, or community organizations, we handle every logistical nuance to ensure a seamless and enriching journey.",
    image: "/tours/group.jpg",
    reverse: false,
  },
  {
    number: "04",
    title: "Pilgrimage Tours",
    category: "Sacred Journeys",
    description:
      "Embark on a soulful journey with our meticulously planned pilgrimage tours. We provide comfortable transportation and seamless logistics for spiritual travel, allowing you to focus entirely on devotion and inner peace.",
    image: "/tours/pilgrimage.jpg",
    reverse: true,
  },
  {
    number: "05",
    title: "Custom Holidays",
    category: "Bespoke Travel",
    description:
      "Your destination. Your schedule. Your singular experience. Whether you’re seeking a hidden cultural gem or a seamless luxury escape, our travel specialists craft a bespoke itinerary tailored entirely to your personal style and desires.",
    image: "/tours/custom.jpg",
    reverse: false,
  },
];

export default function ToursPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#faf9f5]">

        {/* =====================================================
            PREMIUM HERO
        ====================================================== */}

        <section className="relative isolate min-h-[480px] overflow-hidden sm:min-h-[540px] lg:min-h-[620px]">

          {/* Background Image */}
          <Image
            src="/tours/tours-hero.jpg"
            alt="Luxury travel experiences"
            fill
            priority
            className="object-cover"
          />

          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-[#082f39]/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#082f39]/95 via-[#082f39]/65 to-[#082f39]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061f27]/70 via-transparent to-transparent" />

          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-20 top-32 h-[400px] w-[400px] rounded-full border border-[#e5b34d]/20" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex min-h-[480px] w-full max-w-[1500px] items-center px-6 py-24 sm:px-10 lg:min-h-[620px] lg:px-16 xl:px-24">

            <div className="max-w-3xl">

              {/* Eyebrow */}
              <div className="flex items-center gap-4">

                <span className="h-[2px] w-12 bg-[#e5b34d]" />

                <div className="flex items-center gap-2">

                  <Compass
                    size={16}
                    className="text-[#e5b34d]"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#f2d48c] sm:text-[11px]">
                    Curated Travel Experiences
                  </span>

                </div>

              </div>

              {/* Heading */}
              <h1 className="mt-7 font-serif text-[46px] font-bold leading-[1.05] text-white sm:text-[60px] md:text-[72px] lg:text-[86px]">

                Journeys Made

                <span className="block italic text-[#e5b34d]">
                  Extraordinary.
                </span>

              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">

                Discover thoughtfully designed travel experiences crafted
                around the moments that matter. From family holidays and
                weekend escapes to spiritual journeys and completely bespoke
                adventures.

              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/enquiry"
                  className="group inline-flex items-center justify-center gap-3 bg-[#d9a737] px-8 py-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#123f55] transition duration-300 hover:bg-[#f0c65a]"
                >
                  Plan Your Journey

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>

                {/*<Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center border border-white/30 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[1.8px] text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-[#123f55]"
                >
                  Plan Your Journey
                </Link>*/}

              </div>

            </div>

          </div>

          {/* Bottom Detail */}
          <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-4 text-white/50 md:flex">

            <span className="h-px w-16 bg-[#e5b34d]/50" />

            <span className="text-[9px] uppercase tracking-[3px]">
              Travel Beyond Ordinary
            </span>

            <span className="h-px w-16 bg-[#e5b34d]/50" />

          </div>

        </section>


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="relative bg-[#faf9f5] py-20 lg:py-28">

          <div className="pointer-events-none absolute -left-52 top-10 h-[500px] w-[500px] rounded-full border border-[#d9a737]/10" />

          <div className="relative mx-auto w-full max-w-[1200px] px-6 text-center sm:px-10 lg:px-16">

            <div className="flex items-center justify-center gap-4">

              <span className="h-px w-10 bg-[#d9a737]" />

              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#14596a]">
                Travel Your Way
              </span>

              <span className="h-px w-10 bg-[#d9a737]" />

            </div>

            <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#123f55] sm:text-5xl">

              Every Journey Has

              <span className="italic text-[#d9a737]">
                {" "}Its Own Story.
              </span>

            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-7 text-[#687276] sm:text-[16px]">

              Our tours are designed with flexibility at their heart. Every
              journey can be customised according to your preferred dates,
              group size, duration, accommodation, transportation and
              experiences.

            </p>

          </div>

        </section>


        {/* =====================================================
            TOUR EXPERIENCES
        ====================================================== */}

        <section
          id="experiences"
          className="relative bg-[#f5f2ec] py-20 sm:py-24 lg:py-32"
        >

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute left-0 top-[15%] h-[300px] w-[2px] bg-[#d9a737]/40" />

          <div className="pointer-events-none absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-[#14596a]/[0.025] blur-3xl" />


          <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-24">

            <div className="space-y-24 md:space-y-32 lg:space-y-40">

              {tours.map((tour) => (

                <article
                  key={tour.title}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-28 ${
                    tour.reverse
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  {/* ================= IMAGE ================= */}

                  <div className="relative">

                    {/* Decorative Frame */}
                    <div
                      className={`absolute -inset-3 rounded-[30px] border border-[#d9a737]/20 ${
                        tour.reverse
                          ? "-rotate-2"
                          : "rotate-2"
                      }`}
                    />

                    <div className="group relative overflow-hidden rounded-[22px] bg-[#123f55] shadow-[0_25px_70px_rgba(20,89,106,0.18)]">

                      <Image
                        src={tour.image}
                        alt={tour.title}
                        width={1000}
                        height={700}
                        priority={tour.number === "01"}
                        className="h-[330px] w-full object-cover transition duration-700 ease-out group-hover:scale-110 sm:h-[430px] lg:h-[520px]"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#082f39]/70 via-transparent to-transparent opacity-80" />

                      {/* Category Badge */}
                      <div className="absolute left-6 top-6">

                        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#123f55]/75 px-4 py-2 text-[9px] font-bold uppercase tracking-[1.5px] text-white backdrop-blur-md">

                          <Sparkles
                            size={12}
                            className="text-[#e5b34d]"
                          />

                          {tour.category}

                        </div>

                      </div>

                      {/* Number */}
                      <div className="absolute bottom-6 left-6">

                        <span className="font-serif text-[52px] font-bold leading-none text-white/90">
                          {tour.number}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* ================= CONTENT ================= */}

                  <div
                    className={`relative ${
                      tour.reverse
                        ? "lg:pr-10"
                        : "lg:pl-10"
                    }`}
                  >

                    {/* Large Background Number */}
                    <span className="pointer-events-none absolute -top-14 left-0 font-serif text-[150px] font-bold leading-none text-[#14596a]/[0.035]">
                      {tour.number}
                    </span>

                    <div className="relative">

                      {/* Label */}
                      <div className="flex items-center gap-4">

                        <span className="h-[2px] w-10 bg-[#d9a737]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#14596a]">
                          {tour.category}
                        </span>

                      </div>


                      {/* Title */}
                      <h2 className="mt-6 font-serif text-[38px] font-bold leading-[1.1] text-[#123f55] sm:text-[48px] lg:text-[56px]">

                        {tour.title}

                      </h2>


                      {/* Gold Divider */}
                      <div className="mt-7 h-[2px] w-14 bg-[#d9a737]" />


                      {/* Description */}
                      <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#687276] sm:text-[16px]">

                        {tour.description}

                      </p>


                      {/* CTA */}
                      {/*<div className="mt-9">

                        <Link
                          href="/contact"
                          className="group inline-flex items-center gap-4 border border-[#14596a] px-7 py-4 text-[10px] font-bold uppercase tracking-[1.8px] text-[#14596a] transition-all duration-300 hover:bg-[#14596a] hover:text-white hover:shadow-[0_15px_35px_rgba(20,89,106,0.2)]"
                        >

                          Explore Experience

                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1">

                            <ArrowUpRight size={14} />

                          </span>

                        </Link>

                      </div>*/}

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            PREMIUM BOTTOM CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#123f55] py-20 sm:py-24 lg:py-28">

          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full border border-[#e5b34d]/20" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">

            <div className="flex items-center justify-center gap-4">

              <span className="h-px w-10 bg-[#e5b34d]" />

              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#e5b34d]">
                Your Next Adventure
              </span>

              <span className="h-px w-10 bg-[#e5b34d]" />

            </div>

            <h2 className="mt-7 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[58px]">

              Let&apos;s Create Your

              <span className="block italic text-[#e5b34d]">
                Perfect Journey.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/65 sm:text-[16px]">

              Tell us where you want to go, and our travel specialists will
              help turn your ideas into a beautifully planned experience.

            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/enquiry"
                className="group inline-flex items-center justify-center gap-3 bg-[#d9a737] px-8 py-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#123f55] transition duration-300 hover:bg-[#f0c65a]"
              >

                Start Planning

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[1.8px] text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#123f55]"
              >

                Explore Our Services

                <ChevronRight size={15} />

              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}