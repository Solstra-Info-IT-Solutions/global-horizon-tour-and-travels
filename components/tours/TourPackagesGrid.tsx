import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    title: "Royal Rajasthan Escape",
    location: "Rajasthan, India",
    duration: "7 Days / 6 Nights",
    category: "holiday",
    travelers: "Couples & Families",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Romantic Kashmir",
    location: "Kashmir, India",
    duration: "6 Days / 5 Nights",
    category: "honeymoon",
    travelers: "Couples",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    category: "holiday",
    travelers: "Families & Couples",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Himalayan Adventure",
    location: "Himachal Pradesh",
    duration: "8 Days / 7 Nights",
    category: "adventure",
    travelers: "Adventure Travelers",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kerala Family Retreat",
    location: "Kerala, India",
    duration: "6 Days / 5 Nights",
    category: "family",
    travelers: "Families",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Goa Coastal Escape",
    location: "Goa, India",
    duration: "5 Days / 4 Nights",
    category: "holiday",
    travelers: "Friends & Couples",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function TourPackagesGrid() {
  return (
    <section className="bg-[#f7f5f1] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <Sparkles size={13} className="text-[#e7ae3c]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#14596a]">
              Featured Packages
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[38px] font-bold text-[#123f55] sm:text-5xl">
            Journeys Worth

            <span className="italic font-medium text-[#d9a737]">
              Remembering.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#687276]">
            Explore thoughtfully designed travel experiences created for
            unforgettable moments and extraordinary destinations.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((tour, index) => (
            <article
              key={tour.title}
              className="group overflow-hidden rounded-[28px] border border-[#e2ddd5] bg-white shadow-[0_15px_45px_rgba(18,63,85,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#e7ae3c]/50 hover:shadow-[0_30px_70px_rgba(18,63,85,0.14)]"
            >
              {/* Image */}

              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0e4655]/70 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#0e4655]/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  0{index + 1}
                </span>

                <span className="absolute bottom-5 left-5 rounded-full bg-[#e7ae3c] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#0e4655]">
                  {tour.category}
                </span>
              </div>

              {/* Content */}

              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-[27px] font-bold leading-tight text-[#123f55]">
                  {tour.title}
                </h3>

                <div className="mt-5 space-y-3">
                  <InfoRow
                    icon={<MapPin size={15} />}
                    text={tour.location}
                  />

                  <InfoRow
                    icon={<Clock3 size={15} />}
                    text={tour.duration}
                  />

                  <InfoRow
                    icon={<Users size={15} />}
                    text={tour.travelers}
                  />
                </div>

                <Link
                  href="/request-quote"
                  className="group/link mt-7 flex items-center justify-between border-t border-[#e5e0d8] pt-5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#14596a]">
                    Plan This Journey
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf4f5] text-[#14596a] transition-all duration-300 group-hover/link:bg-[#14596a] group-hover/link:text-white">
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-[13px] text-[#6d777a]">
      <span className="text-[#d9a737]">
        {icon}
      </span>

      {text}
    </div>
  );
}