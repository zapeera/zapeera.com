import type { Metadata } from 'next';
import Image from "next/image";
import {
  Building2,
  Users,
  Package,
  ShoppingCart,
  FileText,
  BarChart3,
  UserCog,
  GitBranch,
  Warehouse,
  UserCheck,
  Factory,
  Layout,
  Truck,
} from "lucide-react";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";

export const metadata: Metadata = {
  title: 'Features - Comprehensive Business Management Tools',
  description: "Discover Zapeera's powerful features: POS, inventory, analytics, and more.",
  openGraph: {
    title: 'Features - Comprehensive Business Management Tools',
    description: "Discover Zapeera's powerful features: POS, inventory, analytics, and more.",
    url: 'https://zapeera.com/features',
    images: ['/og-features.jpg'],
  },
  alternates: { canonical: 'https://zapeera.com/features' },
};

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: "Multiple Business Management",
      description: "Effortlessly manage multiple businesses from a single, unified dashboard.",
      benefits: [
        "Consolidated view of all business operations",
        "Switch between businesses with one click",
        "Separate accounting and reporting per business",
        "Individual branding for each business",
      ],
      image: "/images/business.webp",
    },
    {
      icon: GitBranch,
      title: "Multi-Branch Management",
      description: "Coordinate and monitor operations across all your locations in real-time.",
      benefits: [
        "Centralized control with branch autonomy",
        "Real-time sync across all locations",
        "Branch-specific performance tracking",
        "Inter-branch inventory transfers",
      ],
      image: "/feature/Branch Menagement.webp",
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Organize your team with comprehensive employee management tools.",
      benefits: [
        "Role-based access control",
        "Time tracking and attendance",
        "Performance analytics per employee",
        "Shift scheduling and management",
      ],
      image: "/feature/Staff Menagement.webp",
    },
    {
      icon: Warehouse,
      title: "Inventory Management & Tracking",
      description: "Keep perfect track of your stock levels with intelligent inventory management.",
      benefits: [
        "Real-time stock level monitoring",
        "Automated low-stock alerts",
        "Batch and serial number tracking",
        "Supplier management",
      ],
      image: "/feature/Inventory Management.webp",
    },
    {
      icon: ShoppingCart,
      title: "Advanced POS Management",
      description: "Lightning-fast point-of-sale system that works online and offline.",
      benefits: [
        "Quick checkout process",
        "Multiple payment methods",
        "Offline mode with auto-sync",
        "Customer display integration",
      ],
      image: "/feature/POS.webp",
    },
    {
      icon: FileText,
      title: "Smart Billing & Invoicing",
      description: "Generate professional invoices and receipts instantly.",
      benefits: [
        "Customizable invoice templates",
        "Automated recurring billing",
        "Tax calculation and compliance",
        "Email and SMS invoice delivery",
      ],
      image: "/feature/Smart Billing & Invoicing.webp",
    },
    {
      icon: FileText,
      title: "Invoice Management",
      description: "Comprehensive invoice management system for streamlined billing processes.",
      benefits: [
        "Automated invoice generation",
        "Payment tracking and reminders",
        "Invoice templates customization",
        "Multi-currency invoice support",
      ],
      image: "/feature/Invoices.webp",
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description: "Make data-driven decisions with comprehensive business insights.",
      benefits: [
        "Real-time sales dashboards",
        "Profit and loss statements",
        "Inventory turnover reports",
        "Custom report builder",
      ],
      image: "/feature/Reports & Analytics.webp",
    },
    {
      icon: UserCog,
      title: "Role-Based Access Management",
      description: "Control who sees what with granular permission controls.",
      benefits: [
        "Custom role creation",
        "Permission management",
        "Activity logs and audit trails",
        "Secure authentication",
      ],
      image: "/feature/Role-Based Access Management.webp",
    },
    {
      icon: Package,
      title: "Batch Management",
      description: "Efficiently manage product batches with comprehensive tracking and control.",
      benefits: [
        "Batch number tracking",
        "Expiry date monitoring",
        "Batch-wise inventory reports",
        "Quality control management",
      ],
      image: "/feature/Batch.webp",
    },
    {
      icon: UserCheck,
      title: "Customer Management",
      description: "Build lasting relationships with comprehensive customer management tools.",
      benefits: [
        "Customer profile management",
        "Purchase history tracking",
        "Customer loyalty programs",
        "Communication history",
      ],
      image: "/feature/customer.webp",
    },
    {
      icon: Factory,
      title: "Manufacturer Management",
      description: "Streamline manufacturer relationships and product sourcing processes.",
      benefits: [
        "Manufacturer database",
        "Product catalog management",
        "Supplier performance tracking",
        "Purchase order automation",
      ],
      image: "/feature/Manufactures.webp",
    },
    {
      icon: Layout,
      title: "Shelf Management",
      description: "Optimize your retail space with intelligent shelf management solutions.",
      benefits: [
        "Shelf layout planning",
        "Product placement optimization",
        "Shelf space utilization tracking",
        "Visual merchandising tools",
      ],
      image: "/feature/Shelf.webp",
    },
    {
      icon: Truck,
      title: "Supplier Management",
      description: "Manage your supplier relationships and procurement processes efficiently.",
      benefits: [
        "Supplier database management",
        "Purchase order tracking",
        "Delivery scheduling",
        "Supplier performance analytics",
      ],
      image: "/feature/Suppliers.webp",
    },
  ];

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Powerful Features for{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Modern Businesses
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Everything you need to manage, grow, and scale your business—all in one intelligent platform.
                </p>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 lg:py-32">
            <Container>
              <div className="space-y-16 lg:space-y-24">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 lg:gap-16 items-center animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                        <feature.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full">
                      <div className="rounded-2xl border border-border overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </main>
      </div>
    </Loading>
  );
};

export default Features;
