"use client";
import { Button } from "@/components/ui/button";
import SectionTitle from "../shared/SectionTitle";
import { features } from "./features-data";
import { useState } from "react";
import FeatureCard from "./FeatureCard";
import Container from "../shared/Container";

export default function Features() {
  const [visible, setVisible] = useState(6);

  const featuresData = features.slice(0, visible);
  const hasMore = features.length > visible;

  return (
    <Container className="px-2 py-10 2xl:p-0">
      <div>
        <SectionTitle
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
          <div className="flex justify-center mt-14">
            <Button
              variant="outline"

              onClick={() => setVisible((prev) => prev + 6)}
            >
              আরও দেখুন
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}
