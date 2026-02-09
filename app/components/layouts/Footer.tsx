"use client";
import Link from "next/link";
import Container from "../shared/Container";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import logo from "@/public/assets/logo/softypy-online.png";
import Image from "next/image";

export default function Footer() {

  const icons = [
    {
      id: 1,
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
      hover: "hover:text-[#1877F2]", // Facebook brand blue
    },
    {
      id: 2,
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
      hover: "hover:text-[#1DA1F2]",
    },
    {
      id: 3,
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
      hover: "hover:text-[#E4405F]",
    },
    {
      id: 4,
      name: "Linkedin",
      href: "https://linkedin.com",
      icon: Linkedin,
      hover: "hover:text-[#0A66C2]",
    },
  ];


  const quickLinks = [{
    id: 1,
    name: "About Us",
    href: "/about",
  }, {
    id: 2,
    name: "Services",
    href: "/services",
  }, {
    id: 3,
    name: "Contact",
    href: "/contact",
  }]


  return (
    <footer className="bg-[#540863]">
      <Container className="px-4 py-10 2xl:px-0">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <Image
              src={logo}
              alt="Softypy"
              width={100}
              height={100}
              priority
            />
            <p className="text-sm text-white/80 max-w-sm">
              Building reliable digital products with modern technologies and
              clean design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              {
                quickLinks.map((item) => (
                  <Link key={item.id} href={item.href} className="hover:text-white transition">
                    {item.name}
                  </Link>
                ))
              }
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              {icons.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  aria-label={item.name}
                  className={`rounded-full bg-white/10 p-2 text-white/80 transition
                  hover:bg-white hover:scale-105 ${item.hover}`}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-2 text-sm text-white/80 md:flex-row">
          <p>
            © {new Date().getFullYear()} SoftyPy. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
