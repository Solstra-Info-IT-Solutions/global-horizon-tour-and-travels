"use client";

import { FileText, ArrowDown } from "lucide-react";

export default function QuoteHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#123f55] py-24 sm:py-28 lg:py-36">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full border border-[#d9a737]/20" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#14596a] via-[#123f55] to-[#082f39]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-6 text-center sm:px-10 lg:px-16 xl:px-24">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">

          <span className="h-[2px] w-10 bg-[#d9a737]" />

          <div className="flex items-center gap-2">

            <FileText
              size={15}
              className="text-[#e5b34d]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#e5b34d]">
              Personalised Travel Planning
            </span>

          </div>

          <span className="h-[2px] w-10 bg-[#d9a737]" />

        </div>

        {/* Heading */}
        <h1 className="mt-7 font-serif text-[46px] font-bold leading-[1.08] text-white sm:text-[60px] lg:text-[76px]">

          Request Your

          <span className="block italic text-[#e5b34d]">
            Travel Quote.
          </span>

        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">

          Tell us a little about your journey and our travel specialists will
          prepare a personalised proposal tailored to your requirements,
          preferences and travel plans.

        </p>

        {/* Bottom Detail */}
        <div className="mt-10 flex items-center justify-center gap-4 text-white/45">

          <span className="h-px w-12 bg-[#d9a737]/50" />

          <span className="text-[9px] uppercase tracking-[2.5px]">
            Thoughtfully Planned • Personally Designed
          </span>

          <span className="h-px w-12 bg-[#d9a737]/50" />

        </div>

        <div className="mt-12 flex justify-center">
          <ArrowDown
            size={18}
            className="animate-bounce text-[#e5b34d]/70"
          />
        </div>

      </div>
    </section>
  );
}