"use client";
import Link from "next/link";
import Container from "../shared/Container";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import logo from "@/public/assets/logo/logo.png";
import Image from "next/image";
import { NavbarData } from "./Navigation";

export default function Footer() {
  const socialIcons = [
    {
      id: 1,
      name: "Facebook",
      href: "https://www.facebook.com/SoftyPyIT",
      icon: Facebook,
      hover: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      id: 2,
      name: "Twitter",
      href: "https://www.linkedin.com/company/softypy",
      icon: Twitter,
      hover: "hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      id: 3,
      name: "Instagram",
      href: "https://www.instagram.com/SoftyPyIT",
      icon: Instagram,
      hover: "hover:bg-[#E4405F] hover:text-white",
    },
    {
      id: 4,
      name: "Linkedin",
      href: "https://www.linkedin.com/company/softypy",
      icon: Linkedin,
      hover: "hover:bg-[#0A66C2] hover:text-white",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      icon: Mail,
      text: "softypy@gmail.com",
      href: "softypy@gmail.com",
    },
    {
      id: 2,
      icon: Phone,
      text: "+8801670405744",
      href: "tel:+8801670405744",
    },
    {
      id: 3,
      icon: MapPin,
      text: "Ka-86/1, Al-Hera Tower, Level-1 (Lift-1), Kuratoli, Khilkhet, Dhaka, Bangladesh, 1229",
      href: "https://maps.app.goo.gl/yErrcMR9wuLidhz68",
    },
  ];

  const services = [
    { name: "Web Development", href: "https://softypy.com/services/web-development/e-commerce" },
    { name: "Custom Software Development", href: "https://softypy.com/services/custom-software-development/the-essential-guide-to-transforming-your-business-with-custom-software" },
    { name: "Digital Marketing", href: "https://softypy.com/services/digital-marketing/engaging-content-powerful-campaigns-facebook-marketing-done-right" },
    { name: "ERP Solutions", href: "https://softypy.com/services/erp-solutions/undefined" },
    { name: "UI/UX Design", href: "https://softypy.com/services/uiux-design/undefined" },
  ];

  return (
    <footer className="bg-linear-to-br from-[#D2E9D9] to-[#B8DBC4] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <Container className="px-4 py-12 2xl:px-0 relative z-10">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand & About */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Softypy"
                width={120}
                height={120}
                priority
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
              Building reliable digital products with modern technologies and
              clean design. We transform ideas into powerful digital experiences.
            </p>

            {/* Social Media */}
            <div className="pt-2">
              <h5 className="text-sm font-semibold text-gray-900 mb-3">Follow Us</h5>
              <div className="flex items-center gap-3">
                {socialIcons.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className={`rounded-full bg-white/80 backdrop-blur-sm p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-700 ${item.hover}`}
                  >
                    <item.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NavbarData.filter((item) => item.title !== "Home").map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-purple-600 hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-600 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wide">
              Services
            </h4>
            <nav className="flex flex-col gap-2.5">
              {services.map((service, idx) => (
                <Link
                  target="_blank"
                  key={idx}
                  href={service.href}
                  className="text-sm text-gray-700 hover:text-purple-600 hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-600 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2" />
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wide">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-start gap-3 text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 group"
                >
                  <item.icon className="h-5 w-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="leading-relaxed">{item.text}</span>
                </Link>
              ))}
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-gray-900 mb-2">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/80 backdrop-blur-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                />
                <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors duration-200 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-400/50" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-700 md:flex-row">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-semibold">SoftyPy</span>. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              target="_blank"
              href="https://softypy.com/refund-policy"
              className="hover:text-gray-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Refund Policy
            </Link>
            <Link
              target="_blank"
              href="https://softypy.com/terms"
              className="hover:text-gray-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              target="_blank"
              href="https://softypy.com/privacy-policy"
              className="hover:text-gray-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
