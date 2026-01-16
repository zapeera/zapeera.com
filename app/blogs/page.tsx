import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Blog from "@/app/pages/Blog";

export const metadata: Metadata = {
  title: 'Blog - Business Management Insights & Tips | Zapeera',
  description: 'Read the latest articles, insights, and tips about business management, POS systems, inventory management, and retail operations on Zapeera Blog.',
  keywords: [
    'business management blog',
    'POS system tips',
    'inventory management guide',
    'retail business advice',
    'business software insights'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Blog - Business Management Insights & Tips | Zapeera',
    description: 'Read the latest articles, insights, and tips about business management and retail operations.',
    url: 'https://zapeera.com/blogs',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog - Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Zapeera',
    description: 'Business management insights and tips.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/blogs',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Blog />
      <Footer />
    </div>
  );
}

