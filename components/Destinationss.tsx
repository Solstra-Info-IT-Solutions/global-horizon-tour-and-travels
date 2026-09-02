import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const destinations = [
  {
    title: "Ellora Caves",
    tag: "UNESCO Heritage",
    description:
      "Marvel at the monolithic Kailasa temple, a masterpiece of ancient Indian architecture and craftsmanship.",
    image: "/Container1.png",
    tagColor: "gold",
  },
  {
    title: "Bibi Ka Maqbara",
    tag: "Mughal Architecture",
    description:
      "Discover the Taj of the Deccan, a magnificent seventeenth-century monument with timeless elegance.",
    image: "/Container2.png",
    tagColor: "blue",
  },
  {
    title: "Daulatabad Fort",
    tag: "Historic Fort",
    description:
      "Explore the formidable hill fortress renowned for its fascinating history and ingenious architecture.",
    image: "/Container3.png",
    tagColor: "gold",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-[#faf9f5] px-6 py-24 md:px-10 lg:px-20"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#125467]/[0.03] blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#e6b442]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          {/* Left Content */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#e6b442]" />

              <p className="text-xs font-semibold tracking-[3px] text-[#125467]">
                ICONIC LANDMARKS
              </p>
            </div>

            {/* Title */}
            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#123f55] md:text-4xl">
              Curated{" "}
              <span className="italic text-[#b9471e]">
                Destinations
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-[16px] leading-7 text-gray-600">
              Discover extraordinary destinations where history, culture and
              unforgettable experiences come together.
            </p>
          </div>

          {/* View All */}
          <Link
            href="/destinations"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#125467]/30 pb-2 text-sm font-semibold tracking-wide text-[#125467] transition hover:border-[#b9471e] hover:text-[#b9471e]"
          >
            EXPLORE ALL DESTINATIONS

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#125467]/20 transition duration-300 group-hover:border-[#b9471e] group-hover:bg-[#b9471e] group-hover:text-white">
              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {destinations.map((destination, index) => (
            <article
              key={destination.title}
              className="group relative overflow-hidden rounded-2xl border border-[#125467]/[0.08] bg-white transition duration-500 hover:-translate-y-2 hover:border-[#125467]/20 hover:shadow-[0_25px_60px_rgba(18,63,85,0.15)]"
            >

              {/* Image */}
              <div className="relative h-[330px] overflow-hidden">

                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* Premium Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062f3b]/70 via-transparent to-black/10" />

                {/* Number */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-sm font-serif font-bold text-white backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* Tag */}
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-[#125467] shadow-lg backdrop-blur-md">

                    <span
                      className={`h-2 w-2 rounded-full ${
                        destination.tagColor === "gold"
                          ? "bg-[#e6b442]"
                          : "bg-[#125467]"
                      }`}
                    />

                    {destination.tag}
                  </span>
                </div>

                {/* Bottom Location Label */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm text-white">
                  <MapPin
                    size={16}
                    className="text-[#e6b442]"
                  />

                  <span className="font-medium">
                    Maharashtra, India
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative px-7 py-7">

                {/* Decorative Line */}
                <div className="mb-5 h-[2px] w-10 bg-[#e6b442] transition-all duration-500 group-hover:w-16" />

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-[#123f55] transition group-hover:text-[#b9471e]">
                  {destination.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-7 text-gray-600">
                  {destination.description}
                </p>

                {/* Explore */}
                <Link
                  href="/destinations"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[1.5px] text-[#125467] transition hover:text-[#b9471e]"
                >
                  EXPLORE DESTINATION

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#b9471e] to-[#e6b442] transition-all duration-500 group-hover:w-full" />

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}