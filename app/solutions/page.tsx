import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Solutions from "@/app/pages/Solutions";

export const metadata: Metadata = {
  title: 'Business Solutions - Zapeera Industry-Specific Software',
  description: 'Discover Zapeera\'s tailored solutions for Retail, Pharmacy, Restaurant, Wholesale, Departmental Store, and Distribution businesses. Industry-specific features and tools.',
  keywords: [
    'retail management software',
    'pharmacy POS system',
    'restaurant management',
    'wholesale software',
    'departmental store solution',
    'distribution management'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Business Solutions - Zapeera Industry-Specific Software',
    description: 'Discover Zapeera\'s tailored solutions for Retail, Pharmacy, Restaurant, and more.',
    url: 'https://zapeera.com/solutions',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Business Solutions - Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Solutions - Zapeera',
    description: 'Discover Zapeera\'s industry-specific business solutions.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Solutions />
      <Footer />
    </div>
  );
}
