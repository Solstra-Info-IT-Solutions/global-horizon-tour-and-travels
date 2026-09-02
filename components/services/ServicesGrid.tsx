// "use client";

// import {
//   Car,
//   Plane,
//   TrainFront,
//   BriefcaseBusiness,
//   Palmtree,
//   Map,
//   Hotel,
//   Users,
//   Landmark,
//   Camera,
//   BadgeIndianRupee,
// } from "lucide-react";

// const services = [
//   {
//     number: "01",
//     title: "Private Taxi",
//     eyebrow: "Personal Mobility",
//     description:
//       "Comfortable and professionally managed transportation designed around your personal schedule and destination.",
//     icon: Car,
//     accent: "teal",
//   },
//   {
//     number: "02",
//     title: "Airport Transfers",
//     eyebrow: "Seamless Arrivals",
//     description:
//       "Reliable airport pickups and drop-offs designed to make every journey smooth, punctual and stress-free.",
//     icon: Plane,
//     accent: "gold",
//   },
//   {
//     number: "03",
//     title: "Railway Transfers",
//     eyebrow: "Connected Journeys",
//     description:
//       "Convenient transportation to and from railway stations with comfort and dependable travel assistance.",
//     icon: TrainFront,
//     accent: "teal",
//   },
//   {
//     number: "04",
//     title: "Corporate Travel",
//     eyebrow: "Business Mobility",
//     description:
//       "Professional transportation solutions for executives, corporate teams, delegates and important events.",
//     icon: BriefcaseBusiness,
//     accent: "gold",
//   },
//   {
//     number: "05",
//     title: "Holiday Packages",
//     eyebrow: "Beautiful Escapes",
//     description:
//       "Carefully planned holiday experiences that combine comfort, discovery and unforgettable destinations.",
//     icon: Palmtree,
//     accent: "gold",
//   },
//   {
//     number: "06",
//     title: "Customized Tours",
//     eyebrow: "Travel Your Way",
//     description:
//       "Personalized travel itineraries created around your interests, preferred destinations and schedule.",
//     icon: Map,
//     accent: "teal",
//   },
//   {
//     number: "07",
//     title: "Hotel Reservations",
//     eyebrow: "Comfortable Stays",
//     description:
//       "Assistance with selecting comfortable accommodation that perfectly fits your travel plans and preferences.",
//     icon: Hotel,
//     accent: "gold",
//   },
//   {
//     number: "08",
//     title: "Group & Family Tours",
//     eyebrow: "Together We Travel",
//     description:
//       "Well-organized travel experiences designed for families, friends and groups travelling together.",
//     icon: Users,
//     accent: "teal",
//   },
//   {
//     number: "09",
//     title: "Pilgrimage Tours",
//     eyebrow: "Meaningful Journeys",
//     description:
//       "Thoughtfully arranged spiritual journeys focused on comfort, convenience and peaceful travel.",
//     icon: Landmark,
//     accent: "gold",
//   },
//   {
//     number: "10",
//     title: "Sightseeing Tours",
//     eyebrow: "Discover More",
//     description:
//       "Explore iconic landmarks, hidden gems and memorable destinations with comfortable local travel.",
//     icon: Camera,
//     accent: "teal",
//   },
//   {
//   number: "11",
//   title: "Foreign Exchange",
//   eyebrow: "Travel Currency Solutions",
//   description:
//     "Convenient foreign exchange assistance to help you prepare for international journeys with confidence, comfort and complete travel readiness.",
//   icon: BadgeIndianRupee,
//   accent: "gold",
// },
// ];

// export default function ServicesGrid() {
//   return (
//     <section className="relative overflow-hidden bg-[#f7f5f1] py-24 sm:py-28 lg:py-32">

//       {/* Background */}
//       <div className="pointer-events-none absolute -left-64 top-[20%] h-[600px] w-[600px] rounded-full border border-[#d9a737]/10" />

//       <div className="pointer-events-none absolute -right-64 bottom-[10%] h-[700px] w-[700px] rounded-full border border-[#14596a]/10" />

//       <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

//         {/* Header */}
//         <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">

//           <div className="flex items-center justify-center gap-4">
//             <span className="h-px w-10 bg-[#d9a737]" />

//             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#14596a]">
//               What We Offer
//             </span>

//             <span className="h-px w-10 bg-[#d9a737]" />
//           </div>

//           <h2 className="mt-6 font-serif text-[40px] font-bold leading-tight text-[#123f55] sm:text-5xl lg:text-[60px]">
//             Travel Services For
//             <span className="block italic font-medium text-[#d9a737]">
//               Every Kind Of Journey.
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#687276]">
//             Whether you are travelling for business, leisure, family or
//             exploration, our services are designed to make your journey
//             easier from beginning to end.
//           </p>

