import {
  MapPinned,
  Camera,
  Heart,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Destinations",
    icon: MapPinned,
  },
  {
    value: "500+",
    label: "Travel Memories",
    icon: Camera,
  },
  {
    value: "100+",
    label: "Happy Journeys",
    icon: Heart,
  },
  {
    value: "∞",
    label: "Beautiful Moments",
    icon: Sparkles,
  },
];

export default function GalleryStats() {
  return (
    <section className="relative border-b border-[#e5dfd6] bg-[#f7f5f1] py-14">

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-[22px] border border-[#e2ddd5] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#edf4f5] text-[#14596a]">
                  <Icon size={20} />
                </div>

                <p className="mt-4 font-serif text-[30px] font-bold text-[#123f55]">
                  {stat.value}
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7b8588]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}