"use client";

import { useEffect, useState } from "react";
import { Plane, MapPin, Sparkles } from "lucide-react";

export default function PremiumLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        const increment = Math.floor(Math.random() * 8) + 2;

        return Math.min(prev + increment, 100);
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#082f3a]">
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,89,106,0.45),transparent_55%)]" />

        {/* Gold Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a737]/[0.06] blur-[120px]" />

        {/* Decorative Lines */}

        <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#d9a737]/20 to-transparent" />

        <div className="absolute right-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#d9a737]/20 to-transparent" />

        {/* Large Circles */}

        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/[0.03]" />

        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#d9a737]/10" />

        {/* Stars */}

        <div className="loader-star loader-star-1" />
        <div className="loader-star loader-star-2" />
        <div className="loader-star loader-star-3" />
        <div className="loader-star loader-star-4" />
        <div className="loader-star loader-star-5" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 flex w-full max-w-[500px] flex-col items-center px-6 text-center">

        {/* =====================================================
            COMPASS / TRAVEL ANIMATION
        ====================================================== */}

        <div className="relative mb-10 flex h-[180px] w-[180px] items-center justify-center sm:h-[210px] sm:w-[210px]">

          {/* Outer Rotating Ring */}

          <div className="absolute inset-0 rounded-full border border-[#d9a737]/20 loader-spin-slow" />

          {/* Dashed Ring */}

          <div className="absolute inset-[12px] rounded-full border border-dashed border-[#d9a737]/30 loader-spin-reverse" />

          {/* Inner Ring */}

          <div className="absolute inset-[28px] rounded-full border border-white/[0.08]" />

          {/* Compass Lines */}

          <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#d9a737]/40 to-transparent" />

          <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-[#d9a737]/40 to-transparent" />

          {/* Compass Points */}

          <span className="absolute top-[-8px] text-[9px] font-bold tracking-[0.25em] text-[#d9a737]">
            N
          </span>

          <span className="absolute bottom-[-8px] text-[9px] font-bold tracking-[0.25em] text-[#d9a737]/50">
            S
          </span>

          <span className="absolute left-[-8px] text-[9px] font-bold tracking-[0.25em] text-[#d9a737]/50">
            W
          </span>

          <span className="absolute right-[-8px] text-[9px] font-bold tracking-[0.25em] text-[#d9a737]/50">
            E
          </span>

          {/* Center Glow */}

          <div className="absolute h-[92px] w-[92px] rounded-full bg-[#14596a]/40 blur-xl" />

          {/* Plane */}

          <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#d9a737]/40 bg-[#0e4655] shadow-[0_0_50px_rgba(217,167,55,0.18)]">

            <div className="absolute inset-[6px] rounded-full border border-[#d9a737]/15" />

            <Plane
              size={30}
              strokeWidth={1.5}
              className="relative z-10 rotate-[-35deg] text-[#d9a737] loader-plane"
            />

          </div>

          {/* Orbiting Location */}

          <div className="absolute inset-0 loader-orbit">
            <div className="absolute left-1/2 top-[-7px] -translate-x-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9a737]/40 bg-[#0e4655] text-[#d9a737] shadow-lg">
                <MapPin size={14} />
              </div>
            </div>
          </div>

        </div>


        {/* =====================================================
            BRAND
        ====================================================== */}

        <div className="flex items-center gap-3">

          <span className="h-px w-8 bg-[#d9a737]/70" />

          <div className="flex items-center gap-2">

            <Sparkles
              size={13}
              className="animate-pulse text-[#d9a737]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#d9a737]">
              Preparing Your Journey
            </span>

          </div>

          <span className="h-px w-8 bg-[#d9a737]/70" />

        </div>


        <h1 className="mt-5 font-serif text-[32px] font-bold tracking-[-0.02em] text-white sm:text-[38px]">

          Global Horizon

        </h1>


        <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.32em] text-[#9bb8bf]">

          Tours & Travels

        </p>


        {/* =====================================================
            JOURNEY TEXT
        ====================================================== */}

        <p className="mt-8 text-[13px] leading-6 text-[#aac1c6]">

          Curating exceptional journeys and unforgettable experiences.

        </p>


        {/* =====================================================
            ROUTE ANIMATION
        ====================================================== */}

        <div className="relative mt-9 w-full max-w-[360px]">

          {/* Route */}

          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/[0.08]">

            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#14596a] via-[#d9a737] to-[#f3cf73] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />

            {/* Moving Glow */}

            <div
              className="absolute top-1/2 h-5 w-16 -translate-y-1/2 bg-[#d9a737]/30 blur-md transition-all duration-300"
              style={{
                left: `${Math.max(progress - 8, 0)}%`,
              }}
            />

          </div>


          {/* Route Points */}

          <div className="absolute left-0 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#d9a737]/60 bg-[#082f3a]">

            <div className="h-1.5 w-1.5 rounded-full bg-[#d9a737]" />

          </div>


          <div className="absolute right-0 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#d9a737]/60 bg-[#082f3a]">

            <MapPin
              size={9}
              className="text-[#d9a737]"
            />

          </div>

        </div>


        {/* =====================================================
            LOADING INFO
        ====================================================== */}

        <div className="mt-4 flex w-full max-w-[360px] items-center justify-between">

          <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#71949d]">

            Loading Experience

          </span>

          <span className="font-mono text-[10px] font-semibold tracking-[0.15em] text-[#d9a737]">

            {progress.toString().padStart(2, "0")}%

          </span>

        </div>


        {/* =====================================================
            BOTTOM SIGNATURE
        ====================================================== */}

        <div className="mt-12 flex items-center gap-3">

          <span className="h-px w-7 bg-white/10" />

          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#66878f]">

            Travel Beyond Ordinary

          </p>

          <span className="h-px w-7 bg-white/10" />

        </div>

      </div>


      {/* =====================================================
          CUSTOM ANIMATIONS
      ====================================================== */}

      <style jsx global>{`

        @keyframes loaderSpinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }


        @keyframes loaderSpinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }


        @keyframes loaderOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }


        @keyframes loaderPlane {
          0%, 100% {
            transform: rotate(-35deg) translateY(0);
          }

          50% {
            transform: rotate(-28deg) translateY(-5px);
          }
        }


        @keyframes loaderStar {

          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.8);
          }

        }


        .loader-spin-slow {
          animation: loaderSpinSlow 16s linear infinite;
        }


        .loader-spin-reverse {
          animation: loaderSpinReverse 10s linear infinite;
        }


        .loader-orbit {
          animation: loaderOrbit 7s linear infinite;
        }


        .loader-plane {
          animation: loaderPlane 2.5s ease-in-out infinite;
        }


        .loader-star {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background: #d9a737;
          animation: loaderStar 2s ease-in-out infinite;
        }


        .loader-star-1 {
          top: 18%;
          left: 20%;
          animation-delay: 0s;
        }


        .loader-star-2 {
          top: 25%;
          right: 18%;
          animation-delay: 0.5s;
        }


        .loader-star-3 {
          bottom: 20%;
          left: 15%;
          animation-delay: 1s;
        }


        .loader-star-4 {
          bottom: 28%;
          right: 12%;
          animation-delay: 1.5s;
        }


        .loader-star-5 {
          top: 50%;
          left: 8%;
          animation-delay: 0.8s;
        }

      `}</style>

    </div>
  );
}