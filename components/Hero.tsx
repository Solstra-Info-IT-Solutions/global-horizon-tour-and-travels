import {
  ArrowRight,
  MessageSquare,
  BadgeCheck,
  Car,
  Map,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate min-h-[760px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] hover:scale-105"
          style={{
            backgroundImage: "url('/Container.png')",
          }}
        />

        {/* PREMIUM OVERLAYS */}
        <div className="absolute inset-0 bg-[#071f28]/60" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#071f28]/45 to-[#071f28]/80" />

        {/* DECORATIVE GRADIENT */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#145a6b]/70 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[760px] items-center justify-center px-5 py-24 sm:px-6">
          <div className="mx-auto w-full max-w-5xl text-center text-white">
            
            {/* EXPERIENCE BADGE */}
            <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 shadow-2xl backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f3bd4e] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f3bd4e]" />
              </span>

              <Sparkles size={15} className="text-[#f3bd4e]" />

              <span className="font-serif text-[11px] font-bold tracking-[2.5px] text-white sm:text-xs">
                20+ YEARS OF TRAVEL EXPERIENCE
              </span>
            </div>

            {/* HEADING */}
            <h1 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Exceptional Journeys,
              <br />

              <span className="relative inline-block italic text-[#e5b64d]">
                Endless Horizons.
                <span className="absolute -bottom-2 left-1/2 h-px w-3/4 -translate-x-1/2 bg-[#e5b64d]/60" />
              </span>
            </h1>

            {/* PREMIUM DIVIDER */}
            <div className="mx-auto mt-10 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#f1bd4e]" />
              <span className="h-2 w-2 rotate-45 border border-[#f1bd4e]" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#f1bd4e]" />
            </div>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-7 text-white/80 sm:text-base md:text-[17px] md:leading-8">
              Discover India with comfort, confidence and convenience. At{" "}
              <span className="font-medium text-white">
                Global Horizons Tours & Travels
              </span>
              , we curate memorable journeys through carefully planned tours,
              comfortable transportation and personalised travel experiences.
            </p>

            {/* BUTTONS */}
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              
              {/* PLAN YOUR TRIP */}
              <a
                href="/enquiry"
                className="group relative flex h-[60px] min-w-[220px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#b9471e] px-8 font-serif text-[12px] font-bold tracking-[1.5px] text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="absolute inset-0 translate-y-full bg-[#963714] transition-transform duration-300 group-hover:translate-y-0" />

                <span className="relative z-10">
                  PLAN YOUR TRIP
                </span>

                <ArrowRight
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917770069004"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-[60px] min-w-[220px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 font-serif text-[12px] font-bold tracking-[1.5px] text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white hover:text-[#123f55]"
              >
                <MessageSquare
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                WHATSAPP US
              </a>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
          <span className="text-[9px] font-medium tracking-[3px] text-white/60">
            EXPLORE MORE
          </span>

          <div className="flex h-10 w-6 justify-center rounded-full border border-white/30 p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-[#f1bd4e]" />
          </div>
        </div>
      </section>

      {/* ================= FEATURE BAR ================= */}
      <section className="relative overflow-hidden bg-[#145a6b]">
        {/* SUBTLE BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white" />
          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border-[50px] border-white" />
        </div>

        <div className="relative mx-auto max-w-[1170px] px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3">

            {/* FEATURE 1 */}
            <div className="group flex items-center gap-5 border-b border-white/15 py-8 transition md:border-b-0 md:border-r md:pr-8">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#286b79] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <BadgeCheck
                  size={31}
                  strokeWidth={1.7}
                  className="text-[#f1bd4e]"
                />
              </div>

              <div>
                <p className="font-serif text-[17px] font-bold text-[#f1bd4e]">
                  20+ Years
                </p>

                <p className="mt-1.5 text-[11px] font-medium tracking-[1.5px] text-white/70">
                  HERITAGE EXPERIENCE
                </p>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="group flex items-center gap-5 border-b border-white/15 py-8 transition md:border-b-0 md:border-r md:px-8">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#286b79] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <Car
                  size={31}
                  strokeWidth={1.7}
                  className="text-[#f1bd4e]"
                />
              </div>

              <div>
                <p className="font-serif text-[17px] font-bold text-[#f1bd4e]">
                  Private Transport
                </p>

                <p className="mt-1.5 text-[11px] font-medium tracking-[1.5px] text-white/70">
                  LUXURY FLEET
                </p>
              </div>
            </div>

            {/* FEATURE 3 */}
            <div className="group flex items-center gap-5 py-8 transition md:pl-8">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#286b79] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <Map
                  size={31}
                  strokeWidth={1.7}
                  className="text-[#f1bd4e]"
                />
              </div>

              <div>
                <p className="font-serif text-[17px] font-bold text-[#f1bd4e]">
                  Custom Journeys
                </p>

                <p className="mt-1.5 text-[11px] font-medium tracking-[1.5px] text-white/70">
                  TAILORED ITINERARIES
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}