import Link from "next/link";
import Container from "../shared/Container";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <Container className="px-2 2xl:p-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          {/* Left - copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>

          {/* Center - navigation links */}
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-800 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-800 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-800 transition">
              Contact
            </Link>
          </nav>

          {/* Right - social icons */}
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" className="text-gray-500 hover:text-blue-600 transition">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-gray-500 hover:text-blue-400 transition">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-gray-500 hover:text-pink-500 transition">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-blue-700 transition">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
