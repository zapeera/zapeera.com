import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Features from "@/app/pages/Features";

export const metadata: Metadata = {
  title: 'Features - Zapeera Business Management Platform',
  description: 'Explore Zapeera\'s comprehensive features including POS system, inventory management, staff management, analytics, billing, and more. All-in-one business solution.',
  keywords: [
    'business management features',
    'POS features',
    'inventory management',
    'staff management',
    'business analytics',
    'billing software',
    'reporting tools'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Features - Zapeera Business Management Platform',
    description: 'Explore Zapeera\'s comprehensive features including POS, inventory, staff management, and analytics.',
    url: 'https://zapeera.com/features',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Features - Zapeera Business Management Platform',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features - Zapeera',
    description: 'Explore Zapeera\'s comprehensive business management features.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/features',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Features />
      <Footer />
    </div>
  );
}
