const clients = [
  {
    image: "/5.png",
    alt: "Happy travelers enjoying their journey",
  },
  {
    image: "/2.png",
    alt: "Happy clients travel experience",
  },
  {
    image: "/4.png",
    alt: "Travel memories with our clients",
  },
  {
    image: "/1.png",
    alt: "Satisfied travelers",
  },
  {
    image: "/3.png",
    alt: "Memorable travel moments",
  },
];

export default function HappyClients() {
  return (
    <section className="relative overflow-hidden bg-[#14596a] px-6 py-20 md:px-10 md:py-24 lg:px-20">
      
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#efb83f]/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mb-14 text-center md:mb-20">

          {/* Top Accent */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#efb83f]/70" />

            <span className="h-2 w-2 rotate-45 bg-[#efb83f]" />

            <span className="h-px w-10 bg-[#efb83f]/70" />
          </div>

          <p className="text-[12px] font-semibold tracking-[2.5px] text-[#efb83f] md:text-[14px]">
            MAKE YOUR TOUR MORE PLEASURE
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
            Our Happy Clients
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-[15px]">
            Beautiful journeys, unforgettable experiences and memories shared
            with travelers who chose to explore with us.
          </p>
        </div>

        {/* ================= CLIENT GALLERY ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.12fr_1fr] md:items-center md:gap-7">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5 md:gap-7">

            <GalleryImage
              src={clients[0].image}
              alt={clients[0].alt}
              height="h-[230px]"
            />

            <GalleryImage
              src={clients[3].image}
              alt={clients[3].alt}
              height="h-[230px]"
            />

          </div>

          {/* CENTER IMAGE */}
          <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-2 shadow-[0_25px_70px_rgba(0,0,0,0.25)]">

            <div className="relative h-[480px] overflow-hidden rounded-[14px] md:h-[520px]">

              <img
                src={clients[1].image}
                alt={clients[1].alt}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              {/* Center Label */}
              <div className="absolute bottom-6 left-6">
                <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
                  <span className="text-xs font-medium tracking-[1.5px] text-white">
                    MEMORIES THAT LAST FOREVER
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5 md:gap-7">

            <GalleryImage
              src={clients[2].image}
              alt={clients[2].alt}
              height="h-[230px]"
            />

            <GalleryImage
              src={clients[4].image}
              alt={clients[4].alt}
              height="h-[230px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}


/* ================= REUSABLE IMAGE COMPONENT ================= */

function GalleryImage({
  src,
  alt,
  height,
}: {
  src: string;
  alt: string;
  height: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-white/5 p-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">

      <div className={`relative ${height} overflow-hidden rounded-[13px]`}>

        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80 transition duration-500 group-hover:opacity-40" />

      </div>

    </div>
  );
}