import {
  ShieldCheck,
  Clock3,
  Headphones,
  Sparkles,
} from "lucide-react";

export default function WhyChooseTransport() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Reliable Service",
      description:
        "Professional transport solutions designed for a comfortable journey.",
    },
    {
      icon: Clock3,
      title: "24/7 Assistance",
      description:
        "Our team is available to assist you whenever you need help.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "Personal assistance before and during your journey.",
    },
  ];

  return (
    <div className="overflow-hidden rounded-[28px] bg-[#123f55] p-7 text-white shadow-xl">
      <div className="flex items-center gap-3">
        <Sparkles size={17} className="text-[#e7ae3c]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e7ae3c]">
          Travel With Confidence
        </span>
      </div>

      <h3 className="mt-5 font-serif text-3xl font-bold leading-tight">
        Comfortable Travel.
        <span className="block italic font-medium text-[#e7ae3c]">
          Every Mile.
        </span>
      </h3>

      <div className="mt-8 space-y-6">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#e7ae3c]">
                <Icon size={18} />
              </div>

              <div>
                <h4 className="text-sm font-semibold">
                  {feature.title}
                </h4>

                <p className="mt-1 text-xs leading-5 text-white/60">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-xs leading-6 text-white/50">
          Submit your requirements and our team will get back to you with the
          best available transport option.
        </p>
      </div>
    </div>
  );
}