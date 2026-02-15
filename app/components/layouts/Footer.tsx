"use client";
import Link from "next/link";
import Container from "../shared/Container";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import logo from "@/public/assets/logo/logo.png";
import Image from "next/image";
import { NavbarData } from "./Navigation";

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



  return (
    <footer className="bg-[#D2E9D9]">
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
            <p className="text-sm max-w-sm">
              Building reliable digital products with modern technologies and
              clean design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-sm font-semibold uppercase tracking-wide ">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              {
                NavbarData.map((item, idx) => (
                  <Link key={idx} href={item.href}>

                    {
                      item.title !== "Home" && (
                        <span className="hover:text-purple-600">{item.title}</span>
                      )
                    }
                  </Link>
                ))
              }
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide ">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              {icons.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  target="_blank"
                  aria-label={item.name}
                  className={`rounded-full bg-gray-100 p-2 transition hover:scale-105 ${item.hover}`}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

          </div>
        </div>

        <Separator className="my-8 bg-gray-900" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-2 text-sm md:flex-row">
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