//         </div>


//         {/* Services */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

//           {services.map((service) => {
//             const Icon = service.icon;
//             const isGold = service.accent === "gold";

//             const isForeignExchange =
//                 service.title === "Foreign Exchange";

//             return (
//               <article
//                 key={service.number}
//                 className="group relative min-h-[360px] overflow-hidden rounded-[32px] border border-[#dfd9ce] bg-[#fbfaf8] p-7 transition-all duration-500 sm:p-8 hover:-translate-y-2 hover:border-[#d9a737]/50 hover:bg-white hover:shadow-[0_30px_70px_rgba(18,63,85,0.12)]"
//               >

//                 {/* Background Number */}
//                 <span
//                   className={`pointer-events-none absolute right-4 top-[-10px] font-serif text-[110px] font-bold leading-none tracking-[-0.08em] ${
//                     isGold
//                       ? "text-[#d9a737]/[0.05]"
//                       : "text-[#123f55]/[0.035]"
//                   }`}
//                 >
//                   {service.number}
//                 </span>


//                 {/* Icon */}
//                 <div
//                   className={`relative flex h-[64px] w-[64px] items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 ${
//                     isGold
//                       ? "border-[#d9a737]/30 bg-[#fbf4e3] text-[#c99528]"
//                       : "border-[#14596a]/20 bg-[#eaf3f4] text-[#14596a]"
//                   }`}
//                 >

//                   <div
//                     className={`absolute inset-[5px] rounded-full border ${
//                       isGold
//                         ? "border-[#d9a737]/20"
//                         : "border-[#14596a]/15"
//                     }`}
//                   />

//                   <Icon
//                     size={25}
//                     strokeWidth={1.6}
//                     className="relative z-10"
//                   />

//                 </div>


//                 {/* Eyebrow */}
//                 <div className="mt-8 flex items-center gap-3">

//                   <span
//                     className={`h-px w-9 transition-all duration-500 group-hover:w-14 ${
//                       isGold
//                         ? "bg-[#d9a737]"
//                         : "bg-[#14596a]"
//                     }`}
//                   />

//                   <span
//                     className={`text-[9px] font-bold uppercase tracking-[0.22em] ${
//                       isGold
//                         ? "text-[#b98a2c]"
//                         : "text-[#14596a]"
//                     }`}
//                   >
//                     {service.eyebrow}
//                   </span>

//                 </div>


//                 {/* Title */}
//                 <h3 className="mt-6 font-serif text-[29px] font-bold leading-tight text-[#123f55]">
//                   {service.title}
//                 </h3>


//                 {/* Description */}
//                 <p className="mt-4 max-w-[330px] text-[14px] leading-7 text-[#687276]">
//                   {service.description}
//                 </p>


//                 {/* Bottom */}
//                 <div className="absolute bottom-0 left-7 right-7 sm:left-8 sm:right-8">

//                   <div className="h-px bg-[#ded8cd]" />

//                   <div className="flex items-center justify-between py-5">

//                     <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#8a9496]">
//                       Global Horizon
//                     </span>

//                     <span
//                       className={`h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150 ${
//                         isGold
//                           ? "bg-[#d9a737]"
//                           : "bg-[#14596a]"
//                       }`}
//                     />

//                   </div>

//                 </div>

