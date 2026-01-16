'use client'

import { useState } from "react";
import type { Metadata } from 'next';
import { Calendar, CheckCircle, AlertCircle, TrendingUp, Users, Target, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import Container from "../components/ui/container";
import Loading from "../components/ui/loading";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Updates - Latest Zapeera Features & News',
  description: 'Stay updated with the latest Zapeera features, improvements, and business management insights. New updates, bug fixes, and feature releases.',
  keywords: [
    'zapeera updates',
    'business software updates',
    'POS system updates',
    'inventory management updates',
    'software release notes',
    'feature updates',
    'business management news'
  ],
  openGraph: {
    title: 'Updates - Latest Zapeera Features & News',
    description: 'Stay updated with the latest Zapeera features, improvements, and business management insights.',
    url: 'https://zapeera.com/updates',
    images: ['/og-updates.jpg'],
  },
  alternates: {
    canonical: 'https://zapeera.com/updates',
  },
};

const Updates = () => {
  const [selectedUpdate, setSelectedUpdate] = useState(0);

  const updates = [
    {
      id: 0,
      date: "2024-12",
      title: "Advanced Analytics Dashboard",
      period: "December 2024",
      status: "completed",
      content: {
        mainTitle: "Advanced Analytics Dashboard Released",
        description: "Launched comprehensive analytics dashboard with real-time insights, predictive analytics, and custom reporting features.",
        achievements: [
          {
            title: "Real-time Analytics",
            description: "Implemented real-time data processing for instant business insights",
            status: "completed",
            icon: TrendingUp
          },
          {
            title: "Predictive Analytics",
            description: "Added AI-powered forecasting for sales and inventory management",
            status: "completed", 
            icon: Target
          },
          {
            title: "Custom Reports",
            description: "Built flexible reporting system with drag-and-drop interface",
            status: "completed",
            icon: CheckCircle
          }
        ],
        challenges: [
          "Complex data processing requirements",
          "Real-time synchronization challenges",
          "User interface optimization"
        ],
        metrics: {
          team: "12 members",
          users: "2,500+",
          revenue: "$150K"
        }
      }
    },
    {
      id: 1,
      date: "2024-11",
      title: "Multi-Branch Management",
      period: "November 2024",
      status: "completed",
      content: {
        mainTitle: "Multi-Branch Management System",
        description: "Launched comprehensive multi-branch management system allowing businesses to manage multiple locations seamlessly.",
        achievements: [
          {
            title: "Centralized Management",
            description: "Built unified dashboard for managing all business branches",
            status: "completed",
            icon: Users
          },
          {
            title: "Inventory Synchronization",
            description: "Implemented real-time inventory sync across all branches",
            status: "completed", 
            icon: CheckCircle
          },
          {
            title: "Role-based Access",
            description: "Added granular permission system for different user roles",
            status: "completed",
            icon: Target
          }
        ],
        challenges: [
          "Cross-branch data synchronization",
          "Permission management complexity",
          "Performance optimization"
        ],
        metrics: {
          team: "10 members",
          users: "2,000+",
          revenue: "$120K"
        }
      }
    },
    {
      id: 2,
      date: "2024-10",
      title: "Mobile App Launch",
      period: "October 2024",
      status: "completed",
      content: {
        mainTitle: "Zapeera Mobile App Released",
        description: "Launched native mobile applications for iOS and Android, providing full business management capabilities on the go.",
        achievements: [
          {
            title: "Native Mobile Apps",
            description: "Developed and launched iOS and Android applications",
            status: "completed",
            icon: CheckCircle
          },
          {
            title: "Offline Capabilities",
            description: "Implemented offline mode for critical business operations",
            status: "completed", 
            icon: Target
          },
          {
            title: "Push Notifications",
            description: "Added real-time notifications for important business events",
            status: "completed",
            icon: TrendingUp
          }
        ],
        challenges: [
          "Cross-platform development",
          "Offline data synchronization",
          "App store approval process"
        ],
        metrics: {
          team: "8 members",
          users: "1,800+",
          revenue: "$100K"
        }
      }
    },
    {
      id: 3,
      date: "2024-09",
      title: "AI-Powered Inventory",
      period: "September 2024",
      status: "completed",
      content: {
        mainTitle: "AI-Powered Inventory Management",
        description: "Integrated artificial intelligence for smart inventory management, automatic reordering, and demand forecasting.",
        achievements: [
          {
            title: "Smart Reordering",
            description: "AI automatically suggests when and how much to reorder",
            status: "completed",
            icon: Lightbulb
          },
          {
            title: "Demand Forecasting",
            description: "Machine learning algorithms predict future demand patterns",
            status: "completed", 
            icon: TrendingUp
          },
          {
            title: "Waste Reduction",
            description: "Optimized inventory levels to reduce waste and costs",
            status: "completed",
            icon: Target
          }
        ],
        challenges: [
          "AI model training and accuracy",
          "Integration with existing systems",
          "User adoption and training"
        ],
        metrics: {
          team: "6 members",
          users: "1,500+",
          revenue: "$80K"
        }
      }
    },
    {
      id: 4,
      date: "2024-08",
      title: "Advanced POS Features",
      period: "August 2024",
      status: "completed",
      content: {
        mainTitle: "Enhanced POS System",
        description: "Upgraded point-of-sale system with advanced features including barcode scanning, receipt printing, and payment processing.",
        achievements: [
          {
            title: "Barcode Integration",
            description: "Added barcode scanning for quick product lookup",
            status: "completed",
            icon: CheckCircle
          },
          {
            title: "Receipt Management",
            description: "Implemented digital and physical receipt generation",
            status: "completed", 
            icon: Target
          },
          {
            title: "Payment Gateway",
            description: "Integrated multiple payment methods and gateways",
            status: "completed",
            icon: TrendingUp
          }
        ],
        challenges: [
          "Hardware integration complexity",
          "Payment security compliance",
          "User interface optimization"
        ],
        metrics: {
          team: "5 members",
          users: "1,200+",
          revenue: "$60K"
        }
      }
    },
    {
      id: 5,
      date: "2024-07",
      title: "Customer Management System",
      period: "July 2024",
      status: "completed",
      content: {
        mainTitle: "Comprehensive Customer Management",
        description: "Launched advanced customer relationship management system with customer profiles, purchase history, and loyalty programs.",
        achievements: [
          {
            title: "Customer Profiles",
            description: "Built detailed customer profiles with purchase history",
            status: "completed",
            icon: Users
          },
          {
            title: "Loyalty Programs",
            description: "Implemented customer loyalty and rewards system",
            status: "completed", 
            icon: Award
          },
          {
            title: "Communication Tools",
            description: "Added email and SMS marketing capabilities",
            status: "completed",
            icon: CheckCircle
          }
        ],
        challenges: [
          "Data privacy compliance",
          "Customer data integration",
          "Marketing automation setup"
        ],
        metrics: {
          team: "4 members",
          users: "1,000+",
          revenue: "$40K"
        }
      }
    },
    {
      id: 6,
      date: "2024-06",
      title: "Staff Management Module",
      period: "June 2024",
      status: "completed",
      content: {
        mainTitle: "Staff Management System",
        description: "Developed comprehensive staff management module with scheduling, attendance tracking, and performance monitoring.",
        achievements: [
          {
            title: "Shift Scheduling",
            description: "Built intelligent shift scheduling system",
            status: "completed",
            icon: Calendar
          },
          {
            title: "Attendance Tracking",
            description: "Implemented time tracking and attendance management",
            status: "completed", 
            icon: CheckCircle
          },
          {
            title: "Performance Metrics",
            description: "Added staff performance monitoring and reporting",
            status: "completed",
            icon: TrendingUp
          }
        ],
        challenges: [
          "Complex scheduling algorithms",
          "Time tracking accuracy",
          "Performance metric calculations"
        ],
        metrics: {
          team: "3 members",
          users: "800+",
          revenue: "$30K"
        }
      }
    },
    {
      id: 7,
      date: "2024-05",
      title: "Inventory Management",
      period: "May 2024",
      status: "completed",
      content: {
        mainTitle: "Advanced Inventory Management",
        description: "Launched comprehensive inventory management system with real-time tracking, low stock alerts, and supplier management.",
        achievements: [
          {
            title: "Real-time Tracking",
            description: "Implemented real-time inventory level monitoring",
            status: "completed",
            icon: Target
          },
          {
            title: "Automated Alerts",
            description: "Added low stock and reorder point notifications",
            status: "completed", 
            icon: AlertCircle
          },
          {
            title: "Supplier Integration",
            description: "Built supplier management and purchase order system",
            status: "completed",
            icon: CheckCircle
          }
        ],
        challenges: [
          "Real-time data synchronization",
          "Alert system optimization",
          "Supplier data integration"
        ],
        metrics: {
          team: "3 members",
          users: "600+",
          revenue: "$20K"
        }
      }
    },
    {
      id: 8,
      date: "2024-04",
      title: "Basic POS System",
      period: "April 2024",
      status: "completed",
      content: {
        mainTitle: "Core POS System Launch",
        description: "Launched the foundational point-of-sale system with basic transaction processing, product management, and sales reporting.",
        achievements: [
          {
            title: "Transaction Processing",
            description: "Built core transaction processing functionality",
            status: "completed",
            icon: CheckCircle
          },
          {
            title: "Product Management",
            description: "Implemented product catalog and pricing management",
            status: "completed", 
            icon: Target
          },
          {
            title: "Sales Reporting",
            description: "Added basic sales reports and analytics",
            status: "completed",
            icon: TrendingUp
          }
        ],
        challenges: [
          "Transaction security",
          "User interface design",
          "Data accuracy and validation"
        ],
        metrics: {
          team: "2 members",
          users: "400+",
          revenue: "$10K"
        }
      }
    },
    {
      id: 9,
      date: "2024-03",
      title: "User Authentication",
      period: "March 2024",
      status: "completed",
      content: {
        mainTitle: "Secure User Authentication",
        description: "Implemented robust user authentication system with multi-factor authentication, role-based access control, and security features.",
        achievements: [
          {
            title: "Multi-Factor Authentication",
            description: "Added 2FA and SMS verification for enhanced security",
            status: "completed",
            icon: CheckCircle
          },
          {
            title: "Role-Based Access",
            description: "Implemented granular permission system",
            status: "completed", 
            icon: Users
          },
          {
            title: "Security Monitoring",
            description: "Added login monitoring and security alerts",
            status: "completed",
            icon: AlertCircle
          }
        ],
        challenges: [
          "Security implementation complexity",
          "User experience optimization",
          "Performance impact of security features"
        ],
        metrics: {
          team: "2 members",
          users: "200+",
          revenue: "$5K"
        }
      }
    },
    {
      id: 10,
      date: "2024-02",
      title: "Database Architecture",
      period: "February 2024",
      status: "completed",
      content: {
        mainTitle: "Scalable Database Architecture",
        description: "Designed and implemented robust database architecture capable of handling high-volume transactions and data processing.",
        achievements: [
          {
            title: "Database Design",
            description: "Created optimized database schema for business operations",
            status: "completed",
            icon: Target
          },
          {
            title: "Data Security",
            description: "Implemented encryption and data protection measures",
            status: "completed", 
            icon: CheckCircle
          },
          {
            title: "Performance Optimization",
            description: "Optimized database queries for fast data retrieval",
            status: "completed",
            icon: TrendingUp
          }
        ],
        challenges: [
          "Complex data relationships",
          "Performance optimization",
          "Security implementation"
        ],
        metrics: {
          team: "2 members",
          users: "100+",
          revenue: "$2K"
        }
      }
    },
    {
      id: 11,
      date: "2024-01",
      title: "Platform Foundation",
      period: "January 2024",
      status: "completed",
      content: {
        mainTitle: "Zapeera Platform Foundation",
        description: "Started development of the Zapeera platform with core infrastructure, user interface framework, and basic functionality.",
        achievements: [
          {
            title: "Platform Architecture",
            description: "Designed scalable cloud-based platform architecture",
            status: "completed",
            icon: Lightbulb
          },
          {
            title: "User Interface",
            description: "Built responsive web interface with modern design",
            status: "completed", 
            icon: CheckCircle
          },
          {
            title: "Core Infrastructure",
            description: "Established cloud infrastructure and deployment pipeline",
            status: "completed",
            icon: Target
          }
        ],
        challenges: [
          "Technology stack selection",
          "Scalability planning",
          "Initial development setup"
        ],
        metrics: {
          team: "1 member",
          users: "0",
          revenue: "$0"
        }
      }
    },
    {
      id: 1,
      date: "2023",
      title: "The Struggle Phase",
      period: "Mid 2023",
      status: "completed",
      content: {
        mainTitle: "Facing the Challenges Head-On",
        description: "This was our most difficult period. We faced multiple setbacks, funding issues, and technical challenges that almost made us quit.",
        achievements: [
          {
            title: "Seed Funding Secured",
            description: "Raised $50K from angel investors after 200+ rejections",
            status: "completed",
            icon: TrendingUp
          },
          {
            title: "Technical Breakthrough",
            description: "Solved the real-time synchronization problem that was blocking us",
            status: "completed",
            icon: CheckCircle
          },
          {
            title: "First Beta Users",
            description: "Got 10 businesses to test our platform",
            status: "completed",
            icon: Users
          }
        ],
        challenges: [
          "200+ investor rejections",
          "Technical architecture issues",
          "Team member departures",
          "Competition from established players"
        ],
        metrics: {
          team: "3 members",
          users: "10",
          revenue: "$500"
        }
      }
    },
    {
      id: 2,
      date: "2022",
      title: "The Search Begins",
      period: "Early 2022",
      status: "completed",
      content: {
        mainTitle: "The Problem That Started It All",
        description: "We realized that most businesses were struggling with disconnected systems. This was the moment we decided to build something better.",
        achievements: [
          {
            title: "Problem Identification",
            description: "Identified the core issues with existing business management tools",
            status: "completed",
            icon: AlertCircle
          },
          {
            title: "Market Analysis",
            description: "Analyzed 500+ businesses to understand their pain points",
            status: "completed",
            icon: Target
          },
          {
            title: "Solution Design",
            description: "Designed the initial architecture for Zapeera",
            status: "completed",
            icon: Lightbulb
          }
        ],
        challenges: [
          "Understanding market needs",
          "Finding the right co-founders",
          "Learning about business management",
          "Competitive analysis"
        ],
        metrics: {
          team: "2 members",
          users: "0",
          revenue: "$0"
        }
      }
    },
    {
      id: 3,
      date: "2021",
      title: "The Flop Phase",
      period: "Late 2021",
      status: "completed",
      content: {
        mainTitle: "Learning from Failure",
        description: "Our first attempt was a complete failure. We built something nobody wanted, but it taught us valuable lessons.",
        achievements: [
          {
            title: "First Product Launch",
            description: "Launched our first product - it was a complete flop",
            status: "failed",
            icon: AlertCircle
          },
          {
            title: "Customer Feedback",
            description: "Gathered critical feedback from 50+ potential users",
            status: "completed",
            icon: Users
          },
          {
            title: "Pivot Decision",
            description: "Decided to completely pivot our approach",
            status: "completed",
            icon: TrendingUp
          }
        ],
        challenges: [
          "Product-market fit issues",
          "Poor user experience design",
          "Lack of customer validation",
          "Technical debt accumulation"
        ],
        metrics: {
          team: "4 members",
          users: "5",
          revenue: "$100"
        }
      }
    },
    {
      id: 4,
      date: "2020",
      title: "The Beginning",
      period: "Early 2020",
      status: "completed",
      content: {
        mainTitle: "The Idea That Changed Everything",
        description: "It all started with a simple observation: businesses were wasting time switching between different software tools.",
        achievements: [
          {
            title: "Initial Concept",
            description: "Came up with the idea for an all-in-one business platform",
            status: "completed",
            icon: Lightbulb
          },
          {
            title: "Market Research",
            description: "Started researching the business management software market",
            status: "completed",
            icon: Target
          },
          {
            title: "First Code",
            description: "Wrote the first lines of code for what would become Zapeera",
            status: "completed",
            icon: CheckCircle
          }
        ],
        challenges: [
          "No technical background",
          "Limited resources",
          "Uncertain market demand",
          "Learning curve"
        ],
        metrics: {
          team: "1 member",
          users: "0",
          revenue: "$0"
        }
      }
    },
    {
      id: 5,
      date: "2024",
      title: "Current Success",
      period: "Present",
      status: "current",
      content: {
        mainTitle: "How We Became Successful",
        description: "Today, Zapeera serves over 5,000 businesses worldwide and has become a trusted name in business management solutions.",
        achievements: [
          {
            title: "5,000+ Active Users",
            description: "Serving businesses across 25+ countries",
            status: "completed",
            icon: Users
          },
          {
            title: "Series A Funding",
            description: "Raised $2M in Series A funding",
            status: "completed",
            icon: TrendingUp
          },
          {
            title: "Industry Recognition",
            description: "Won 'Best Business Management Platform 2024' award",
            status: "completed",
            icon: Award
          }
        ],
        challenges: [
          "Scaling infrastructure",
          "International expansion",
          "Maintaining quality",
          "Competition management"
        ],
        metrics: {
          team: "50+ members",
          users: "5,000+",
          revenue: "$2M+"
        }
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      case "current": return "bg-blue-100 text-blue-800 border-blue-200";
      case "failed": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-4 h-4" />;
      case "current": return <TrendingUp className="w-4 h-4" />;
      case "failed": return <AlertCircle className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        {/* Header */}
      <div className="bg-gradient-hero shadow-sm border-b pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex items-center justify-center gap-4 font-bold text-foreground mb-6">
              Feature
              <span className=" text-transparent bg-clip-text bg-gradient-primary">
                Updates
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Track our development journey from 2024 onwards - see how Zapeera evolved with new features
            </p>
          </div>
        </div>
      </div>
<Container>

<div className=" py-12">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Timeline Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">Timeline</h3>
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/30">
                  {updates.map((update, index) => (
                    <div
                      key={update.id}
                      onClick={() => setSelectedUpdate(index)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedUpdate === index
                          ? "bg-primary/10 border-primary shadow-md"
                          : "bg-card border-border hover:border-primary/50 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(update.status)}`}>
                          {getStatusIcon(update.status)}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground">{update.date}</div>
                          <div className="text-xs text-muted-foreground">{update.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {updates[selectedUpdate].content.mainTitle}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {updates[selectedUpdate].content.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Key Achievements</h3>
                    <div className="space-y-4">
                      {updates[selectedUpdate].content.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(achievement.status)}`}>
                            <achievement.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                          <Badge variant="outline" className={getStatusColor(achievement.status)}>
                            {achievement.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Challenges Faced</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {updates[selectedUpdate].content.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                          <AlertCircle className="w-5 h-5 text-destructive" />
                          <span className="text-sm text-destructive">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-primary/10 rounded-lg">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">{updates[selectedUpdate].content.metrics.team}</div>
                      <div className="text-sm text-primary/80">Team Size</div>
                    </div>
                    <div className="text-center p-6 bg-secondary/10 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-secondary">{updates[selectedUpdate].content.metrics.users}</div>
                      <div className="text-sm text-secondary/80">Active Users</div>
                    </div>
                    <div className="text-center p-6 bg-accent/10 rounded-lg">
                      <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold text-accent">{updates[selectedUpdate].content.metrics.revenue}</div>
                      <div className="text-sm text-accent/80">Revenue</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
</Container>

      {/* Call to Action */}
      <div className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Own Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Zapeera to manage their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 rounded-full font-semibold transition-colors" asChild>
              <Link href="/contact-us">Start Free Trial</Link>
            </Button>
            <Button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-full font-semibold transition-colors w-full sm:w-auto" asChild>
              <Link href="/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </Loading>
  );
};

export default Updates;
