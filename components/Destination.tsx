"use client";

export default function Destination() {
  return (
    <div>
      <h1 className="font-serif text-xl font-bold text-gray-800">
        Where do you want to explore?
      </h1>

      <p className="mt-3 text-[16px] leading-7 text-gray-600">
        Select your preferred regions or specific destinations. You can choose
        multiple.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: "Western Europe",
            text: "France, Italy, Spain...",
            image: "/11.jpg",
          },
          {
            title: "Southeast Asia",
            text: "Japan, Thailand, Vietnam...",
            image: "/12.jpg",
          },
          {
            title: "The Americas",
            text: "USA, Peru, Costa Rica...",
            image: "/13.jpg",
          },
          {
            title: "Africa & Mid East",
            text: "Kenya, Egypt, Morocco...",
            image: "/14.jpg",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="relative h-40 overflow-hidden rounded-xl bg-gray-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-lg">{item.title}</h2>
              <p className="text-sm">{item.text}</p>
            </div>

            <div className="absolute right-4 top-4 h-6 w-6 rounded-full border-2 border-white" />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <label className="font-serif text-sm font-bold">
          SPECIFIC LOCATIONS (OPTIONAL)
        </label>

        <input
          type="text"
          placeholder="e.g. Kyoto, Paris, Machu Picchu"
          className="mt-3 w-full rounded-lg border border-gray-300 px-4 py-4 outline-none"
        />
      </div>
    </div>
  );
}