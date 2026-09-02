"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I request a travel quote?",
    answer:
      "You can submit your travel requirements through our Request a Quote page. Our team will review your destination, dates, number of travellers and preferences before preparing a personalized travel proposal.",
  },
  {
    question: "Can I customize my tour package?",
    answer:
      "Yes. We can help create personalized travel experiences based on your preferred destination, travel dates, accommodation preferences, transportation requirements and planned activities.",
  },
  {
    question: "Do you provide transportation services?",
    answer:
      "Yes. Global Horizon provides private taxi services, airport transfers, railway transfers and professional transportation solutions for corporate and group travel requirements.",
  },
  {
    question: "Are transport services available for groups?",
    answer:
      "Yes. Transportation can be arranged according to your group size and journey requirements. Contact our team with your travel details to receive suitable options.",
  },
  {
    question: "How do I confirm my booking?",
    answer:
      "Once your travel plan and quotation are finalized, our team will guide you through the applicable confirmation and payment process.",
  },
  {
    question: "Can you help with international travel?",
    answer:
      "Yes. Depending on your destination and requirements, our team can assist you with planning international travel experiences and related travel arrangements.",
  },
  {
    question: "Do you provide 24/7 travel assistance?",
    answer:
      "We aim to provide travel support and assistance whenever required. The exact availability and support arrangements may depend on your confirmed travel service.",
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f7f5f1] pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">

        <div className="mb-12 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d9a737]">
            Common Questions
          </span>

          <h2 className="mt-4 font-serif text-[36px] font-bold text-[#123f55] sm:text-5xl">
            Everything You Need To

            <span className="italic font-medium text-[#d9a737]">
              Know.
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                  isOpen
                    ? "border-[#e7ae3c]/60 bg-white shadow-[0_15px_35px_rgba(18,63,85,0.08)]"
                    : "border-[#e2ddd5] bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                >
                  <span className="font-serif text-[19px] font-bold text-[#123f55] sm:text-[21px]">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf4f5] text-[#14596a]">
                    {isOpen ? (
                      <Minus size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7">
                    <div className="h-px bg-[#e8e3db]" />

                    <p className="pt-5 text-[14px] leading-7 text-[#687276]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}