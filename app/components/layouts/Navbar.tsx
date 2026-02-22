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
  const [isMobile, setIsMobile] = useState(false)

  const isHome = pathname === "/"

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  // Determine navbar classes
  const navbarCSS = isHome
    ? mobileOpen
      ? "sticky bg-[#D2CBF1]"
      : scrolled
        ? "sticky bg-white text-black shadow-md"
        : isMobile ? "sticky bg-white text-black shadow-md" : "fixed bg-transparent "
    : isMobile ? "sticky bg-white text-black shadow-md" : "sticky bg-white text-black shadow-md"

  return (

    <header className={`top-0 left-0 w-full z-50 transition-all duration-300 ${navbarCSS}`}>
      <Container>
        <div className="flex h-20 items-center justify-between px-2 2xl:px-0">

          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="rounded-md p-1">
                <Image src={logo} alt="Softypy" width={70} height={70} priority />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NavbarData.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.target}
                  className={`text-sm uppercase font-medium transition  hover:text-purple-600 ${pathname === item.href ? "text-purple-600" : ""}`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
              <Link href="/pricing" className="hidden sm:inline-flex px-5 py-2.5 text-sm font-semibold uppercase">
              <Button
                variant="outline"
                className="hidden rounded-none sm:inline-flex px-5 py-2.5 text-sm font-semibold uppercase"
              >
                Get Started
              </Button>
              </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-md border p-2"
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
        <div className="bg-[#D2CBF1] p-2 text-black">
          <Container>
            <nav className="flex flex-col gap-6 py-6">
              {NavbarData.map((item) => (
                <Link
                  onClick={() => setMobileOpen(!mobileOpen)}
                  key={item.title}
                  href={item.href}
                  target={item.target}
                  className={`text-base font-medium transition hover:opacity-80 ${pathname === item.href ? "text-purple-600" : ""}`}
                >
                  {item.title}
                </Link>
              ))}

              <div className="flex gap-3 pt-4">
                <Button className="w-full">Get Started</Button>
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
