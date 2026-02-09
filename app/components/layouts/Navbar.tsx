"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Container from "../shared/Container"
import logo from "@/public/assets/logo/softypy-online.png"
import { Button } from "@/components/ui/button"
import { NavbarData } from "./Navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = pathname === "/" || pathname === "/bn" || pathname === "/en"

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname])

  // Determine navbar classes
  const navbarCSS = isHome
    ? mobileOpen
      ? "sticky bg-[#540863] text-white"
      : scrolled
        ? "sticky bg-white text-black shadow-md"
        : "fixed bg-transparent text-white"
    : "sticky bg-white text-black shadow-md"

  return (
    <header className={`top-0 left-0 w-full z-50 transition-all duration-300 ${navbarCSS}`}>
      <Container>
        <div className="flex h-20 items-center justify-between px-2 2xl:px-0">

          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="rounded-md bg-white p-1">
                <Image src={logo} alt="Softypy" width={100} height={100} priority />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NavbarData.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.target}
                  className="text-sm uppercase font-medium transition hover:text-purple-600"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex px-5 py-2.5 text-sm font-semibold uppercase"
            >
              Get Started
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-[#540863] p-2 text-white">
          <Container>
            <nav className="flex flex-col gap-6 py-6">
              {NavbarData.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.target}
                  className="text-base font-medium transition hover:opacity-80"
                >
                  {item.title}
                </Link>
              ))}

              <div className="flex gap-3 pt-4">
                <Button className="w-full bg-white text-[#540863]">Get Started</Button>
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
