import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Updates from "@/app/pages/Updates";

export const metadata: Metadata = {
  title: 'Product Updates & Release Notes - Zapeera',
  description: 'Stay updated with the latest Zapeera product updates, new features, improvements, and release notes. See what\'s new in our business management platform.',
  keywords: [
    'zapeera updates',
    'software release notes',
    'new features',
    'product updates',
    'software changelog'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Product Updates & Release Notes - Zapeera',
    description: 'Stay updated with the latest Zapeera product updates and new features.',
    url: 'https://zapeera.com/product-update',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Product Updates - Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Updates - Zapeera',
    description: 'Latest product updates and new features.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/product-update',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Updates />
      <Footer />
    </div>
  );
}
