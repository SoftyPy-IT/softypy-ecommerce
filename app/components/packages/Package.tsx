"use client";
import { Check, X } from "lucide-react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import { plans } from "./package-data";

export default function Package() {
  return (
    <Container className="my-10 px-2 2xl:p-0">
      <SectionTitle
        title="আমাদের প্যাকেজসমূহ"
        subtitle="আপনার ব্যবসার জন্য সেরা প্যাকেজটি বেছে নিন।"
        align="center"
      />

      <div className="grid gap-8 md:grid-cols-2 mt-12">
        {plans.map((plan, idx) => {
          const isPremium = plan.title === "প্রিমিয়াম প্যাকেজ";

          return (
            <div
              key={idx}
              className={`
                relative flex flex-col h-[600px] rounded-lg border p-6 transition-all
                ${isPremium ? "border-[#540863] shadow-xl" : "border-gray-300 shadow-lg hover:shadow-2xl"}
              `}
            >
              {/* Header */}
              <h3 className="text-[#540863] text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>

              {/* Features - scrollable */}
              <ul className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="text-green-500 flex-none mt-1" />
                    ) : (
                      <X className="text-gray-400 flex-none mt-1" />
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-gray-800"
                          : "text-gray-400 line-through"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`
                  mt-auto w-full py-3 rounded-lg font-medium transition-colors
                  ${isPremium
                    ? "bg-[#540863] text-white hover:bg-[#43064f]"
                    : "border border-[#540863] text-[#540863] hover:bg-[#540863] hover:text-white"
                  }
                `}
              >
                {plan.title} শুরু করুন
              </button>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
