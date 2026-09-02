"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
} from "lucide-react";

const galleryImages = [
  {
    image: "/service-travel-assistance.jpg",
    alt: "Travel experience",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: "/beautiful-destination.png",
    alt: "Beautiful destination",
    className: "",
  },
  {
    image: "/journey-memories.png",
    alt: "Journey memories",
    className: "",
  },
  {
    image: "/travel-moments.png",
    alt: "Travel moments",
    className: "md:col-span-2",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          {/* CONTENT */}

          <div>
            <div className="flex items-center gap-3">
              <Camera size={14} className="text-[#d9a737]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#14596a]">
                Moments We Remember
              </span>
            </div>

            <h2 className="mt-6 font-serif text-[42px] font-bold leading-[1.1] text-[#123f55] sm:text-5xl">
              Memories Beyond
              <span className="block italic font-medium text-[#d9a737]">
                The Horizon.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-[14px] leading-7 text-[#687276]">
              Every journey tells a story. Explore a collection of destinations,
              experiences and unforgettable moments from our travels.
            </p>

            <Link
              href="/gallery"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#d9a737] pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#123f55]"
            >
              Explore Gallery

              <ArrowUpRight
                size={16}
                className="text-[#d9a737] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* GRID */}

          <div className="grid auto-rows-[170px] gap-4 md:grid-cols-3">
            {galleryImages.map((item) => (
              <div
                key={item.image}
                className={`group relative overflow-hidden ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#123f55]/0 transition-colors duration-500 group-hover:bg-[#123f55]/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}