import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, MapPin } from "lucide-react";

export default function PlanTour() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] px-6 py-24 md:px-10 lg:px-20 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-[350px] w-[350px] rounded-full bg-[#125467]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-80px] h-[380px] w-[380px] rounded-full bg-[#e6b442]/[0.05] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          {/* Premium Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#e6b442]" />

            <p className="text-xs font-semibold tracking-[3px] text-[#125467]">
              PLAN YOUR PERFECT JOURNEY
            </p>
          </div>

          {/* Small Heading */}
          <div className="mt-6 flex items-center gap-3">
            <Sparkles size={18} className="text-[#e6b442]" />

            <p className="font-serif text-xl italic text-[#b9471e] md:text-2xl">
              Let&apos;s Go Together
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="mt-4 max-w-[600px] font-serif text-4xl font-bold leading-[1.15] text-[#123f55] md:text-5xl">
            Plan Your Next
            <br />

            <span className="italic text-[#b9471e]">
              Great Adventure.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-[590px] text-[16px] leading-8 text-gray-600">
            Every journey is more than simply travelling from one place to
            another. It is about discovering new destinations, spending
            meaningful time with the people you care about, and creating
            memories that stay with you long after the journey ends.
          </p>

          <p className="mt-5 max-w-[590px] text-[16px] leading-8 text-gray-600">
            From personalised tours and family vacations to private transport,
            airport transfers and unforgettable sightseeing experiences, we
            carefully design every journey around your needs.
          </p>

          {/* Premium Features */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#125467] text-[#e6b442]">
                <ShieldCheck size={20} />
              </div>

              <div>
                <p className="font-semibold text-[#123f55]">
                  Trusted Service
                </p>

                <p className="text-sm text-gray-500">
                  Safe & reliable journeys
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3e7c7] text-[#b9471e]">
                <MapPin size={20} />
              </div>

              <div>
                <p className="font-semibold text-[#123f55]">
                  Custom Tours
                </p>

                <p className="text-sm text-gray-500">
                  Designed around you
                </p>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/tours"
              className="group inline-flex h-[58px] items-center justify-center gap-3 bg-[#b9471e] px-8 text-sm font-semibold tracking-[1px] text-white shadow-lg shadow-[#b9471e]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#963714]"
            >
              EXPLORE OUR TOURS

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/enquiry"
              className="group inline-flex h-[58px] items-center justify-center gap-3 border border-[#125467]/20 bg-white px-8 text-sm font-semibold tracking-[1px] text-[#125467] transition duration-300 hover:border-[#125467] hover:bg-[#125467] hover:text-white"
            >
              PLAN A CUSTOM TRIP

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>

        {/* ================= RIGHT IMAGE COLLAGE ================= */}
        <div className="relative mx-auto w-full max-w-[520px]">

          {/* Decorative Border */}
          <div className="absolute -left-5 -top-5 h-32 w-32 border-l-2 border-t-2 border-[#e6b442]" />

          <div className="absolute -bottom-5 -right-5 h-32 w-32 border-b-2 border-r-2 border-[#125467]/30" />

          {/* Image Grid */}
          <div className="relative grid grid-cols-[1fr_135px] gap-7">

            {/* Main Images */}
            <div className="grid grid-rows-[135px_345px] gap-7">

              <div className="group overflow-hidden rounded-tl-[100px] shadow-lg">
                <img
                  src="/4.png"
                  alt="Tour experience"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="group overflow-hidden rounded-bl-[100px] shadow-lg">
                <img
                  src="/2.png"
                  alt="Travel journey"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

            </div>

            {/* Side Images */}
            <div className="grid grid-rows-[135px_345px] gap-7">

              <div className="group overflow-hidden rounded-tr-[60px] shadow-lg">
                <img
                  src="/1.png"
                  alt="Tour guide"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="group overflow-hidden rounded-br-[90px] shadow-lg">
                <img
                  src="/3.png"
                  alt="Travel memories"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

            </div>

          </div>

          {/* Floating Premium Badge */}
          <div className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-white/30 bg-[#125467] px-7 py-5 text-center text-white shadow-2xl md:block">

            <p className="font-serif text-2xl font-bold text-[#e6b442]">
              Your Journey
            </p>

            <p className="mt-1 whitespace-nowrap text-xs tracking-[2px] text-white/70">
              OUR RESPONSIBILITY
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}