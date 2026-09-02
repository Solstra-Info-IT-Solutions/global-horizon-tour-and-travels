"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function LocalBaseSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] py-20 lg:py-28">
      
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#e8b84c]/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#14596a]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative lg:col-span-5">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[1px] w-10 bg-[#d9aa3f]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b88725]">
                OUR LOCAL BASE
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[38px] font-bold leading-[1.15] tracking-tight text-[#123f55] sm:text-5xl lg:text-[56px]">
              Chhatrapati
              <br />

              Sambhaji Nagar

              <span className="mt-3 block font-serif text-[24px] font-normal tracking-normal text-[#8b8f8f] sm:text-[28px]">
                (Aurangabad)
              </span>
            </h2>

            {/* Gold Divider */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#e0b044]" />
              <span className="h-2 w-2 rounded-full bg-[#e0b044]" />
            </div>

            {/* Description */}
            <p className="mt-7 max-w-[560px] text-[16px] leading-8 text-[#657174] lg:text-[17px]">
              As our operational heart, this historic city serves as the
              perfect gateway to Maharashtra&apos;s most extraordinary
              destinations. From here, our experienced team takes you
              seamlessly to the UNESCO World Heritage sites of Ajanta and
              Ellora, along with the magnificent Daulatabad Fort.
            </p>

            <p className="mt-5 max-w-[540px] text-[15px] leading-7 text-[#7a8385]">
              Experience the region with the comfort, insight, and local
              expertise that only a deeply rooted travel partner can provide.
            </p>

            {/* Premium Location Detail */}
            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e6d8b7] bg-[#fffdf8]">
                <MapPin
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#b88725]"
                />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9b9b9b]">
                  Based In
                </p>

                <p className="mt-1 font-serif text-[16px] font-semibold text-[#123f55]">
                  Maharashtra, India
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="#city-base"
                className="group inline-flex items-center gap-4 bg-[#123f55] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#0b2f42] hover:shadow-[0_15px_35px_rgba(18,63,85,0.25)]"
              >
                Explore Our City

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e4b544] text-[#123f55] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} strokeWidth={2.2} />
                </span>
              </Link>
            </div>

          </div>


          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative lg:col-span-7">

            {/* Decorative Gold Border */}
            <div className="absolute -right-4 -top-4 hidden h-[180px] w-[180px] border border-[#dcb24d]/50 lg:block" />

            {/* Image Frame */}
            <div className="relative rounded-[32px] bg-gradient-to-br from-[#f3ead4] via-[#fffdf8] to-[#e6d7b4] p-[10px] shadow-[0_30px_70px_rgba(18,63,85,0.15)]">

              <div className="relative overflow-hidden rounded-[25px]">

                {/* Image */}
                <img
                    src="/destinations/csna.jpg"
                  alt="Bibi Ka Maqbara in Chhatrapati Sambhaji Nagar"
                  className="h-[360px] w-full object-cover transition duration-[1200ms] ease-out hover:scale-105 sm:h-[460px] lg:h-[540px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062f3b]/55 via-transparent to-transparent" />

                {/* Image Label */}
                <div className="absolute bottom-7 left-7 hidden items-center gap-3 text-white sm:flex">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                    <Sparkles
                      size={17}
                      className="text-[#e8bb4f]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e7bc54]">
                      Heritage Gateway
                    </p>

                    <p className="mt-1 font-serif text-[18px] font-semibold">
                      Discover Maharashtra
                    </p>
                  </div>

                </div>

              </div>
            </div>


            {/* ================= FLOATING CARD ================= */}
            <div className="relative z-20 mt-5 sm:absolute sm:bottom-8 sm:left-8 sm:mt-0">

              <div className="group max-w-[330px] rounded-2xl border border-white/70 bg-white/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]">

                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#123f55] shadow-lg">

                    <MapPin
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#e7b84a]"
                    />

                  </div>


                  {/* Content */}
                  <div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b88725]">
                      Your Starting Point
                    </p>

                    <h3 className="mt-2 font-serif text-[21px] font-bold text-[#123f55]">
                      Central Hub
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#6c7476]">
                      Strategically located for seamless access to
                      Maharashtra&apos;s most iconic heritage destinations.
                    </p>

                  </div>

                </div>

                {/* Bottom Accent */}
                <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-[#e3b54b] via-[#e3b54b]/30 to-transparent" />

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}