"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Container from "../shared/Container"
import logo from "@/public/assets/logo/logo.png"
import { Button } from "@/components/ui/button"
import { NavbarData } from "./Navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = pathname === "/" || pathname === "/bn"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className={`top-0 left-0 z-50 w-full ${isHome ?  "fixed"  : ""}`}>
      <div
        className={`transition-all duration-300 ${scrolled
            ? "bg-slate-900/20 backdrop-blur-md"
            : isHome
            ? mobileOpen ? "backdrop-blur-md" : "bg-transparent"
              : "bg-slate-900/70 backdrop-blur-md"
          }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between px-2 2xl:px-0">

           <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="rounded-md bg-white p-1">
                  <Image
                    src={logo}
                    alt="Softypy"
                    width={44}
                    height={44}
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {NavbarData.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={item.target}
                    className="text-sm font-medium text-white/80 hover:text-white transition"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
           </div>

            {/* Right / Actions */}
            <div className="flex items-center gap-3">
              <Button variant={"outline"} className="hidden sm:inline-flex px-5 py-2.5 text-sm font-semibold">
                Get Started
              </Button>

              {/* <Button
                variant="outline"
                className="hidden sm:inline-flex border-white/20"
              >
                EN
              </Button> */}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="backdrop-blur-md border-t border-white/10">
          <Container>
            <nav className="flex flex-col gap-6 py-6">
              {NavbarData.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.target}
                  className="text-base font-medium transition"
                >
                  {item.title}
                </Link>
              ))}

              <div className="flex gap-3 pt-4">
                <Button className="w-full bg-primary">Get Started</Button>
                <Button variant="outline" className="w-full">
                  EN
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  )
}
