"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  Map,
  Plane,
  Car,
  Images,
  CircleHelp,
  Sparkles,
} from "lucide-react";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Destinations", href: "/destinations" },
  { name: "Contact Us", href: "/contact" },
];

const exploreLinks = [
  {
    name: "Tour Packages",
    description: "Curated travel experiences",
    href: "/tour-packages",
    icon: Map,
  },
  {
    name: "Tours & Experiences",
    description: "Discover unforgettable journeys",
    href: "/tours",
    icon: Plane,
  },
  {
    name: "Transport Services",
    description: "Comfortable travel solutions",
    href: "/transport",
    icon: Car,
  },
  {
    name: "Gallery",
    description: "Moments from our journeys",
    href: "/gallery",
    icon: Images,
  },
  {
    name: "FAQ",
    description: "Answers to common questions",
    href: "/faq",
    icon: CircleHelp,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const pathname = usePathname();
  const exploreRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href;
  };

  const isExploreActive = exploreLinks.some(
    (link) => pathname === link.href
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target as Node)
      ) {
        setIsExploreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsExploreOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[100] w-full">
      <nav className="relative border-b border-[#123f55]/10 bg-[#faf9f5]/95 backdrop-blur-xl">
        
        {/* PREMIUM TOP GOLD LINE */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9a737]/70 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-14">
          
          {/* =====================================================
              MAIN NAVBAR
          ====================================================== */}

          <div className="flex h-[74px] items-center justify-between sm:h-[82px] lg:h-[88px]">

            {/* =====================================================
                LOGO
            ====================================================== */}

            <Link
              href="/"
              className="group flex min-w-0 shrink-0 items-center gap-3"
            >
              {/* LOGO */}

              <div className="relative flex h-[44px] w-[44px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d9a737]/30 bg-white shadow-[0_6px_20px_rgba(18,63,85,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#d9a737]/70 sm:h-[48px] sm:w-[48px]">
                <img
                  src="/logo.png"
                  alt="Global Horizons Tours & Travels"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* BRAND */}

              <div className="hidden min-w-0 flex-col xl:flex">
                <span className="truncate font-serif text-[17px] font-bold leading-tight text-[#123f55]">
                  Global Horizons Tours & Travels
                </span>

                <div className="mt-1.5 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#d9a737]" />

                  <span className="text-[8px] font-semibold uppercase tracking-[2.3px] text-[#123f55]/55">
                    Explore The World
                  </span>
                </div>
              </div>
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION
            ====================================================== */}

            <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
              
              <div className="flex items-center rounded-full border border-[#123f55]/10 bg-[#f4f2ed] p-1 shadow-[0_6px_25px_rgba(18,63,85,0.03)]">

                {/* HOME */}

                <DesktopNavLink
                  href="/"
                  active={isActive("/")}
                >
                  Home
                </DesktopNavLink>


                {/* ABOUT */}

                <DesktopNavLink
                  href="/about"
                  active={isActive("/about")}
                >
                  About Us
                </DesktopNavLink>


                {/* SERVICES */}

                <DesktopNavLink
                  href="/services"
                  active={isActive("/services")}
                >
                  Services
                </DesktopNavLink>


                {/* DESTINATIONS */}

                <DesktopNavLink
                  href="/destinations"
                  active={isActive("/destinations")}
                >
                  Destinations
                </DesktopNavLink>


                {/* =====================================================
                    EXPLORE DROPDOWN
                ====================================================== */}

                <div
                  ref={exploreRef}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setIsExploreOpen(!isExploreOpen)
                    }
                    className={`group relative flex h-[44px] items-center gap-1.5 rounded-full px-4 text-[12px] font-medium transition-all duration-300 xl:px-5 xl:text-[13px] ${
                      isExploreActive
                        ? "bg-white text-[#123f55] shadow-[0_5px_18px_rgba(18,63,85,0.10)]"
                        : "text-[#657176] hover:bg-white/70 hover:text-[#123f55]"
                    }`}
                    aria-expanded={isExploreOpen}
                  >
                    <span className="relative z-10 whitespace-nowrap">
                      Explore
                    </span>

                    <ChevronDown
                      size={14}
                      className={`relative z-10 transition-transform duration-300 ${
                        isExploreOpen ? "rotate-180" : ""
                      }`}
                    />

                    {/* GOLD INDICATOR */}

                    <span
                      className={`absolute bottom-[7px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#d9a737] transition-all duration-300 ${
                        isExploreActive
                          ? "w-5"
                          : "w-0 group-hover:w-5"
                      }`}
                    />
                  </button>


                  {/* DROPDOWN */}

                  <div
                    className={`absolute left-1/2 top-[58px] w-[310px] -translate-x-1/2 overflow-hidden rounded-[22px] border border-[#e5ded3] bg-[#fffefd] p-2 shadow-[0_25px_70px_rgba(18,63,85,0.16)] transition-all duration-300 ${
                      isExploreOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    {/* DROPDOWN HEADER */}

                    <div className="px-4 pb-3 pt-3">
                      <div className="flex items-center gap-2.5">
                        <Sparkles
                          size={13}
                          className="text-[#d9a737]"
                        />

                        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#14596a]">
                          Explore Global Horizons
                        </span>
                      </div>
                    </div>


                    <div className="space-y-1">
                      {exploreLinks.map((link) => {
                        const Icon = link.icon;
                        const active = isActive(link.href);

                        return (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() =>
                              setIsExploreOpen(false)
                            }
                            className={`group/item flex items-center gap-3 rounded-[16px] px-3 py-3 transition-all duration-300 ${
                              active
                                ? "bg-[#123f55] text-white"
                                : "hover:bg-[#f6f3ed]"
                            }`}
                          >
                            {/* ICON */}

                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                                active
                                  ? "bg-white/10 text-[#e7ae3c]"
                                  : "bg-[#14596a]/7 text-[#14596a]"
                              }`}
                            >
                              <Icon
                                size={17}
                                strokeWidth={1.7}
                              />
                            </div>


                            {/* TEXT */}

                            <div className="min-w-0 flex-1">
                              <p
                                className={`text-[12px] font-semibold ${
                                  active
                                    ? "text-white"
                                    : "text-[#123f55]"
                                }`}
                              >
                                {link.name}
                              </p>

                              <p
                                className={`mt-0.5 text-[10px] ${
                                  active
                                    ? "text-white/60"
                                    : "text-[#7d8789]"
                                }`}
                              >
                                {link.description}
                              </p>
                            </div>


                            <ChevronRight
                              size={16}
                              className={`transition-transform duration-300 ${
                                active
                                  ? "text-[#e7ae3c]"
                                  : "text-[#aab1b2] group-hover/item:translate-x-1 group-hover/item:text-[#14596a]"
                              }`}
                            />
                          </Link>
                        );
                      })}
                    </div>


                    {/* DROPDOWN FOOTER */}

                    <div className="mt-2 flex items-center justify-center gap-2 border-t border-[#e7e1d7] px-3 pb-2 pt-3">
                      <span className="h-px w-6 bg-[#d9a737]/50" />

                      <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#9ba2a3]">
                        Travel Beyond Ordinary
                      </span>

                      <span className="h-px w-6 bg-[#d9a737]/50" />
                    </div>
                  </div>
                </div>


                {/* CONTACT */}

                <DesktopNavLink
                  href="/contact"
                  active={isActive("/contact")}
                >
                  Contact Us
                </DesktopNavLink>

              </div>
            </div>


            {/* =====================================================
                DESKTOP CTA
            ====================================================== */}

            <div className="hidden shrink-0 items-center lg:flex">
              <Link
                href="/enquiry"
                className="group relative inline-flex h-[46px] items-center justify-center overflow-hidden rounded-full bg-[#123f55] px-5 xl:px-6 text-[9px] font-bold uppercase tracking-[1.3px] text-white shadow-[0_10px_28px_rgba(18,63,85,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(18,63,85,0.25)]"
              >
                <span className="absolute inset-0 translate-x-[-105%] bg-[#d9a737] transition-transform duration-500 group-hover:translate-x-0" />

                <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover:text-[#123f55]">
                  Plan Your Journey

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>


            {/* =====================================================
                MOBILE MENU BUTTON
            ====================================================== */}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
                isOpen
                  ? "border-[#123f55] bg-[#123f55] text-white"
                  : "border-[#123f55]/15 bg-white text-[#123f55] shadow-sm"
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={21} />}
            </button>

          </div>


          {/* =====================================================
              MOBILE MENU
          ====================================================== */}

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
              isOpen
                ? "max-h-[900px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-6 pt-2">

              <div className="relative overflow-hidden rounded-[24px] border border-[#e5ded3] bg-[#fffefd] p-3 shadow-[0_20px_60px_rgba(18,63,85,0.12)]">

                {/* TOP ACCENT */}

                <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#123f55] via-[#d9a737] to-[#123f55]" />


                {/* HEADER */}

                <div className="flex items-center gap-3 px-4 pb-3 pt-4">
                  <span className="h-[2px] w-8 bg-[#d9a737]" />

                  <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#14596a]">
                    Explore Our World
                  </span>
                </div>


                {/* =====================================================
                    MAIN LINKS
                ====================================================== */}

                <div className="space-y-1">

                  {mainLinks.slice(0, 4).map((link, index) => (
                    <MobileNavLink
                      key={link.name}
                      href={link.href}
                      label={link.name}
                      index={index + 1}
                      active={isActive(link.href)}
                      onClick={() => setIsOpen(false)}
                    />
                  ))}

                </div>


                {/* =====================================================
                    EXPLORE SECTION
                ====================================================== */}

                <div className="mx-4 my-4 h-px bg-gradient-to-r from-transparent via-[#d9a737]/30 to-transparent" />

                <div className="px-4 pb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={12}
                      className="text-[#d9a737]"
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#14596a]">
                      More To Explore
                    </span>
                  </div>
                </div>


                <div className="space-y-1">
                  {exploreLinks.map((link, index) => {
                    const Icon = link.icon;
                    const active = isActive(link.href);

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between rounded-[14px] px-4 py-3 transition-all duration-300 ${
                          active
                            ? "bg-[#123f55] text-white"
                            : "text-[#536166] hover:bg-[#f7f5ef]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              active
                                ? "bg-white/10 text-[#e7ae3c]"
                                : "bg-[#14596a]/7 text-[#14596a]"
                            }`}
                          >
                            <Icon size={15} />
                          </div>

                          <span className="text-[13px] font-semibold">
                            {link.name}
                          </span>
                        </div>

                        <span
                          className={`text-[9px] font-bold ${
                            active
                              ? "text-[#e7ae3c]"
                              : "text-[#9da5a6]"
                          }`}
                        >
                          {String(index + 5).padStart(2, "0")}
                        </span>
                      </Link>
                    );
                  })}
                </div>


                {/* CONTACT */}

                <div className="mt-1">
                  <MobileNavLink
                    href="/contact"
                    label="Contact Us"
                    index={10}
                    active={isActive("/contact")}
                    onClick={() => setIsOpen(false)}
                  />
                </div>


                {/* DIVIDER */}

                <div className="mx-4 my-4 h-px bg-gradient-to-r from-transparent via-[#d9a737]/30 to-transparent" />


                {/* CTA */}

                <Link
                  href="/enquiry"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex h-[56px] items-center justify-center gap-3 overflow-hidden rounded-[16px] bg-[#123f55] text-[10px] font-bold uppercase tracking-[1.7px] text-white shadow-[0_10px_25px_rgba(18,63,85,0.18)]"
                >
                  <span className="absolute inset-0 translate-y-full bg-[#d9a737] transition-transform duration-500 group-hover:translate-y-0" />

                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-[#123f55]">
                    Plan Your Journey

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>


                {/* FOOTER */}

                <div className="flex items-center justify-center gap-3 pb-2 pt-5">
                  <span className="h-px w-7 bg-[#d9a737]/40" />

                  <span className="text-[8px] font-semibold uppercase tracking-[2px] text-[#a0a8aa]">
                    Travel Beyond Ordinary
                  </span>

                  <span className="h-px w-7 bg-[#d9a737]/40" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}


/* =====================================================
    DESKTOP NAV LINK
===================================================== */

function DesktopNavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex h-[44px] items-center justify-center rounded-full px-4 text-[12px] font-medium transition-all duration-300 xl:px-5 xl:text-[13px] ${
        active
          ? "bg-white text-[#123f55] shadow-[0_5px_18px_rgba(18,63,85,0.10)]"
          : "text-[#657176] hover:bg-white/70 hover:text-[#123f55]"
      }`}
    >
      <span className="relative z-10 whitespace-nowrap">
        {children}
      </span>

      <span
        className={`absolute bottom-[7px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#d9a737] transition-all duration-300 ${
          active
            ? "w-5"
            : "w-0 group-hover:w-5"
        }`}
      />
    </Link>
  );
}


/* =====================================================
    MOBILE NAV LINK
===================================================== */

function MobileNavLink({
  href,
  label,
  index,
  active,
  onClick,
}: {
  href: string;
  label: string;
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex items-center justify-between rounded-[14px] px-4 py-3.5 transition-all duration-300 ${
        active
          ? "bg-[#123f55] text-white shadow-[0_8px_20px_rgba(18,63,85,0.15)]"
          : "text-[#536166] hover:bg-[#f7f5ef] hover:text-[#123f55]"
      }`}
    >
      <div className="flex items-center gap-3.5">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold ${
            active
              ? "bg-white/10 text-[#e5b34d]"
              : "bg-[#14596a]/7 text-[#14596a]/60"
          }`}
        >
          {String(index).padStart(2, "0")}
        </span>

        <span className="text-[14px] font-semibold">
          {label}
        </span>
      </div>

      <ChevronRight
        size={17}
        className={`transition-all duration-300 ${
          active
            ? "text-[#e5b34d]"
            : "text-[#aab1b2] group-hover:translate-x-1 group-hover:text-[#14596a]"
        }`}
      />
    </Link>
  );
}