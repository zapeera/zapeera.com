import type { Metadata } from 'next';
import FloatingCTA from "@/app/components/FloatingCTA";
import { Store, Pill, UtensilsCrossed, Package, Building } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";

export const metadata: Metadata = {
  title: 'Solutions - Industry-Specific Business Management',
  description: 'Discover Zapeera\'s tailored solutions for retail, pharmacy, restaurant, wholesale, and departmental stores. Industry-specific features for maximum efficiency.',
  keywords: [
    'retail management solution',
    'pharmacy management software',
    'restaurant management system',
    'wholesale management software',
    'departmental store solution',
    'industry-specific software',
    'business management solutions'
  ],
  openGraph: {
    title: 'Solutions - Industry-Specific Business Management',
    description: 'Discover Zapeera\'s tailored solutions for retail, pharmacy, restaurant, wholesale, and departmental stores.',
    url: 'https://zapeera.com/solutions',
    images: ['/og-solutions.jpg'],
  },
  alternates: {
    canonical: 'https://zapeera.com/solutions',
  },
};

const Solutions = () => {
  const solutions = [
    {
      icon: Store,
      title: "Retail",
      painPoints: [
        "Managing inventory across multiple locations",
        "Long checkout queues during peak hours",
        "Lack of real-time sales visibility",
        "Difficulty tracking employee performance",
      ],
      solutions: [
        "Multi-branch inventory sync in real-time",
        "Lightning-fast POS system reduces checkout time by 40%",
        "Live sales dashboard accessible from anywhere",
        "Detailed staff performance analytics",
      ],
    },
    {
      icon: Pill,
      title: "Pharmacy",
      painPoints: [
        "Complex medication inventory management",
        "Batch and expiry date tracking challenges",
        "Regulatory compliance requirements",
        "Prescription management complexity",
      ],
      solutions: [
        "Automated batch and expiry tracking",
        "Built-in compliance tools for pharmaceutical regulations",
        "Digital prescription management system",
        "Automated reorder alerts for critical medications",
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant",
      painPoints: [
        "Managing complex menus and modifiers",
        "Kitchen order management inefficiency",
        "Table management during busy hours",
        "Food cost tracking difficulties",
      ],
      solutions: [
        "Flexible menu management with unlimited modifiers",
        "Kitchen display system integration",
        "Smart table management with wait-time tracking",
        "Recipe costing and profit margin analysis",
      ],
    },
    {
      icon: Package,
      title: "Wholesale",
      painPoints: [
        "Bulk order processing challenges",
        "Complex pricing structures",
        "Managing large customer networks",
        "Credit limit and payment term tracking",
      ],
      solutions: [
        "Efficient bulk order processing system",
        "Flexible pricing rules and volume discounts",
        "Customer portal for self-service ordering",
        "Automated credit management and alerts",
      ],
    },
    {
      icon: Building,
      title: "Departmental Store",
      painPoints: [
        "Managing diverse product categories",
        "Multiple checkout counters coordination",
        "Complex promotions and discounts",
        "Large-scale inventory management",
      ],
      solutions: [
        "Category-based inventory organization",
        "Synchronized multi-counter POS system",
        "Advanced promotion engine",
        "Barcode and RFID integration",
      ],
    },
  ];

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <FloatingCTA />

        <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Solutions for Every{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Business Type
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Industry-specific tools tailored to solve your unique business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 lg:py-32">
       <Container>
       <div className="">
            <div className="space-y-20">
              {solutions.map((solution, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <Card className="p-8 lg:p-12 border-2 border-border hover:border-primary/50 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Left Side - Industry Info */}
                      <div>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                          <solution.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
                        
                        <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Common Challenges:</h3>
                        <ul className="space-y-3 mb-8">
                          {solution.painPoints.map((pain, painIndex) => (
                            <li key={painIndex} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-destructive text-xs">✕</span>
                              </div>
                              <span className="text-muted-foreground">{pain}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Side - Solutions */}
                      <div>
                        <div className="aspect-video bg-gradient-hero rounded-xl border border-border flex items-center justify-center mb-6">
                          <solution.icon className="w-24 h-24 text-primary/20" />
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-4 text-primary">How Zapeera Helps:</h3>
                        <ul className="space-y-3 mb-8">
                          {solution.solutions.map((sol, solIndex) => (
                            <li key={solIndex} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary text-xs">✓</span>
                              </div>
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>

                        <Link href={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          <Button className="bg-gradient-primary hover:opacity-90 w-full lg:w-auto">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
       </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't see your industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zapeera is flexible enough to adapt to any business type. Contact us to discuss your specific needs.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Contact Sales
            </Button>
          </div>
        </section>
        </main>
      </div>
    </Loading>
  );
};

export default Solutions;
