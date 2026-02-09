import { Button } from "@/components/ui/button"
import Container from "../shared/Container"
import bg from "@/public/assets/bg/bg.jpg"
import Stats from "./Stats"
import { ArrowRightIcon } from "lucide-react"
// import bg from "@/public/assets/section-image/section-bg-4.webp"

export default function Banner() {
  return (
    <section
      style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      className="relative h-[90vh] md:h-screen bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/70 via-indigo-900/70 to-violet-800/70" />

      <div className="relative h-full w-full">
        <Container className="px-2 2xl:p-0">
          <div className="flex h-[calc(100vh-80px)] items-center justify-center px-4 text-center">
            <div className="
            space-y-12">

              <p className="text-xs md:text-sm font-semibold tracking-widest p-2 bg-linear-to-br from-blue-900/70 via-indigo-900/70 to-violet-800/70 text-white uppercase rounded-full inline-block">
                Welcome to SoftyPy Family
              </p>

              <h1 className="text-2xl md:text-4xl font-extrabold text-amber-100">
                ই-কমার্স ব্যবসায় সফল হতে আজই পরিবর্তন
                আনুন!
              </h1>

              <p className="mx-auto max-w-2xl text-slate-300 text-sm md:text-lg">
                আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যেতে আমরা আছি আপনার পাশে। আধুনিক প্রযুক্তি ও উদ্ভাবনী সমাধান দিয়ে আপনার ব্যবসাকে করুন আরও গতিশীল ও লাভজনক।
              </p>

              <div>
                <Button  className="shadow-lg hover:shadow-[#540863] hover:scale-105 transition-all duration-300" variant={"outline"}>
                  শুরু করুন <span className="ml-2">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Button>
              </div>
              <Stats />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