//               </article>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import {
  Car,
  Plane,
  TrainFront,
  BriefcaseBusiness,
  Palmtree,
  Map,
  Hotel,
  Users,
  Landmark,
  Camera,
  BadgeIndianRupee,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Private Taxi",
    eyebrow: "Personal Mobility",
    description:
      "Comfortable and professionally managed transportation designed around your personal schedule and destination.",
    icon: Car,
    accent: "teal",
  },
  {
    number: "02",
    title: "Airport Transfers",
    eyebrow: "Seamless Arrivals",
    description:
      "Reliable airport pickups and drop-offs designed to make every journey smooth, punctual and stress-free.",
    icon: Plane,
    accent: "gold",
  },
  {
    number: "03",
    title: "Railway Transfers",
    eyebrow: "Connected Journeys",
    description:
      "Convenient transportation to and from railway stations with comfort and dependable travel assistance.",
    icon: TrainFront,
    accent: "teal",
  },
  {
    number: "04",
    title: "Corporate Travel",
    eyebrow: "Business Mobility",
    description:
      "Professional transportation solutions for executives, corporate teams, delegates and important events.",
    icon: BriefcaseBusiness,
    accent: "gold",
  },
  {
    number: "05",
    title: "Holiday Packages",
    eyebrow: "Beautiful Escapes",
    description:
      "Carefully planned holiday experiences that combine comfort, discovery and unforgettable destinations.",
    icon: Palmtree,
    accent: "gold",
  },
  {
    number: "06",
    title: "Customized Tours",
    eyebrow: "Travel Your Way",
    description:
      "Personalized travel itineraries created around your interests, preferred destinations and schedule.",
    icon: Map,
    accent: "teal",
  },
  {
    number: "07",
    title: "Hotel Reservations",
    eyebrow: "Comfortable Stays",
    description:
      "Assistance with selecting comfortable accommodation that perfectly fits your travel plans and preferences.",
    icon: Hotel,
    accent: "gold",
  },
  {
    number: "08",
    title: "Group & Family Tours",
    eyebrow: "Together We Travel",
    description:
      "Well-organized travel experiences designed for families, friends and groups travelling together.",
    icon: Users,
    accent: "teal",
  },
  {
    number: "09",
    title: "Pilgrimage Tours",
    eyebrow: "Meaningful Journeys",
    description:
      "Thoughtfully arranged spiritual journeys focused on comfort, convenience and peaceful travel.",
    icon: Landmark,
    accent: "gold",
  },
  {
    number: "10",
    title: "Sightseeing Tours",
    eyebrow: "Discover More",
    description:
      "Explore iconic landmarks, hidden gems and memorable destinations with comfortable local travel.",
    icon: Camera,
    accent: "teal",
  },

  /* =====================================================
      PREMIUM FOREIGN EXCHANGE SERVICE
  ===================================================== */

  {
    number: "11",
    title: "Foreign Exchange Assistance",
    eyebrow: "Travel Currency Solutions",
    description:
      "Convenient travel currency assistance designed to help you prepare for international journeys with confidence, comfort and complete travel readiness.",
    icon: BadgeIndianRupee,
    accent: "premium",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-24 sm:py-28 lg:py-32">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute -left-64 top-[20%] h-[600px] w-[600px] rounded-full border border-[#d9a737]/10" />

      <div className="pointer-events-none absolute -right-64 bottom-[10%] h-[700px] w-[700px] rounded-full border border-[#14596a]/10" />

      <div className="pointer-events-none absolute left-1/2 top-[10%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#d9a737]/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d9a737]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#14596a]">
              What We Offer
            </span>

            <span className="h-px w-10 bg-[#d9a737]" />
          </div>

          <h2 className="mt-6 font-serif text-[40px] font-bold leading-tight text-[#123f55] sm:text-5xl lg:text-[60px]">
            Travel Services For

            <span className="block italic font-medium text-[#d9a737]">
              Every Kind Of Journey.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#687276]">
            Whether you are travelling for business, leisure, family or
            exploration, our services are designed to make your journey
            easier from beginning to end.
          </p>
        </div>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            const isGold = service.accent === "gold";

            const isPremium =
              service.accent === "premium";

            return (
              <article
                key={service.number}
                className={`group relative min-h-[370px] overflow-hidden rounded-[32px] border p-7 transition-all duration-500 sm:p-8 ${
                  isPremium
                    ? "border-[#d9a737]/35 bg-gradient-to-br from-[#082f3a] via-[#123f55] to-[#14596a] shadow-[0_25px_70px_rgba(18,63,85,0.22)] hover:-translate-y-2 hover:border-[#d9a737]/70 hover:shadow-[0_35px_90px_rgba(18,63,85,0.30)]"
                    : "border-[#dfd9ce] bg-[#fbfaf8] hover:-translate-y-2 hover:border-[#d9a737]/50 hover:bg-white hover:shadow-[0_30px_70px_rgba(18,63,85,0.12)]"
                }`}
              >
                {/* =====================================================
                    PREMIUM FOREIGN EXCHANGE BACKGROUND
                ===================================================== */}

                {isPremium && (
                  <>
                    {/* GOLD GLOW */}

                    <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#d9a737]/15 blur-[90px]" />

                    <div className="pointer-events-none absolute -bottom-32 -left-32 h-[280px] w-[280px] rounded-full bg-[#14596a]/60 blur-[100px]" />

                    {/* PREMIUM GRID */}

                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.045]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />

                    {/* TOP GOLD LINE */}

                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#d9a737] to-transparent" />

                    {/* PREMIUM BADGE */}

                    <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-[#d9a737]/30 bg-[#d9a737]/10 px-3 py-1.5 backdrop-blur-md">
                      <Sparkles
                        size={10}
                        className="text-[#f3cf73]"
                      />

                      <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#f3cf73]">
                        International Travel
                      </span>
                    </div>
                  </>
                )}

                {/* =====================================================
                    BACKGROUND NUMBER
                ===================================================== */}

                <span
                  className={`pointer-events-none absolute right-4 top-[-10px] font-serif text-[110px] font-bold leading-none tracking-[-0.08em] ${
                    isPremium
                      ? "text-white/[0.05]"
                      : isGold
                      ? "text-[#d9a737]/[0.05]"
                      : "text-[#123f55]/[0.035]"
                  }`}
                >
                  {service.number}
                </span>

                {/* =====================================================
                    ICON
                ===================================================== */}

                <div
                  className={`relative flex h-[64px] w-[64px] items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 ${
                    isPremium
                      ? "border-[#d9a737]/50 bg-[#d9a737]/15 text-[#f3cf73] shadow-[0_0_35px_rgba(217,167,55,0.16)]"
                      : isGold
                      ? "border-[#d9a737]/30 bg-[#fbf4e3] text-[#c99528]"
                      : "border-[#14596a]/20 bg-[#eaf3f4] text-[#14596a]"
                  }`}
                >
                  {/* INNER RING */}

                  <div
                    className={`absolute inset-[5px] rounded-full border ${
                      isPremium
                        ? "border-[#d9a737]/25"
                        : isGold
                        ? "border-[#d9a737]/20"
                        : "border-[#14596a]/15"
                    }`}
                  />

                  <Icon
                    size={25}
                    strokeWidth={1.6}
                    className="relative z-10"
                  />
                </div>

                {/* =====================================================
                    EYEBROW
                ===================================================== */}

                <div className="relative mt-8 flex items-center gap-3">
                  <span
                    className={`h-px w-9 transition-all duration-500 group-hover:w-14 ${
                      isPremium
                        ? "bg-[#d9a737]"
                        : isGold
                        ? "bg-[#d9a737]"
                        : "bg-[#14596a]"
                    }`}
                  />

                  <span
                    className={`text-[9px] font-bold uppercase tracking-[0.22em] ${
                      isPremium
                        ? "text-[#f3cf73]"
                        : isGold
                        ? "text-[#b98a2c]"
                        : "text-[#14596a]"
                    }`}
                  >
                    {service.eyebrow}
                  </span>
                </div>

                {/* =====================================================
                    TITLE
                ===================================================== */}

                <h3
                  className={`relative mt-6 font-serif text-[28px] font-bold leading-tight sm:text-[30px] ${
                    isPremium
                      ? "text-white"
                      : "text-[#123f55]"
                  }`}
                >
                  {service.title}
                </h3>

                {/* =====================================================
                    DESCRIPTION
                ===================================================== */}

                <p
                  className={`relative mt-4 max-w-[340px] text-[14px] leading-7 ${
                    isPremium
                      ? "text-[#c7d7db]"
                      : "text-[#687276]"
                  }`}
                >
                  {service.description}
                </p>

                {/* =====================================================
                    PREMIUM CURRENCY CHIPS
                ===================================================== */}

                {isPremium && (
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {["USD", "EUR", "GBP", "AED"].map(
                      (currency) => (
                        <span
                          key={currency}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[8px] font-bold tracking-[0.16em] text-[#f3cf73] backdrop-blur-sm transition-all duration-300 hover:border-[#d9a737]/50 hover:bg-[#d9a737]/10"
                        >
                          {currency}
                        </span>
                      )
                    )}
                  </div>
                )}

                {/* =====================================================
                    BOTTOM SECTION
                ===================================================== */}

                <div className="absolute bottom-0 left-7 right-7 sm:left-8 sm:right-8">
                  <div
                    className={`h-px ${
                      isPremium
                        ? "bg-white/10"
                        : "bg-[#ded8cd]"
                    }`}
                  />

                  <div className="flex items-center justify-between py-5">
                    <span
                      className={`text-[8px] font-bold uppercase tracking-[0.28em] ${
                        isPremium
                          ? "text-white/45"
                          : "text-[#8a9496]"
                      }`}
                    >
                      Global Horizon
                    </span>

                    <div className="flex items-center gap-2">
                      {isPremium && (
                        <span className="text-[7px] font-semibold uppercase tracking-[0.15em] text-[#d9a737]/70">
                          Travel Ready
                        </span>
                      )}

                      <span
                        className={`h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150 ${
                          isPremium
                            ? "bg-[#d9a737]"
                            : isGold
                            ? "bg-[#d9a737]"
                            : "bg-[#14596a]"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM PREMIUM SIGNATURE
        ===================================================== */}

        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center sm:mt-20">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#d9a737]/40" />

            <Sparkles
              size={13}
              className="text-[#d9a737]"
            />

            <span className="h-px w-12 bg-[#d9a737]/40" />
          </div>

          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#8b9698]">
            Every Journey. Thoughtfully Planned.
          </p>
        </div>
      </div>
    </section>
  );
}