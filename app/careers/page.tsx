import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Careers from "@/app/pages/Careers";

export const metadata: Metadata = {
  title: 'Careers - Join the Zapeera Team',
  description: 'Join Zapeera and help transform businesses worldwide. Explore career opportunities in software development, sales, marketing, and customer success. Remote-first positions available with competitive salary and benefits.',
  keywords: [
    'zapeera careers',
    'business software jobs',
    'tech careers',
    'software development jobs',
    'sales careers',
    'marketing jobs',
    'customer success careers',
    'remote jobs',
    'software engineering careers',
    'product designer jobs',
    'frontend engineer jobs',
    'backend engineer jobs'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Careers - Join the Zapeera Team',
    description: 'Join Zapeera and help transform businesses worldwide. Explore career opportunities in software development, sales, marketing, and customer success.',
    url: 'https://zapeera.com/careers',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/careers',
        width: 1200,
        height: 630,
        alt: 'Careers - Join the Zapeera Team',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Join the Zapeera Team',
    description: 'Explore career opportunities at Zapeera. Join our team and help transform businesses worldwide.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/careers',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Careers />
      <Footer />
    </div>
  );
}
