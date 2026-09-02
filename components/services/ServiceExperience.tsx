import {
  ShieldCheck,
  HeartHandshake,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Reliable Service",
    description:
      "Every journey is planned with attention to timing, comfort and reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized Planning",
    description:
      "Travel experiences designed around your individual requirements and preferences.",
    icon: HeartHandshake,
  },
  {
    title: "24×7 Assistance",
    description:
      "Support and assistance whenever you need help during your journey.",
    icon: Clock3,
  },
  {
    title: "Trusted Experience",
    description:
      "Professional service focused on delivering smooth and memorable journeys.",
    icon: BadgeCheck,
  },
];

export default function ServiceExperience() {
  return (
    <section className="relative overflow-hidden bg-[#123f55] py-24 sm:py-28 lg:py-32">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a737]/[0.06] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Left */}
          <div>

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a737]">
              The Global Horizon Experience
            </span>

            <h2 className="mt-6 font-serif text-[42px] font-bold leading-[1.1] text-white sm:text-5xl lg:text-[60px]">
              More Than Just
              <span className="block italic font-medium text-[#d9a737]">
                A Travel Service.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#b9cbd0]">
              We believe a great journey starts long before you reach your
              destination. Our focus is on making every stage of your travel
              comfortable, organized and enjoyable.
            </p>

          </div>


          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-[28px] border border-white/[0.10] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#d9a737]/40 hover:bg-white/[0.07]"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9a737]/25 bg-[#d9a737]/10 text-[#d9a737] transition-transform duration-500 group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 font-serif text-[22px] font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-7 text-[#a9c0c5]">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}