'use client'

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'SoftwareApplication' | 'BreadcrumbList' | 'FAQPage'
  data: any
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zapeera",
          "url": "https://zapeera.com",
          "logo": "https://zapeera.com/logo.png",
          "description": "Unified business management solutions for modern businesses",
          "foundingDate": "2019",
          "founders": [
            {
              "@type": "Person",
              "name": "Muhammad Majid"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-123-456-7890",
            "contactType": "customer service",
            "email": "support@zapeera.com"
          },
          "sameAs": [
            "https://twitter.com/zapeera",
            "https://linkedin.com/company/zapeera",
            "https://facebook.com/zapeera"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Business Street",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94102",
            "addressCountry": "US"
          }
        }

      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zapeera",
          "url": "https://zapeera.com",
          "description": "Unified business management solutions",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://zapeera.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }

      case 'SoftwareApplication':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Zapeera",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, iOS, Android",
          "description": "Comprehensive business management platform with POS, inventory, staff management, and analytics",
          "offers": {
            "@type": "Offer",
            "price": "29",
            "priceCurrency": "USD",
            "priceValidUntil": "2024-12-31"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
          },
          "author": {
            "@type": "Organization",
            "name": "Zapeera"
          }
        }

      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs?.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        }

      default:
        return data
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  )
}

export default StructuredData
