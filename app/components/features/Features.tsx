"use client";
import { Button } from "@/components/ui/button";
import SectionTitle from "../shared/SectionTitle";
import { features } from "./features-data";
import { useState } from "react";
import FeatureCard from "./FeatureCard";
import Container from "../shared/Container";
import bg from "@/public/assets/section-image/section-bg.gif";

export default function Features() {
  const [visible, setVisible] = useState(6);

  const featuresData = features.slice(0, visible);
  const hasMore = features.length > visible;

  return (
    <section className="relative" style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="absolute inset-0 bg-[#805CC2]/60" />
      <Container className="relative z-10 px-2 py-10 2xl:p-0">
        <div className="py-10">
          <SectionTitle
            className="text-white"
            title="আমাদের ফিচারসমূহ"
            subtitle="আপনার ব্যবসাকে আরও গতিশীল ও লাভজনক করতে আমরা নিয়ে এসেছি আধুনিক প্রযুক্তি ও উদ্ভাবনী সমাধান।"
          />

          {/* Feature Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center pt-10">
              <Button
                variant="outline"
                className="rounded-none"

                onClick={() => setVisible((prev) => prev + 6)}
              >
                আরও দেখুন
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
