"use client";

import { FormEvent, useState } from "react";
import { Send, ShieldCheck, Loader2 } from "lucide-react";

import JourneyDetails from "./JourneyDetails";
import VehicleDetails from "./VehicleDetails";
import CustomerDetails from "./CustomerDetails";
import QuoteSuccessModal from "./QuoteSuccessModal";

export type TransportFormData = {
  journeyType: string;

  pickupLocation: string;
  dropLocation: string;

  departureDate: string;
  departureTime: string;

  returnDate: string;
  returnTime: string;

  vehicleType: string;
  passengers: string;
  vehicles: string;

  fullName: string;
  phone: string;
  email: string;

  requirements: string;
};

const initialFormData: TransportFormData = {
  journeyType: "one-way",

  pickupLocation: "",
  dropLocation: "",

  departureDate: "",
  departureTime: "",

  returnDate: "",
  returnTime: "",

  vehicleType: "",
  passengers: "",
  vehicles: "1",

  fullName: "",
  phone: "",
  email: "",

  requirements: "",
};

export default function TransportQuoteForm() {
  const [formData, setFormData] =
    useState<TransportFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (
    field: keyof TransportFormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      // API integration yahan connect hogi
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setIsSuccess(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Quote request failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_70px_rgba(18,63,85,0.08)]"
      >
        {/* Form Header */}

        <div className="border-b border-gray-100 px-6 py-7 sm:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7eef0] text-[#123f55]">
              <Send size={20} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#123f55]">
                Tell Us About Your Journey
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Complete the details below and receive a customized transport
                quotation from our team.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10 px-6 py-8 sm:px-8 sm:py-10">
          <JourneyDetails
            formData={formData}
            updateField={updateField}
          />

          <VehicleDetails
            formData={formData}
            updateField={updateField}
          />

          <CustomerDetails
            formData={formData}
            updateField={updateField}
          />

          {/* Submit */}

          <div className="border-t border-gray-100 pt-7">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#123f55] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#123f55]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d5069] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending Request...
                </>
              ) : (
                <>
                  Request My Transport Quote

                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </>
              )}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-gray-400">
              <ShieldCheck size={15} className="text-[#d4a139]" />

              Your information is securely shared with our travel team.
            </div>
          </div>
        </div>
      </form>

      <QuoteSuccessModal
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
      />
    </>
  );
}