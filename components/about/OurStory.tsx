import { Award, ArrowUpRight } from "lucide-react";

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      {/* ================= DECORATIVE BACKGROUND ================= */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[320px] w-[320px] rounded-full border border-[#14596a]/5" />

      <div className="pointer-events-none absolute right-0 top-0 h-px w-[30%] bg-gradient-to-l from-[#e7b33d]/40 to-transparent" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        {/* ================= LEFT CONTENT ================= */}
        <div>
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#e7b33d]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9972d]">
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[600px] font-serif text-4xl font-bold leading-[1.12] text-[#14596a] md:text-5xl">
            Crafting Heritage
            <span className="block italic text-[#c9972d]">
              Experiences Since 2004.
            </span>
          </h2>

          {/* Gold Divider */}
          <div className="mt-7 flex items-center gap-3">
            <span className="h-[2px] w-16 bg-[#e7b33d]" />
            <span className="h-[2px] w-3 bg-[#e7b33d]/40" />
          </div>

          {/* Description */}
          <div className="mt-8 max-w-[600px] space-y-5 text-[15px] leading-7 text-[#626a6d]">
            <p>
              Global Horizons Tours & Travels is a professionally managed
              travel company based in Aurangabad/Sambhajinagar, Maharashtra,
              offering reliable travel solutions for individuals, families,
              groups, businesses, and organizations.
            </p>

            <p>
              Based in Aurangabad, we understand the needs of travelers from
              our region and the importance of reliable transportation when
              exploring destinations across Maharashtra and India.
            </p>

            <p>
              What began with a passion for travel and service has grown into
              a larger ambition — to create a travel brand known for quality,
              transparency, comfort, and customer satisfaction.
            </p>

            <p>
              Today, we continue to grow with every journey, every destination,
              and every customer we serve. Our journey is growing — and we
              invite you to be part of it.
            </p>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-10 grid max-w-[520px] grid-cols-2 border-y border-[#14596a]/10 py-7">
            {/* Stat 1 */}
            <div className="border-r border-[#14596a]/10 pr-6">
              <p className="font-serif text-4xl font-bold text-[#e4b23c]">
                20+
              </p>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6f7779]">
                Years of Excellence
              </p>
            </div>

            {/* Stat 2 */}
            <div className="pl-7">
              <p className="font-serif text-4xl font-bold text-[#e4b23c]">
                50K+
              </p>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6f7779]">
                Journeys Crafted
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative mx-auto w-full max-w-[490px]">
          {/* Decorative Gold Border */}
          <div className="absolute -right-5 -top-5 h-full w-full border border-[#e7b33d]/40" />

          {/* Image Frame */}
          <div className="relative overflow-hidden rounded-[3px] bg-[#f1eee7] p-3 shadow-[0_25px_70px_rgba(20,89,106,0.12)]">
            <div className="group relative overflow-hidden">
              <img
                src="/image.png"
                alt="Global Horizon travel experience"
                className="h-[460px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#063f4d]/35 via-transparent to-transparent" />
            </div>
          </div>

          {/* ================= AWARD CARD ================= */}
          <div className="absolute -bottom-8 -left-6 z-10 w-[230px] border border-[#e7b33d]/30 bg-[#14596a] p-6 text-white shadow-[0_20px_45px_rgba(0,0,0,0.22)]">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e7b33d]/40 bg-[#e7b33d]/10">
                <Award
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#e8b43e]"
                />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e8b43e]">
                  Recognition
                </p>

                <p className="mt-2 font-serif text-lg font-bold leading-tight text-white">
                  Award Winning
                  <br />
                  Travel Experience
                </p>
              </div>
            </div>
          </div>

          {/* Small Experience Card */}
          <div className="absolute -right-8 bottom-12 hidden border border-[#14596a]/10 bg-white px-5 py-4 shadow-lg md:block">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#e7b33d]" />

              <div>
                <p className="text-xs font-semibold text-[#14596a]">
                  Since 2004
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-400">
                  Trusted Travel Partner
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="ml-2 text-[#c9972d]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}