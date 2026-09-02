import { CircleHelp, Sparkles } from "lucide-react";

export default function FAQHero() {
  return (
    <section className="relative overflow-hidden bg-[#0e4655] py-24 sm:py-28 lg:py-32">

      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full border border-[#e7ae3c]/15" />

      <div className="absolute -right-32 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#e7ae3c]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">

        <div className="flex items-center justify-center gap-3">
          <Sparkles size={14} className="text-[#e7ae3c]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e7ae3c]">
            Help Centre
          </span>
        </div>

        <h1 className="mt-7 font-serif text-[44px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-[72px]">
          Frequently Asked

          <span className="block italic font-medium text-[#e7ae3c]">
            Questions.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-[#b7cbd0] sm:text-[17px]">
          Everything you need to know about planning your journey, booking
          travel experiences and travelling with Global Horizon.
        </p>

        <div className="mt-9 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e7ae3c]/30 bg-[#e7ae3c]/10 text-[#e7ae3c]">
            <CircleHelp size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}