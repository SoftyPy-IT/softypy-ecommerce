import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://e-commerce.softypy.com"),

  title: {
    default: "SoftyPy | E-commerce Growth Experts",
    template: "%s | SoftyPy",
  },

  description:
    "SoftyPy helps brands scale with high-performance e-commerce marketing, branding, and digital growth solutions.",

  openGraph: {
    title: "SoftyPy | E-commerce Growth Experts",
    description:
      "Scale your e-commerce brand with SoftyPy’s performance-driven marketing solutions.",
    url: "https://e-commerce.softypy.com",
    siteName: "SoftyPy",
    type: "website",
    images: [
      {
        url: "https://e-commerce.softypy.com/og-image.jpg", // absolute URL
        width: 1200,
        height: 630,
        alt: "SoftyPy E-commerce Marketing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SoftyPy | E-commerce Growth Experts",
    description:
      "Performance-driven e-commerce marketing solutions by SoftyPy.",
    images: ["https://e-commerce.softypy.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
