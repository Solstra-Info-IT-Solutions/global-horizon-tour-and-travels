"use client";

import {
  MessageCircleMore,
  ClipboardPenLine,
  BadgeCheck,
  PlaneTakeoff,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us",
    shortTitle: "Tell Us Your Plan",
    description:
      "Share your destination, travel dates, number of travelers and the kind of journey you are planning.",
    icon: MessageCircleMore,
  },
  {
    number: "02",
    title: "We Plan",
    shortTitle: "We Design Your Journey",
    description:
      "Our team carefully understands your requirements and prepares the right travel and transportation solution.",
    icon: ClipboardPenLine,
  },
  {
    number: "03",
    title: "We Confirm",
    shortTitle: "Everything Gets Confirmed",
    description:
      "Once everything is finalized, we coordinate the important details so your journey is ready to begin.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "You Travel",
    shortTitle: "Enjoy The Journey",
    description:
      "Relax and enjoy your experience while we focus on making your journey comfortable and seamless.",
    icon: PlaneTakeoff,
  },
];

export default function JourneyProcess() {
  return (
    <section className="relative overflow-hidden bg-[#fcfbf8] py-24 sm:py-28 lg:py-32">
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      {/* Top subtle line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9a737]/40 to-transparent" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#d9a737]/10" />

      <div className="pointer-events-none absolute -right-52 bottom-[-220px] h-[650px] w-[650px] rounded-full border border-[#14596a]/10" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d9a737]/[0.025] blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#d9a737] sm:w-12" />

            <div className="flex items-center gap-2">
              <Sparkles
                size={13}
                className="text-[#d9a737]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#14596a] sm:text-[10px]">
                Our Simple Process
              </span>
            </div>

            <span className="h-px w-8 bg-[#d9a737] sm:w-12" />
          </div>

          <h2 className="mt-7 font-serif text-[40px] font-bold leading-[1.08] tracking-[-0.025em] text-[#123f55] sm:text-5xl lg:text-[62px]">
            How We Plan Your
            <span className="block italic font-medium text-[#d9a737]">
              Perfect Journey.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-8 text-[#687276] sm:text-[15px]">
            From your first enquiry to the moment your journey begins,
            we make the entire travel planning experience simple,
            organized and completely stress-free.
          </p>
        </div>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <div className="relative mt-16 lg:mt-20">
          {/* DESKTOP CONNECTING LINE */}

          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[42px] hidden h-px lg:block">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#d9a737]/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative"
                >
                  {/* MOBILE CONNECTOR */}

                  {index !== steps.length - 1 && (
                    <div className="absolute bottom-[-20px] left-1/2 top-full hidden h-5 w-px -translate-x-1/2 bg-[#d9a737]/20 sm:hidden" />
                  )}

                  {/* CARD */}

                  <article className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#e3ddd3] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d9a737]/50 hover:shadow-[0_25px_60px_rgba(18,63,85,0.10)] sm:p-8">
                    {/* Background Number */}

                    <span className="pointer-events-none absolute right-5 top-2 select-none font-serif text-[82px] font-bold leading-none tracking-[-0.07em] text-[#123f55]/[0.035] transition-all duration-500 group-hover:text-[#d9a737]/[0.08]">
                      {step.number}
                    </span>

                    {/* ICON */}

                    <div className="relative z-10 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#d9a737]/30 bg-[#fbf5e8] text-[#c99528] shadow-[0_10px_30px_rgba(217,167,55,0.10)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#d9a737] group-hover:text-white">
                      <div className="absolute inset-[6px] rounded-full border border-[#d9a737]/20 transition-colors duration-500 group-hover:border-white/30" />

                      <Icon
                        size={26}
                        strokeWidth={1.6}
                        className="relative z-10"
                      />
                    </div>

                    {/* STEP LABEL */}

                    <div className="mt-8 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#d9a737] transition-all duration-500 group-hover:w-12" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#b98a2c]">
                        Step {step.number}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-5 font-serif text-[27px] font-bold leading-tight text-[#123f55]">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-4 text-[13px] leading-7 text-[#687276]">
                      {step.description}
                    </p>

                    {/* BOTTOM */}

                    <div className="mt-8 flex items-center justify-between border-t border-[#e8e3da] pt-5">
                      <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#8a9496]">
                        {step.shortTitle}
                      </span>

                      {index !== steps.length - 1 ? (
                        <ArrowRight
                          size={17}
                          className="text-[#d9a737] transition-transform duration-500 group-hover:translate-x-1"
                        />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-[#d9a737] transition-transform duration-500 group-hover:scale-150" />
                      )}
                    </div>

                    {/* Bottom accent */}

                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#d9a737] transition-all duration-500 group-hover:w-full" />
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM SIGNATURE
        ====================================================== */}

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-full border border-[#d9a737]/20 bg-[#fffdf8] px-5 py-3 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d9a737]" />

            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#687276]">
              Simple Planning • Seamless Travel • Beautiful Memories
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-[#14596a]" />
          </div>
        </div>
      </div>
    </section>
  );
}