"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    title: "Mountain Adventures",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    title: "Beautiful Destinations",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    title: "Coastal Escapes",
  },
  {
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    title: "Travel Stories",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    title: "Journey Together",
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    title: "Explore More",
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] =
    useState<(typeof images)[0] | null>(null);

  return (
    <section className="bg-[#f7f5f1] py-20 sm:py-24 lg:py-28">

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        <div className="mb-14 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d9a737]">
            Travel Gallery
          </span>

          <h2 className="mt-4 font-serif text-[38px] font-bold text-[#123f55] sm:text-5xl">
            Every Journey Leaves A

            <span className="italic font-medium text-[#d9a737]">
              Memory.
            </span>
          </h2>
        </div>

        {/* Gallery */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-[26px] ${
                index === 0
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0
                    ? "h-[450px]"
                    : "h-[280px]"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0e4655]/75 via-transparent to-transparent opacity-80" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-left">
                <span className="font-serif text-[22px] font-bold text-white">
                  {image.title}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7ae3c] text-[#0e4655] transition-transform duration-300 group-hover:scale-110">
                  <ZoomIn size={18} />
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* LIGHTBOX */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071f26]/95 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -right-2 -top-12 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[85vh] rounded-[20px] object-contain"
            />

            <p className="mt-4 text-center font-serif text-xl text-white">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}