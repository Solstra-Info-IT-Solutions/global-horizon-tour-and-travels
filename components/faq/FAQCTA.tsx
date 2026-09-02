import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function FAQCTA() {
  return (
    <section className="bg-[#f7f5f1] pb-20 sm:pb-24">

      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">

        <div className="rounded-[32px] bg-[#123f55] px-6 py-14 text-center sm:px-10 sm:py-16">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e7ae3c]/10 text-[#e7ae3c]">
            <MessageCircle size={24} />
          </div>

          <h2 className="mt-6 font-serif text-[34px] font-bold text-white sm:text-5xl">
            Still Have A

            <span className="italic font-medium text-[#e7ae3c]">
              Question?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#b7cbd0]">
            Our team is here to help you plan your journey and answer your
            travel-related questions.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#e7ae3c] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0e4655] transition-all hover:-translate-y-1"
          >
            Contact Our Team

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}