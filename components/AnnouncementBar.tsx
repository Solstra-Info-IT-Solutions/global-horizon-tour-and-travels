"use client";

import { useState } from "react";
import Link from "next/link";
import {
  X,
  Sparkles,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-[60] overflow-hidden bg-[#0b3d4a] text-white">
      {/* Premium Gold Top Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e7ae3c] to-transparent" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e7ae3c]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[42px] max-w-[1440px] items-center justify-center px-12 py-2 sm:px-16 lg:px-20">
        
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-center">

          {/* Premium Message */}
          <div className="flex items-center gap-2">
            <Sparkles
              size={13}
              className="shrink-0 text-[#e7ae3c]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#dce8eb] sm:text-[10px]">
              Premium Travel Experiences
            </span>
          </div>

          {/* Divider */}
          <span className="hidden h-4 w-px bg-white/15 sm:block" />

          {/* 24/7 */}
          <div className="flex items-center gap-2">
            <Phone
              size={12}
              className="text-[#e7ae3c]"
            />

            <span className="text-[9px] font-semibold tracking-[0.12em] text-[#b9cdd2] sm:text-[10px]">
              24/7 Travel Assistance
            </span>
          </div>

          {/* Divider */}
          <span className="hidden h-4 w-px bg-white/15 md:block" />

          {/* CTA */}
          <Link
            href="/request-quote"
            className="group hidden items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#e7ae3c] transition-colors hover:text-white md:flex"
          >
            Request A Quote

            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Close announcement"
          className="absolute right-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[#b9cdd2] transition-all duration-300 hover:border-[#e7ae3c]/60 hover:bg-white/5 hover:text-[#e7ae3c] sm:right-5"
        >
          <X size={14} />
        </button>

      </div>
    </div>
  );
}