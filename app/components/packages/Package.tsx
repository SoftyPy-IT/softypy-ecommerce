"use client";
import { ArrowRight, Check, X } from "lucide-react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import { plans } from "./package-data";
import bg from "@/public/assets/section-image/section-bg-4.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LinearButton from "../shared/actions/LinearButton";

export default function Package() {
  return (
    <section className='py-10 relative' style={{
      backgroundImage: `url(${bg.src})`, backgroundRepeat: "no-repeat",
      backgroundPosition: "center", backgroundSize: "cover"
    }}>
      <div className="absolute inset-0 bg-linear-to-br from-white/90 via-white/80 to-white/90" />
      <Container className="py-10 px-2 2xl:p-0 relative z-10">
        <SectionTitle
          title="আমাদের প্যাকেজসমূহ"
          subtitle="আপনার ব্যবসার জন্য সেরা প্যাকেজটি বেছে নিন।"
          align="center"
          highlightColor='bg-[#ad46ff]'
        />

        <div className="grid gap-8 md:grid-cols-2 mt-12 ">
          {plans.map((plan, idx) => {
            const isPremium = plan.title === "প্রিমিয়াম প্যাকেজ";

            return (
              <div
                key={idx}
                className={`
                relative flex flex-col h-[600px] rounded-lg border p-6 transition-all
                ${isPremium ? "border-[#5c9e70] shadow-xl" : "border-gray-300 shadow-lg hover:shadow-2xl"}
              `}
              >
                {/* Header */}
                <h3 className="text-[#5c9e70] text-2xl font-semibold mb-2">{plan.title}</h3>
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
                <Link href={"/contact"}>
                  <LinearButton title="শুরু করুন" icon={<ArrowRight />} iconAlign="right" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
