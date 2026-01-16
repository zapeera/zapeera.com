import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, XCircle, Star, Users, TrendingUp, Shield, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent } from "@/app/components/ui/card";
import Link from "next/link";

// Solution data - in a real app, this would come from a CMS or database
const solutions = {
  "retail": {
    title: "Retail Management Solutions",
    description: "Comprehensive retail management system designed to streamline operations, boost sales, and enhance customer experience.",
    icon: "Store",
    industry: "Retail",
    painPoints: [
      "Managing inventory across multiple locations",
      "Long checkout queues during peak hours", 
      "Lack of real-time sales visibility",
      "Difficulty tracking employee performance",
      "Complex pricing and promotion management",
      "Customer data fragmentation"
    ],
    solutions: [
      "Multi-branch inventory sync in real-time",
      "Lightning-fast POS system reduces checkout time by 40%",
      "Live sales dashboard accessible from anywhere",
      "Detailed staff performance analytics",
      "Advanced promotion engine with flexible rules",
      "Unified customer database with purchase history"
    ],
    features: [
      {
        title: "Multi-Location Management",
        description: "Seamlessly manage inventory, staff, and sales across multiple retail locations with real-time synchronization.",
        benefits: ["Centralized control", "Real-time updates", "Consistent operations"]
      },
      {
        title: "Advanced POS System",
        description: "Lightning-fast point-of-sale system with barcode scanning, multiple payment methods, and receipt management.",
        benefits: ["40% faster checkout", "Multiple payment options", "Digital receipts"]
      },
      {
        title: "Real-Time Analytics",
        description: "Comprehensive dashboard showing sales performance, inventory levels, and customer insights in real-time.",
        benefits: ["Live sales data", "Inventory tracking", "Customer insights"]
      },
      {
        title: "Staff Management",
        description: "Complete staff management system with scheduling, performance tracking, and role-based access control.",
        benefits: ["Shift scheduling", "Performance metrics", "Access control"]
      },
      {
        title: "Customer Relationship Management",
        description: "Build lasting customer relationships with detailed profiles, purchase history, and loyalty programs.",
        benefits: ["Customer profiles", "Purchase history", "Loyalty programs"]
      },
      {
        title: "Inventory Optimization",
        description: "Smart inventory management with automated reordering, demand forecasting, and waste reduction.",
        benefits: ["Automated reordering", "Demand forecasting", "Waste reduction"]
      }
    ],
    benefits: [
      {
        metric: "40%",
        description: "Faster checkout process",
        icon: Clock
      },
      {
        metric: "60%",
        description: "Reduction in inventory costs",
        icon: TrendingUp
      },
      {
        metric: "85%",
        description: "Customer satisfaction rate",
        icon: Star
      },
      {
        metric: "50%",
        description: "Increase in sales",
        icon: Users
      }
    ],
    testimonials: [
      {
        name: "Ahmed Khan",
        business: "TechMart Electronics",
        location: "Karachi",
        quote: "Zapeera transformed our retail operations completely. We can now manage multiple stores efficiently and our sales have increased by 50%.",
        rating: 5
      },
      {
        name: "Fatima Ali",
        business: "Fashion Hub",
        location: "Lahore", 
        quote: "The real-time analytics help us make better decisions. We've reduced inventory waste by 60% and improved customer satisfaction.",
        rating: 5
      }
    ],
    pricing: {
      basic: {
        name: "Starter",
        price: "₨15,000",
        period: "per month",
        features: [
          "Up to 2 locations",
          "Basic POS system",
          "Inventory management",
          "Basic reporting",
          "Email support"
        ]
      },
      professional: {
        name: "Professional",
        price: "₨25,000",
        period: "per month",
        features: [
          "Up to 5 locations",
          "Advanced POS features",
          "Real-time analytics",
          "Staff management",
          "Customer CRM",
          "Priority support"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise",
        price: "₨45,000",
        period: "per month",
        features: [
          "Unlimited locations",
          "Custom integrations",
          "Advanced analytics",
          "Multi-user management",
          "API access",
          "Dedicated support"
        ]
      }
    }
  },
  "pharmacy": {
    title: "Pharmacy Management Solutions",
    description: "Specialized pharmacy management system with medication tracking, regulatory compliance, and prescription management.",
    icon: "Pill",
    industry: "Pharmacy",
    painPoints: [
      "Complex medication inventory management",
      "Batch and expiry date tracking challenges",
      "Regulatory compliance requirements",
      "Prescription management complexity",
      "Drug interaction checking",
      "Insurance claim processing"
    ],
    solutions: [
      "Automated batch and expiry tracking",
      "Built-in compliance tools for pharmaceutical regulations",
      "Digital prescription management system",
      "Automated reorder alerts for critical medications",
      "Drug interaction database integration",
      "Streamlined insurance processing"
    ],
    features: [
      {
        title: "Medication Inventory Management",
        description: "Specialized inventory system for medications with batch tracking, expiry dates, and regulatory compliance.",
        benefits: ["Batch tracking", "Expiry management", "Compliance tools"]
      },
      {
        title: "Prescription Management",
        description: "Digital prescription system with doctor verification, patient records, and medication history.",
        benefits: ["Digital prescriptions", "Patient records", "Medication history"]
      },
      {
        title: "Regulatory Compliance",
        description: "Built-in tools to ensure compliance with pharmaceutical regulations and standards.",
        benefits: ["Regulatory compliance", "Audit trails", "Documentation"]
      },
      {
        title: "Drug Interaction Checking",
        description: "Automated system to check for potential drug interactions and allergies.",
        benefits: ["Interaction checking", "Allergy alerts", "Safety warnings"]
      },
      {
        title: "Insurance Integration",
        description: "Seamless integration with insurance providers for claim processing and verification.",
        benefits: ["Insurance claims", "Coverage verification", "Payment processing"]
      },
      {
        title: "Patient Management",
        description: "Comprehensive patient database with medical history, prescriptions, and insurance information.",
        benefits: ["Patient profiles", "Medical history", "Insurance records"]
      }
    ],
    benefits: [
      {
        metric: "50%",
        description: "Reduction in medication waste",
        icon: TrendingUp
      },
      {
        metric: "95%",
        description: "Compliance rate",
        icon: Shield
      },
      {
        metric: "70%",
        description: "Faster prescription processing",
        icon: Clock
      },
      {
        metric: "90%",
        description: "Patient satisfaction",
        icon: Star
      }
    ],
    testimonials: [
      {
        name: "Dr. Muhammad Hassan",
        business: "Green Valley Pharmacy",
        location: "Islamabad",
        quote: "Zapeera's pharmacy management system has revolutionized our operations. We've reduced medication waste by 50% and improved patient safety significantly.",
        rating: 5
      },
      {
        name: "Dr. Ayesha Khan",
        business: "City Medical Store",
        location: "Rawalpindi",
        quote: "The regulatory compliance features ensure we never miss important requirements. Our audit scores have improved dramatically.",
        rating: 5
      }
    ],
    pricing: {
      basic: {
        name: "Essential",
        price: "₨20,000",
        period: "per month",
        features: [
          "Basic medication tracking",
          "Prescription management",
          "Patient records",
          "Basic reporting",
          "Email support"
        ]
      },
      professional: {
        name: "Professional",
        price: "₨35,000",
        period: "per month",
        features: [
          "Advanced medication management",
          "Regulatory compliance tools",
          "Drug interaction checking",
          "Insurance integration",
          "Advanced analytics",
          "Priority support"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise",
        price: "₨60,000",
        period: "per month",
        features: [
          "Full pharmacy management",
          "Custom compliance rules",
          "Advanced integrations",
          "Multi-location support",
          "API access",
          "Dedicated support"
        ]
      }
    }
  },
  "restaurant": {
    title: "Restaurant Management Solutions",
    description: "Complete restaurant management system with kitchen integration, table management, and menu optimization.",
    icon: "UtensilsCrossed",
    industry: "Restaurant",
    painPoints: [
      "Managing complex menus and modifiers",
      "Kitchen order management inefficiency",
      "Table management during busy hours",
      "Food cost tracking difficulties",
      "Staff scheduling challenges",
      "Customer service coordination"
    ],
    solutions: [
      "Flexible menu management with unlimited modifiers",
      "Kitchen display system integration",
      "Smart table management with wait-time tracking",
      "Recipe costing and profit margin analysis",
      "Automated staff scheduling",
      "Integrated customer service tools"
    ],
    features: [
      {
        title: "Menu Management",
        description: "Flexible menu system with unlimited modifiers, seasonal items, and dynamic pricing.",
        benefits: ["Unlimited modifiers", "Seasonal menus", "Dynamic pricing"]
      },
      {
        title: "Kitchen Display System",
        description: "Real-time order management with kitchen display screens and order tracking.",
        benefits: ["Real-time orders", "Kitchen displays", "Order tracking"]
      },
      {
        title: "Table Management",
        description: "Smart table management system with wait-time tracking and reservation management.",
        benefits: ["Table tracking", "Wait times", "Reservations"]
      },
      {
        title: "Recipe Costing",
        description: "Detailed recipe costing and profit margin analysis for menu optimization.",
        benefits: ["Cost analysis", "Profit margins", "Menu optimization"]
      },
      {
        title: "Staff Scheduling",
        description: "Automated staff scheduling based on demand patterns and availability.",
        benefits: ["Automated scheduling", "Demand patterns", "Availability tracking"]
      },
      {
        title: "Customer Service",
        description: "Integrated customer service tools with feedback collection and loyalty programs.",
        benefits: ["Feedback collection", "Loyalty programs", "Service tracking"]
      }
    ],
    benefits: [
      {
        metric: "30%",
        description: "Faster order processing",
        icon: Clock
      },
      {
        metric: "25%",
        description: "Reduction in food waste",
        icon: TrendingUp
      },
      {
        metric: "40%",
        description: "Increase in table turnover",
        icon: Users
      },
      {
        metric: "85%",
        description: "Customer satisfaction",
        icon: Star
      }
    ],
    testimonials: [
      {
        name: "Chef Ali Raza",
        business: "Spice Garden Restaurant",
        location: "Karachi",
        quote: "Zapeera's restaurant management system has transformed our kitchen operations. Orders are processed 30% faster and our food waste has reduced by 25%.",
        rating: 5
      },
      {
        name: "Maria Ahmed",
        business: "Cafe Delight",
        location: "Lahore",
        quote: "The table management system helps us serve more customers efficiently. Our table turnover has increased by 40%.",
        rating: 5
      }
    ],
    pricing: {
      basic: {
        name: "Starter",
        price: "₨18,000",
        period: "per month",
        features: [
          "Basic POS system",
          "Menu management",
          "Table management",
          "Basic reporting",
          "Email support"
        ]
      },
      professional: {
        name: "Professional",
        price: "₨30,000",
        period: "per month",
        features: [
          "Advanced POS features",
          "Kitchen display system",
          "Recipe costing",
          "Staff scheduling",
          "Customer management",
          "Priority support"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise",
        price: "₨50,000",
        period: "per month",
        features: [
          "Full restaurant management",
          "Multi-location support",
          "Advanced integrations",
          "Custom features",
          "API access",
          "Dedicated support"
        ]
      }
    }
  },
  "wholesale": {
    title: "Wholesale Management Solutions",
    description: "Comprehensive wholesale management system for bulk operations, customer networks, and complex pricing structures.",
    icon: "Package",
    industry: "Wholesale",
    painPoints: [
      "Bulk order processing challenges",
      "Complex pricing structures",
      "Managing large customer networks",
      "Credit limit and payment term tracking",
      "Inventory across multiple warehouses",
      "Customer relationship management"
    ],
    solutions: [
      "Efficient bulk order processing system",
      "Flexible pricing rules and volume discounts",
      "Customer portal for self-service ordering",
      "Automated credit management and alerts",
      "Multi-warehouse inventory management",
      "Comprehensive customer relationship tools"
    ],
    features: [
      {
        title: "Bulk Order Processing",
        description: "Efficient system for processing large orders with automated workflows and approval processes.",
        benefits: ["Automated workflows", "Approval processes", "Order tracking"]
      },
      {
        title: "Flexible Pricing",
        description: "Complex pricing structures with volume discounts, customer-specific pricing, and promotional rules.",
        benefits: ["Volume discounts", "Customer pricing", "Promotional rules"]
      },
      {
        title: "Customer Portal",
        description: "Self-service portal for customers to place orders, track shipments, and manage accounts.",
        benefits: ["Self-service ordering", "Order tracking", "Account management"]
      },
      {
        title: "Credit Management",
        description: "Automated credit limit tracking, payment terms, and collection management.",
        benefits: ["Credit tracking", "Payment terms", "Collection management"]
      },
      {
        title: "Multi-Warehouse Management",
        description: "Inventory management across multiple warehouses with real-time tracking and allocation.",
        benefits: ["Multi-warehouse", "Real-time tracking", "Inventory allocation"]
      },
      {
        title: "Customer Relationship Management",
        description: "Comprehensive CRM system for managing large customer networks and relationships.",
        benefits: ["Customer networks", "Relationship tracking", "Communication tools"]
      }
    ],
    benefits: [
      {
        metric: "50%",
        description: "Faster order processing",
        icon: Clock
      },
      {
        metric: "35%",
        description: "Better inventory management",
        icon: TrendingUp
      },
      {
        metric: "60%",
        description: "Reduction in order errors",
        icon: Shield
      },
      {
        metric: "45%",
        description: "Increase in customer satisfaction",
        icon: Star
      }
    ],
    testimonials: [
      {
        name: "Hassan Ali",
        business: "Metro Wholesale",
        location: "Karachi",
        quote: "Zapeera's wholesale management system has streamlined our operations significantly. Order processing is 50% faster and errors have reduced by 60%.",
        rating: 5
      },
      {
        name: "Amina Khan",
        business: "City Distributors",
        location: "Lahore",
        quote: "The customer portal has improved our customer relationships. Our clients can now place orders easily and track their shipments in real-time.",
        rating: 5
      }
    ],
    pricing: {
      basic: {
        name: "Starter",
        price: "₨22,000",
        period: "per month",
        features: [
          "Basic order processing",
          "Inventory management",
          "Customer management",
          "Basic reporting",
          "Email support"
        ]
      },
      professional: {
        name: "Professional",
        price: "₨40,000",
        period: "per month",
        features: [
          "Advanced order processing",
          "Flexible pricing",
          "Customer portal",
          "Credit management",
          "Multi-warehouse support",
          "Priority support"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise",
        price: "₨70,000",
        period: "per month",
        features: [
          "Full wholesale management",
          "Custom integrations",
          "Advanced analytics",
          "API access",
          "Dedicated support",
          "Custom development"
        ]
      }
    }
  },
  "departmental-store": {
    title: "Departmental Store Management Solutions",
    description: "Complete departmental store management system with category management, multi-counter operations, and advanced promotions.",
    icon: "Building",
    industry: "Departmental Store",
    painPoints: [
      "Managing diverse product categories",
      "Multiple checkout counters coordination",
      "Complex promotions and discounts",
      "Large-scale inventory management",
      "Staff coordination across departments",
      "Customer service across categories"
    ],
    solutions: [
      "Category-based inventory organization",
      "Synchronized multi-counter POS system",
      "Advanced promotion engine",
      "Barcode and RFID integration",
      "Department-specific staff management",
      "Unified customer service system"
    ],
    features: [
      {
        title: "Category Management",
        description: "Organized inventory management by product categories with specific rules and workflows.",
        benefits: ["Category organization", "Specific rules", "Workflow management"]
      },
      {
        title: "Multi-Counter POS",
        description: "Synchronized point-of-sale system across multiple counters with real-time inventory updates.",
        benefits: ["Multi-counter sync", "Real-time updates", "Inventory tracking"]
      },
      {
        title: "Advanced Promotions",
        description: "Complex promotion engine with category-specific discounts, seasonal offers, and loyalty programs.",
        benefits: ["Category discounts", "Seasonal offers", "Loyalty programs"]
      },
      {
        title: "Barcode & RFID Integration",
        description: "Advanced scanning systems with barcode and RFID support for efficient inventory management.",
        benefits: ["Barcode scanning", "RFID support", "Efficient tracking"]
      },
      {
        title: "Department Management",
        description: "Department-specific management with specialized workflows and staff coordination.",
        benefits: ["Department workflows", "Staff coordination", "Specialized management"]
      },
      {
        title: "Unified Customer Service",
        description: "Integrated customer service system across all departments and categories.",
        benefits: ["Unified service", "Cross-department support", "Integrated management"]
      }
    ],
    benefits: [
      {
        metric: "40%",
        description: "Faster checkout process",
        icon: Clock
      },
      {
        metric: "55%",
        description: "Better inventory organization",
        icon: TrendingUp
      },
      {
        metric: "30%",
        description: "Increase in sales",
        icon: Users
      },
      {
        metric: "90%",
        description: "Customer satisfaction",
        icon: Star
      }
    ],
    testimonials: [
      {
        name: "Rashid Ahmed",
        business: "Mega Mart",
        location: "Karachi",
        quote: "Zapeera's departmental store management system has revolutionized our operations. Checkout is 40% faster and inventory organization has improved by 55%.",
        rating: 5
      },
      {
        name: "Sara Khan",
        business: "City Center Store",
        location: "Lahore",
        quote: "The multi-counter system works seamlessly. Our staff can coordinate better and customer service has improved significantly.",
        rating: 5
      }
    ],
    pricing: {
      basic: {
        name: "Starter",
        price: "₨25,000",
        period: "per month",
        features: [
          "Basic POS system",
          "Category management",
          "Inventory tracking",
          "Basic reporting",
          "Email support"
        ]
      },
      professional: {
        name: "Professional",
        price: "₨45,000",
        period: "per month",
        features: [
          "Multi-counter POS",
          "Advanced promotions",
          "Barcode integration",
          "Department management",
          "Customer service tools",
          "Priority support"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise",
        price: "₨80,000",
        period: "per month",
        features: [
          "Full store management",
          "RFID integration",
          "Advanced analytics",
          "Custom integrations",
          "API access",
          "Dedicated support"
        ]
      }
    }
  },
  "distribution": {
    title: "Distribution Management Solutions",
    description: "Comprehensive distribution management with inventory tracking and logistics optimization.",
    icon: "Warehouse",
    industry: "Distribution",
    painPoints: [
      "Route optimization challenges",
      "Warehouse management complexity",
      "Delivery tracking difficulties",
      "Inventory distribution across locations",
      "Fleet management",
      "Customer delivery management"
    ],
    solutions: [
      "Route planning and optimization",
      "Multi-warehouse management system",
      "Real-time delivery tracking",
      "Automated inventory distribution",
      "Fleet management tools",
      "Customer delivery scheduling"
    ],
    features: [
      {
        title: "Route Optimization",
        description: "Advanced route planning system to minimize delivery time and fuel costs.",
        benefits: ["Route optimization", "Fuel savings", "Time efficiency"]
      },
      {
        title: "Warehouse Management",
        description: "Complete warehouse management with inventory tracking and location management.",
        benefits: ["Inventory tracking", "Location management", "Warehouse operations"]
      },
      {
        title: "Delivery Tracking",
        description: "Real-time delivery tracking system with customer notifications and updates.",
        benefits: ["Real-time tracking", "Customer notifications", "Delivery updates"]
      },
      {
        title: "Automated Distribution",
        description: "Automated inventory distribution across multiple warehouses and locations.",
        benefits: ["Automated distribution", "Multi-location", "Inventory sync"]
      },
      {
        title: "Fleet Management",
        description: "Complete fleet management system with vehicle tracking and maintenance scheduling.",
        benefits: ["Vehicle tracking", "Maintenance scheduling", "Fleet optimization"]
      },
      {
        title: "Customer Management",
        description: "Integrated customer management with delivery schedules and preferences.",
        benefits: ["Customer schedules", "Delivery preferences", "Relationship management"]
      }
    ],
    benefits: [
      {
        metric: "35%",
        description: "Fuel cost reduction",
        icon: TrendingUp
      },
      {
        metric: "45%",
        description: "Delivery time improvement",
        icon: Clock
      },
      {
        metric: "60%",
        description: "Better warehouse utilization",
        icon: Users
      },
      {
        metric: "85%",
        description: "Customer satisfaction",
        icon: Star
      }
    ],
    testimonials: [
      {
        name: "Imran Shah",
        business: "Swift Logistics",
        location: "Karachi",
        quote: "Zapeera's distribution system has optimized our routes by 45%. We've reduced fuel costs by 35% and customer satisfaction has improved significantly.",
        rating: 5
      },
      {
        name: "Bilal Ahmed",
        business: "Express Distribution",
        location: "Lahore",
        quote: "The real-time tracking and automated distribution have transformed our operations. Our warehouse utilization has improved by 60%.",
        rating: 5
      }
    ],
    pricing: {
      basic: {
        name: "Starter",
        price: "₨20,000",
        period: "per month",
        features: [
          "Basic route planning",
          "Inventory tracking",
          "Delivery tracking",
          "Basic reporting",
          "Email support"
        ]
      },
      professional: {
        name: "Professional",
        price: "₨35,000",
        period: "per month",
        features: [
          "Advanced route optimization",
          "Multi-warehouse support",
          "Fleet management",
          "Customer management",
          "Advanced analytics",
          "Priority support"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise",
        price: "₨65,000",
        period: "per month",
        features: [
          "Full distribution management",
          "Custom integrations",
          "Advanced analytics",
          "API access",
          "Dedicated support",
          "Custom development"
        ]
      }
    }
  }
};

interface SolutionPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const solution = solutions[params.slug as keyof typeof solutions];
  
  if (!solution) {
    return {
      title: 'Solution Not Found',
      description: 'The requested solution page could not be found.',
    };
  }

  return {
    title: `${solution.title} - Zapeera`,
    description: solution.description,
    keywords: [
      `${solution.industry.toLowerCase()} management software`,
      `${solution.industry.toLowerCase()} solution`,
      `${solution.industry.toLowerCase()} system`,
      'business management',
      'POS system',
      'inventory management'
    ],
    authors: [{ name: 'Zapeera Team' }],
    creator: 'Zapeera',
    publisher: 'Zapeera',
    metadataBase: new URL('https://zapeera.com'),
    openGraph: {
      title: `${solution.title} - Zapeera`,
      description: solution.description,
      url: `https://zapeera.com/solutions/${params.slug}`,
      siteName: 'Zapeera',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: `https://zapeera.com/og-${params.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: solution.title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${solution.title} - Zapeera`,
      description: solution.description,
      images: [`https://zapeera.com/og-${params.slug}.jpg`],
      creator: '@zapeera',
    },
    alternates: {
      canonical: `https://zapeera.com/solutions/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = solutions[params.slug as keyof typeof solutions];

  if (!solution) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-hero shadow-sm border-b pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Link href="/solutions" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl">🏪</span>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">
                  {solution.industry}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {solution.title}
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8">
              {solution.description}
            </p>
          </div>
        </div>
      </div>

      {/* Pain Points & Solutions */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pain Points */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Common Challenges</h2>
              <div className="space-y-4">
                {solution.painPoints.map((pain, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">How Zapeera Helps</h2>
              <div className="space-y-4">
                {solution.solutions.map((sol, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solution.features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solution.benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-primary/5 rounded-lg">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                <div className="text-muted-foreground">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solution.testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg mb-4 italic">"{testimonial.quote}"</blockquote>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.business}, {testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(solution.pricing).map(([key, plan]) => (
              <Card key={key} className={`p-6 ${(plan as any).popular ? 'border-primary shadow-lg' : ''}`}>
                <CardContent className="p-0">
                  {(plan as any).popular && (
                    <div className="text-center mb-4">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                  <div className="text-muted-foreground mb-6">{plan.period}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${(plan as any).popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`} asChild>
                    <Link href="/contact-us">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your {solution.industry} Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of {solution.industry.toLowerCase()} businesses that trust Zapeera to manage their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 rounded-full font-semibold" asChild>
              <Link href="/contact-us">Start Free Trial</Link>
            </Button>
            <Button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-full font-semibold" asChild>
              <Link href="/contact-us">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
