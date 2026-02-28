import type { Metadata } from 'next';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';

const hindSiliguri = Hind_Siliguri({
  subsets: ['latin'],
  variable: '--font-hind-siliguri',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://e-commerce.softypy.com'),

  title: {
    default: 'SoftyPy | E-commerce Growth Experts',
    template: '%s | SoftyPy',
  },

  description:
    'SoftyPy helps brands scale with high-performance e-commerce marketing, branding, and digital growth solutions.',

  openGraph: {
    title: 'SoftyPy | E-commerce Growth Experts',
    description:
      'Scale your e-commerce brand with SoftyPy’s performance-driven marketing solutions.',
    url: 'https://e-commerce.softypy.com',
    siteName: 'SoftyPy',
    type: 'website',
    images: [
      {
        url: 'https://e-commerce.softypy.com/og-image.jpg', // absolute URL
        width: 1200,
        height: 630,
        alt: 'SoftyPy E-commerce Marketing',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SoftyPy | E-commerce Growth Experts',
    description: 'Performance-driven e-commerce marketing solutions by SoftyPy.',
    images: ['https://e-commerce.softypy.com/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hindSiliguri.className} antialiased`}>{children}</body>
    </html>
  );
}
