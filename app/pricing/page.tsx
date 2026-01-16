import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Pricing from "@/app/pages/Pricing";

export const metadata: Metadata = {
  title: 'Pricing Plans - Zapeera Business Management Software',
  description: 'Choose the perfect Zapeera plan for your business. Transparent pricing with flexible plans for retail, pharmacy, restaurant, and more. Start your free trial today.',
  keywords: [
    'zapeera pricing',
    'business software pricing',
    'POS system cost',
    'software plans',
    'subscription pricing',
    'free trial'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Pricing Plans - Zapeera Business Management Software',
    description: 'Choose the perfect Zapeera plan for your business. Transparent pricing with flexible plans.',
    url: 'https://zapeera.com/pricing',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Pricing Plans - Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans - Zapeera',
    description: 'Choose the perfect Zapeera plan for your business.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/pricing',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Pricing />
      <Footer />
    </div>
  );
}
