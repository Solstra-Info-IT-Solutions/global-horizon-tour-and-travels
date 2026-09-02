import {
  HeartHandshake,
  ShieldCheck,
  Headphones,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Personalized Planning",
    description:
      "Every journey is thoughtfully designed around your interests, preferences and travel style.",
    icon: HeartHandshake,
  },
  {
    title: "Trusted Experiences",
    description:
      "Reliable planning, carefully selected experiences and professional travel support.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Assistance",
    description:
      "Travel confidently knowing our support team is available whenever you need assistance.",
    icon: Headphones,
  },
];

export default function WhyTravelWithUs() {
  return (
    <section className="relative overflow-hidden bg-[#0e4655] py-20 sm:py-24 lg:py-28">
      <div className="absolute right-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full border border-white/[0.06]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <Sparkles size={13} className="text-[#e7ae3c]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#e7ae3c]">
              The Global Horizon Difference
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[38px] font-bold text-white sm:text-5xl">
            Travel With

            <span className="italic font-medium text-[#e7ae3c]">
              Confidence.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[24px] border border-white/[0.10] bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#e7ae3c]/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e7ae3c]/30 bg-[#e7ae3c]/10 text-[#e7ae3c]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 font-serif text-[24px] font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-[#afc3c8]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}