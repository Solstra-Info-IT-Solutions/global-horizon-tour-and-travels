"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function PersonalizedJourneyCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-20 sm:py-24 lg:py-28">
      {/* DECORATION */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a737]/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a737]/[0.025] blur-[100px]" />

      <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">
        <div className="flex items-center justify-center gap-3">
          <Sparkles size={14} className="text-[#d9a737]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#14596a]">
            Your Journey. Your Way.
          </span>

          <Sparkles size={14} className="text-[#d9a737]" />
        </div>

        <h2 className="mt-7 font-serif text-[42px] font-bold leading-[1.08] text-[#123f55] sm:text-6xl lg:text-[68px]">
          Your Perfect Journey
          <span className="block italic font-medium text-[#d9a737]">
            Doesn't Come From A Template.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-8 text-[#687276] sm:text-[15px]">
          Every traveller is different. Tell us what you imagine, where you
          want to go and how you want to travel. We'll help create a journey
          designed around you.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/enquiry"
            className="group relative inline-flex min-h-[58px] items-center justify-center gap-3 overflow-hidden bg-[#123f55] px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(18,63,85,0.22)]"
          >
            <span className="absolute inset-0 translate-y-full bg-[#d9a737] transition-transform duration-500 group-hover:translate-y-0" />

            <span className="relative z-10 flex items-center gap-3 transition-colors group-hover:text-[#123f55]">
              Plan My Journey

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </span>
          </Link>

          <a
            href="https://wa.me/919146945571?text=Hello%20Global%20Horizon%20Tours%20%26%20Travels%2C%20I%20would%20like%20to%20plan%20my%20journey."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[58px] items-center justify-center gap-3 border border-[#123f55]/20 px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[#123f55] transition-all hover:border-[#d9a737] hover:text-[#d9a737]"
          >
            <MessageCircle
              size={17}
              className="text-[#d9a737]"
            />

            Talk To An Expert
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#d9a737]/50" />

          <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#8b9496]">
            Personalised • Comfortable • Memorable
          </span>

          <span className="h-px w-8 bg-[#d9a737]/50" />
        </div>
      </div>
    </section>
  );
}