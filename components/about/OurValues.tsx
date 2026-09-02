import {
  HeartHandshake,
  Armchair,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Trust",
    text: "We believe every successful journey begins with trust. We maintain clear communication and transparent commitments.",
  },
  {
    icon: Armchair,
    title: "Comfort",
    text: "Your journey should be as enjoyable as your destination. We focus on comfortable transportation and thoughtfully planned travel.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Passenger safety is one of our highest priorities. We aim to provide dependable vehicles and responsible travel services.",
  },
  {
    icon: BadgeCheck,
    title: "Professionalism",
    text: "From the first enquiry to the end of your journey, we strive to provide courteous and professional service.",
  },
];

export default function OurValues() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] px-6 py-20 md:px-10 lg:px-20 lg:py-28">

      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#14596a]/[0.03] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#eab943]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-14 max-w-[650px] text-center">

          {/* Premium Small Heading */}
          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-[#e2b33e]" />

            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#dcae3c]">
              The Pillars of Our Service
            </p>

            <span className="h-px w-10 bg-[#e2b33e]" />

          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold text-[#14596a] md:text-[42px]">
            Our Core Values
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-[#687579]">
            The principles that guide every journey we create and every
            experience we deliver.
          </p>

        </div>

        {/* ================= VALUE CARDS ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group relative overflow-hidden rounded-2xl border border-[#14596a]/10 bg-white p-7 shadow-[0_10px_35px_rgba(20,89,106,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#eab943]/50 hover:shadow-[0_22px_55px_rgba(20,89,106,0.14)]"
              >

                {/* Top Accent Line */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#eab943] transition-all duration-500 group-hover:w-full" />

                {/* Background Number */}
                <span className="absolute -right-2 -top-7 font-serif text-[90px] font-bold leading-none text-[#14596a]/[0.035] transition duration-500 group-hover:text-[#eab943]/[0.08]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14596a] shadow-[0_10px_25px_rgba(20,89,106,0.22)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#eab943]">

                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="text-white transition-colors duration-500 group-hover:text-[#14596a]"
                  />

                </div>

                {/* Title */}
                <h3 className="relative font-serif text-[21px] font-bold text-[#14596a]">
                  {value.title}
                </h3>

                {/* Small Gold Divider */}
                <div className="mt-4 h-[2px] w-9 bg-[#eab943] transition-all duration-500 group-hover:w-16" />

                {/* Description */}
                <p className="relative mt-5 text-[14px] leading-7 text-[#6b7578]">
                  {value.text}
                </p>

                {/* Bottom Decorative Element */}
                <div className="mt-7 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#eab943]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#14596a]/50">
                    Global Horizons
                  </span>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}