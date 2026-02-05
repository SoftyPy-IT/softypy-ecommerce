import { Button } from "@/components/ui/button"
import Container from "../shared/Container"
import bg from "@/public/assets/bg/bg.jpg"

export default function Banner() {
  return (
    <section
      style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      className="relative h-screen bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/70 via-indigo-900/70 to-violet-800/70" />

      <div className="relative h-full w-full">
        <Container>
          <div className="flex h-[calc(100vh-80px)] items-center justify-center px-4 text-center">
            <div className="mx-auto max-w-4xl space-y-6">

              <p className="text-sm font-semibold uppercase tracking-widest p-2 bg-white/20 rounded-full inline-block">
                E-commerce Solutions
              </p>

              <h1 className="text-4xl font-extrabold text-white md:text-6xl lg:text-7xl">
                Launch Your Store
              </h1>

              <p className="mx-auto max-w-2xl text-slate-300 md:text-lg">
                Everything you need to sell online—fast setup, scalable architecture, and modern shopping experiences.
              </p>

              <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:justify-center">
                <Button variant={"outline"}>
                  Get Started
                </Button>
              </div>

              <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 pt-12 md:grid-cols-3">
                {[
                  { value: "500+", label: "Happy Clients" },
                  { value: "98%", label: "Satisfaction Rate" },
                  { value: "24/7", label: "Support Available" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-3xl font-bold text-white md:text-4xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
