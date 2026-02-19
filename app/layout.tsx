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
    default: "SoftyPy | The Best Smart Solution",
    template: "%s | SoftyPy",
  },
  description:
    "SoftyPy is a smart e-commerce marketing and digital solution company helping businesses scale in Bangladesh and beyond.",
  openGraph: {
    title: "SoftyPy | Smart E-commerce Solutions",
    description:
      "Scale your business with SoftyPy’s modern e-commerce marketing, branding, and digital growth solutions.",
    url: "https://e-commerce.softypy.com",
    siteName: "SoftyPy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SoftyPy Smart Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftyPy | Smart E-commerce Solutions",
    description:
      "Modern e-commerce marketing and digital growth strategies by SoftyPy.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
