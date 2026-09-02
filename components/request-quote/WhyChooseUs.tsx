import {
  Gem,
  Map,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Personalised Planning",
    description:
      "Every journey is designed around your individual preferences and requirements.",
  },
  {
    icon: Map,
    title: "Local Expertise",
    description:
      "Experience destinations with knowledgeable professionals and trusted local partners.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Professional assistance before, during and throughout your journey.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "Thoughtful planning, trusted partners and attention to every important detail.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#123f55] py-20 sm:py-24 lg:py-28">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full border border-[#e5b34d]/15" />

      <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-[#e5b34d]" />

            <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#e5b34d]">
              Why Travel With Us
            </span>

            <span className="h-px w-10 bg-[#e5b34d]" />

          </div>

          <h2 className="mt-6 font-serif text-4xl font-bold text-white sm:text-5xl">

            Designed Around

            <span className="italic text-[#e5b34d]">
              {" "}You.
            </span>

          </h2>

          <p className="mt-6 text-[15px] leading-7 text-white/65">

            From the first conversation to the final journey, we focus on
            creating a seamless and memorable travel experience.

          </p>

        </div>


        {/* Features */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[18px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-[#e5b34d]/40 hover:bg-white/[0.07]"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e5b34d]/15 text-[#e5b34d] transition duration-300 group-hover:bg-[#e5b34d] group-hover:text-[#123f55]">

                  <Icon size={21} />

                </div>

                <h3 className="mt-6 font-serif text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-white/55">
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