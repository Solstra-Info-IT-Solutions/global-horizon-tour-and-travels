import {
  Check,
  Globe2,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    text: "Multi-lingual expert guides",
    icon: Globe2,
  },
  {
    text: "Visa & documentation assistance",
    icon: ShieldCheck,
  },
  {
    text: "24/7 dedicated helpline",
    icon: Headphones,
  },
  {
    text: "Currency & local customs briefing",
    icon: Globe2,
  },
  {
    text: "Secure, vetted transportation",
    icon: ShieldCheck,
  },
  {
    text: "Dietary requirement management",
    icon: Check,
  },
];

export default function LocalPartner() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] px-6 py-20 md:px-10 lg:px-20 lg:py-28">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#e5b34d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1230px]">

        {/* Premium Main Card */}
        <div className="overflow-hidden rounded-[28px] border border-[#e7e1d6] bg-white shadow-[0_25px_70px_rgba(20,89,106,0.10)]">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* ================= IMAGE ================= */}
            <div className="relative min-h-[380px] overflow-hidden md:min-h-[600px]">

              <img
                src="/international-persons-exploring-india.png"
                alt="International guests exploring India"
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 hover:scale-105"
              />

              {/* Luxury Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#073f4c]/70 via-transparent to-transparent" />

              {/* Experience Badge */}
              <div className="absolute bottom-7 left-7 right-7">

                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#14596a]/85 px-5 py-3 text-white shadow-xl backdrop-blur-md">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5b34d] text-[#14596a]">
                    <Globe2 size={16} />
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-[1.5px] text-white/60">
                      Global Hospitality
                    </p>

                    <p className="mt-1 text-[13px] font-medium">
                      Local Expertise. World-Class Care.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* ================= CONTENT ================= */}
            <div className="flex flex-col justify-center px-7 py-12 sm:px-10 md:px-12 lg:px-16 lg:py-16">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">

                <span className="h-[2px] w-9 bg-[#e2ad42]" />

                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#d9a737]">
                  International Guests
                </p>

              </div>

              {/* Heading */}
              <h2 className="mt-6 max-w-[520px] font-serif text-[34px] font-bold leading-[1.15] text-[#14596a] sm:text-[40px] lg:text-[46px]">

                Your Trusted
                <br />

                <span className="text-[#d9a737]">
                  Local Partner
                </span>

              </h2>

              {/* Divider */}
              <div className="mt-7 h-px w-full bg-gradient-to-r from-[#e5b34d]/60 to-transparent" />

              {/* Description */}
              <p className="mt-7 max-w-[540px] text-[15px] leading-7 text-[#687276]">

                Navigating a new country requires more than a map; it requires
                a trusted local partner. We specialize in providing a secure,
                culturally immersive and seamless experience for international
                visitors.

              </p>

              <p className="mt-4 max-w-[540px] text-[15px] leading-7 text-[#687276]">

                From the moment you arrive until your journey concludes, our
                team ensures that every detail is handled with care,
                professionalism and genuine local expertise.

              </p>

              {/* ================= BENEFITS ================= */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.text}
                      className="group flex items-center gap-4 rounded-xl border border-[#ece7dd] bg-[#fcfbf8] px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#e5b34d]/60 hover:bg-white hover:shadow-[0_12px_30px_rgba(20,89,106,0.08)]"
                    >

                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14596a]/10 text-[#14596a] transition duration-300 group-hover:bg-[#e5b34d] group-hover:text-white">

                        <Icon size={17} strokeWidth={1.8} />

                      </div>

                      <p className="text-[13px] font-medium leading-5 text-[#4f5b5f]">

                        {benefit.text}

                      </p>

                    </div>
                  );
                })}

              </div>

              {/* Bottom Trust Message */}
              <div className="mt-10 flex items-center gap-4 border-t border-[#ebe6dc] pt-7">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#14596a] text-[#e5b34d]">

                  <ShieldCheck size={21} />

                </div>

                <div>

                  <p className="text-[13px] font-semibold text-[#14596a]">
                    Travel With Complete Confidence
                  </p>

                  <p className="mt-1 text-[12px] text-gray-500">
                    Trusted support throughout your journey in India.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}