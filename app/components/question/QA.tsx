"use client";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import { QAItem, qaData } from "./QA-data";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import image from "@/public/assets/section-image/accordion-right.png"
import Image from "next/image";

export default function QA() {
  return (
    <section className="py-10">
      <Container className="px-2 2xl:p-0">
        <SectionTitle
          title="সর্বাধিক জিজ্ঞাসিত প্রশ্নাবলী"
          subtitle="আপনার মনে সফটওয়্যারটি নিয়ে যত প্রশ্ন আছে, তার উত্তর এখানে পাবেন।"
          align="center"
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-10">
          <div>
            <Accordion type="single" collapsible>
              {qaData.map((item: QAItem, index: number) => (
                <AccordionItem key={index} value={`qa-${index}`} className="border-b">
                  <AccordionTrigger className="text-lg">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <Image src={image} alt="accordion-right" />
          </div>
        </div>
      </Container>
    </section>
  );
}
