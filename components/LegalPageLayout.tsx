import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ChevronRight,
  FileText,
  ShieldCheck,
} from "lucide-react";

type LegalSection = {
  title: string;
  content?: string[];
  points?: string[];
};

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated?: string;
  sections: LegalSection[];
};

export default function LegalPageLayout({
  eyebrow,
  title,
  description,
  lastUpdated = "September 2026",
  sections,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f7f5f1]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <Navbar/>
      <section className="relative overflow-hidden bg-[#0e4655] pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

          <div className="absolute right-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-[#e7ae3c]/[0.04] blur-[100px]" />

          <div className="absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full border border-[#e7ae3c]/[0.08]" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
          {/* Back Button */}

          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#b8cbd0] transition-colors hover:text-[#e7ae3c]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] transition-all duration-300 group-hover:border-[#e7ae3c] group-hover:bg-[#e7ae3c]/10">
              <ArrowLeft size={16} />
            </span>

            Back To Home
          </Link>

          {/* Content */}

          <div className="mt-14 max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#e7ae3c]" />

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={14}
                  className="text-[#e7ae3c]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e7ae3c]">
                  {eyebrow}
                </span>
              </div>
            </div>

            <h1 className="mt-7 font-serif text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[68px]">
              {title}
            </h1>

            <p className="mt-7 max-w-3xl text-[15px] leading-8 text-[#b8cbd0] sm:text-[17px]">
              {description}
            </p>

            <div className="mt-9 inline-flex items-center gap-3 border border-white/[0.10] bg-white/[0.04] px-5 py-3 backdrop-blur-sm">
              <FileText
                size={16}
                className="text-[#e7ae3c]"
              />

              <span className="text-[11px] text-[#b8cbd0]">
                Last Updated:
              </span>

              <span className="text-[11px] font-semibold text-white">
                {lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-20 lg:px-10">
          {/* Sidebar */}

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#b98a2c]">
                Legal Information
              </p>

              <div className="mt-5 h-px w-full bg-[#d9d4ca]" />

              <p className="mt-5 text-[13px] leading-6 text-[#687276]">
                Please read this information carefully before using our
                services or making a booking.
              </p>
            </div>
          </aside>

          {/* Main */}

          <div className="min-w-0">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <article
                  key={section.title}
                  className="relative"
                >
                  {/* Number */}

                  <div className="flex items-start gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9a737]/30 bg-[#fbf4e3] text-[11px] font-bold text-[#b98a2c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h2 className="font-serif text-[28px] font-bold leading-tight text-[#123f55] sm:text-[32px]">
                        {section.title}
                      </h2>

                      {/* Paragraphs */}

                      {section.content && (
                        <div className="mt-5 space-y-4">
                          {section.content.map((paragraph, paragraphIndex) => (
                            <p
                              key={paragraphIndex}
                              className="text-[14px] leading-7 text-[#687276] sm:text-[15px] sm:leading-8"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Points */}

                      {section.points && (
                        <div className="mt-6 space-y-3">
                          {section.points.map((point, pointIndex) => (
                            <div
                              key={pointIndex}
                              className="flex gap-4 rounded-2xl border border-[#e5e0d7] bg-white p-4 sm:p-5"
                            >
                              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eaf3f4] text-[#14596a]">
                                <ChevronRight size={13} />
                              </span>

                              <p className="text-[13px] leading-6 text-[#687276] sm:text-[14px]">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {index !== sections.length - 1 && (
                    <div className="ml-[20px] mt-10 h-px bg-[#ded8ce]" />
                  )}
                </article>
              ))}
            </div>

            {/* Contact Box */}

            <div className="mt-16 rounded-[28px] border border-[#d9a737]/25 bg-[#123f55] p-7 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#e7ae3c]">
                    Need Assistance?
                  </p>

                  <h3 className="mt-3 font-serif text-[25px] font-bold text-white">
                    Questions About Our Policies?
                  </h3>

                  <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#b8cbd0]">
                    If you need clarification regarding any policy, booking
                    condition or service information, our team will be happy
                    to assist you.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#e7ae3c] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#123f55] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}