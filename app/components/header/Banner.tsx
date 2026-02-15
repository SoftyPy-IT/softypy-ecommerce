import Container from "../shared/Container"
import Stats from "./Stats"
import banner_image from "@/public/assets/img/e-commerce.gif"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import LinearButton from "../shared/actions/LinearButton"
import Link from "next/link"

export default function Banner() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-t from-[#D2CBF1] to-[#D2E9D9]" />

      {/* Decorative curved shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,500 Q360,300 720,100 T1440,300 L1440,600 L0,600 Z"
            fill="#F9FAFBCC"
          />
        </svg>
      </div>

      <Container className="relative z-10 px-4 2xl:p-0">

        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="inline-flex items-center gap-2">
                <svg className="w-8 h-12 md:w-12 md:h-16 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                </svg>

              </span>
              ই-কমার্স ব্যবসায় সফল হতে আজই পরিবর্তন আনুন!
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যেতে আমরা আছি আপনার পাশে। আধুনিক প্রযুক্তি ও উদ্ভাবনী সমাধান দিয়ে আপনার ব্যবসাকে করুন আরও গতিশীল ও লাভজনক।
            </p>

           <Link href="/pricing">
           <LinearButton title="শুরু করুন" icon={<ArrowRight />} iconAlign="right" />
           </Link>

          </div>

          {/* Right Side - Rocket Illustration */}
          <div>
            <div className="w-full relative h-full aspect-square">
              <Image src={banner_image} alt="bg" fill className="object-contain" />
            </div>
            {/* Stats Section */}
            <Stats />
          </div>
        </div>

      </Container>
    </section>
  )
}
