"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Landmark,
  Sparkles,
} from "lucide-react";

interface HeritageSite {
  id: string;
  title: string;
  badge?: string;
  description: string;
  image: string;
  link: string;
}

const heritageSites: HeritageSite[] = [
  {
    id: "ajanta",
    title: "Ajanta Caves",
    badge: "UNESCO Heritage",
    description:
      "Ancient Buddhist rock-cut monuments dating from the 2nd century BCE, featuring extraordinary art and timeless craftsmanship.",
    image: "/destinations/ajanta1.png",
    link: "#ajanta",
  },
  {
    id: "ellora",
    title: "Ellora Caves",
    badge: "UNESCO Heritage",
    description:
      "A monumental complex of Buddhist, Hindu and Jain cave temples showcasing India's remarkable architectural legacy.",
    image: "/destinations/2.jpg",
    link: "#ellora",
  },
  {
    id: "daulatabad",
    title: "Daulatabad Fort",
    badge: "Historic Landmark",
    description:
      "An extraordinary medieval hill fortress renowned for its ingenious defensive architecture and commanding presence.",
    image: "/destinations/3.jpg",
    link: "#daulatabad",
  },
  {
    id: "bibi",
    title: "Bibi Ka Maqbara",
    badge: "Mughal Heritage",
    description:
      "A magnificent 17th-century mausoleum celebrated for its elegant Mughal architecture and timeless beauty.",
    image: "/destinations/4.png",
    link: "#bibi",
  },
];

export default function HeritageWondersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#faf9f5] py-20 sm:py-24 lg:py-28">
      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-[#e5b34d]/15" />

      <div className="pointer-events-none absolute right-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-[#14596a]/[0.025] blur-3xl" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20">

        {/* ================= HEADER ================= */}

        <div className="mb-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:mb-16">

          {/* LEFT CONTENT */}

          <div className="max-w-2xl">

            {/* Eyebrow */}

            <div className="flex items-center gap-4">

              <span className="h-[2px] w-10 bg-[#d9a737]" />

              <div className="flex items-center gap-2">

                <Landmark
                  size={15}
                  className="text-[#14596a]"
                />

                <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#14596a] sm:text-[11px] sm:tracking-[2.5px]">
                  Maharashtra Heritage
                </span>

              </div>

            </div>

            {/* Heading */}

            <h2 className="mt-6 font-serif text-[36px] font-bold leading-[1.1] text-[#123f55] sm:text-[46px] lg:text-[52px]">

              Heritage

              <span className="italic text-[#d9a737]">
                {" "}Wonders
              </span>

            </h2>

            {/* Description */}

            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#657176] sm:text-[16px]">

              Step back in time through magnificent rock-cut caves, imposing
              forts and architectural marvels that reveal the extraordinary
              history and cultural heritage of Maharashtra.

            </p>

          </div>

          {/* ================= NAVIGATION ================= */}

          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous heritage wonder"
              className="group flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#14596a]/20 bg-white text-[#14596a] shadow-[0_8px_20px_rgba(20,89,106,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#14596a] hover:bg-[#14596a] hover:text-white"
            >
              <ChevronLeft
                size={21}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>

            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next heritage wonder"
              className="group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#14596a] text-white shadow-[0_12px_25px_rgba(20,89,106,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#0f4654] hover:shadow-[0_18px_35px_rgba(20,89,106,0.30)]"
            >
              <ChevronRight
                size={21}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>

          </div>

        </div>

        {/* ================= CAROUSEL ================= */}

        <div
          ref={scrollContainerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8 pt-2 sm:gap-6 lg:gap-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >

          {heritageSites.map((site, index) => (

            <article
              key={site.id}
              className="group relative flex w-[290px] shrink-0 snap-start flex-col overflow-hidden rounded-[22px] border border-[#e7e1d7] bg-white shadow-[0_12px_30px_rgba(20,89,106,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(20,89,106,0.15)] sm:w-[320px] md:w-[340px] xl:w-[360px]"
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-[320px] overflow-hidden sm:h-[340px] xl:h-[360px]">

                <img
                  src={site.image}
                  alt={site.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Cinematic Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#082f39]/75 via-transparent to-transparent opacity-80" />

                {/* Number */}

                <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-[11px] font-semibold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Badge */}

                {site.badge && (
                  <div className="absolute left-5 top-5">

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#14596a]/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[1px] text-white shadow-lg backdrop-blur-md">

                      <Sparkles
                        size={12}
                        className="text-[#e5b34d]"
                      />

                      {site.badge}

                    </span>

                  </div>
                )}

              </div>

              {/* ================= CONTENT ================= */}

              <div className="flex flex-1 flex-col px-6 pb-6 pt-7">

                <h3 className="font-serif text-[23px] font-bold text-[#123f55] transition-colors duration-300 group-hover:text-[#14596a]">
                  {site.title}
                </h3>

                {/* Gold Line */}

                <div className="mt-4 h-px w-12 bg-[#e5b34d] transition-all duration-500 group-hover:w-20" />

                {/* Description */}

                <p className="mt-5 flex-1 text-[14px] leading-6 text-[#687276]">
                  {site.description}
                </p>

                {/* Explore */}

                <Link
                  href={site.link}
                  className="group/link mt-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[1.5px] text-[#14596a]"
                >

                  <span className="transition-colors duration-300 group-hover/link:text-[#b04328]">
                    Explore Destination
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#14596a]/20 transition duration-300 group-hover/link:border-[#b04328] group-hover/link:bg-[#b04328] group-hover/link:text-white">

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />

                  </span>

                </Link>

              </div>

            </article>

          ))}

        </div>

        {/* ================= BOTTOM HINT ================= */}

        <div className="mt-2 flex items-center justify-center gap-3 text-center text-[10px] uppercase tracking-[2px] text-[#8b9698] sm:text-[11px]">

          <span className="h-px w-8 bg-[#d9a737]/60 sm:w-10" />

          Discover Maharashtra

          <span className="h-px w-8 bg-[#d9a737]/60 sm:w-10" />

        </div>

      </div>

    </section>
  );
}