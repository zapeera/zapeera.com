import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import About from "@/app/pages/About";

export const metadata: Metadata = {
  title: 'About Us - Zapeera',
  description: 'Learn about Zapeera - our mission, vision, team, and commitment to transforming business management with innovative solutions.',
  keywords: [
    'about zapeera',
    'company mission',
    'business management team',
    'software company',
    'tech innovation'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'About Us - Zapeera',
    description: 'Learn about Zapeera - our mission, vision, team, and commitment to transforming business management.',
    url: 'https://zapeera.com/about-us',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'About Us - Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Zapeera',
    description: 'Learn about Zapeera - our mission, vision, and team.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/about-us',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}
