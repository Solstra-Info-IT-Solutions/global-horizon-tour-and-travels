"use client";

import { useState } from "react";
import {
  Palmtree,
  Heart,
  Users,
  Mountain,
  Globe2,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Experiences", icon: Globe2 },
  { id: "honeymoon", label: "Honeymoon", icon: Heart },
  { id: "family", label: "Family", icon: Users },
  { id: "adventure", label: "Adventure", icon: Mountain },
  { id: "holiday", label: "Holiday", icon: Palmtree },
];

export default function TourCategories() {
  const [active, setActive] = useState("all");

  return (
    <section className="relative border-b border-[#e7e1d7] bg-[#f7f5f1] py-8">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon;

            const isActive = active === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                  isActive
                    ? "border-[#e7ae3c] bg-[#e7ae3c] text-[#0e4655]"
                    : "border-[#d8d2c8] bg-white text-[#5f6f73] hover:border-[#e7ae3c]/60 hover:text-[#0e4655]"
                }`}
              >
                <Icon size={14} />

                {category.label}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}