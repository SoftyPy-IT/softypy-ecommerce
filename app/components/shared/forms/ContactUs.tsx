"use client";

import AppForm from "./AppFrom";
import TextInputField from "../Input-fields/TextInputField";
import TextAreaField from "../Input-fields/TextAreaField";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import contact from "@/public/assets/contact/contact_us.png";

export default function ContactUs() {
  const onSubmit = (values: any, reset: () => void) => {
    console.log(values);
    reset();
  };

  return (
    <section className="py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Contact Form */}
          <div className="bg-[#D2CBF1] shadow-lg rounded-2xl p-8 lg:p-12 transition-all duration-500">


            <AppForm onSubmit={onSubmit}>
              <div className="space-y-6">

                <TextInputField
                  name="name"
                  label="নাম"
                  placeholder="আপনার নাম লিখুন"
                />

                <TextInputField
                  name="email"
                  label="ই-মেইল"
                  placeholder="আপনার ই-মেইল লিখুন"
                />

                <TextInputField
                  name="whatsapp"
                  label="ওয়াটসঅ্যাপ"
                  placeholder="ওয়াটসঅ্যাপ নাম্বার"
                  required
                />

                <TextAreaField
                  name="message"
                  label="বার্তা"
                  placeholder="আপনার বার্তা লিখুন"
                />

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                >
                  পাঠান
                </Button>

              </div>
            </AppForm>
          </div>

          {/* Image Side */}
          <div className="relative flex justify-center">
            <Image
              src={contact}
              alt="Contact Illustration"
              className="w-full max-w-lg object-contain"
              priority
            />
          </div>

        </div>
    </section>
  );
}
