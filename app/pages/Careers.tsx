'use client'

import { useState, useRef } from 'react';
import FloatingCTA from "@/app/components/FloatingCTA";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import Loading from "../components/ui/loading";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/app/components/ui/dialog";

const Careers = () => {
  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<{ [key: number]: File | null }>({});
  const formRefs = useRef<{ [key: number]: HTMLFormElement | null }>({});

  const openPositions = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Join our engineering team to build beautiful, performant user interfaces using React and TypeScript.",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Help shape the future of business management software with your creative vision and user-centered design approach.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Be the voice of our customers and help them achieve success with Zapeera's platform.",
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Build scalable, reliable backend systems that power thousands of businesses worldwide.",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive growth and brand awareness through innovative marketing strategies and campaigns.",
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Connect with potential customers and help them discover how Zapeera can transform their business.",
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        toast.error('File too large', {
          description: 'Please select a file smaller than 5MB.',
        });
        e.target.value = ''; // Clear the input
        setSelectedFiles((prev) => ({ ...prev, [index]: null }));
        return;
      }

      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
        toast.error('Invalid file type', {
          description: 'Please select a PDF, DOC, or DOCX file.',
        });
        e.target.value = ''; // Clear the input
        setSelectedFiles((prev) => ({ ...prev, [index]: null }));
        return;
      }

      setSelectedFiles((prev) => ({ ...prev, [index]: file }));
      toast.success('File selected', {
        description: `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`,
      });
    } else {
      setSelectedFiles((prev) => ({ ...prev, [index]: null }));
    }
  };

  const handleApply = async (e: React.FormEvent<HTMLFormElement>, position: typeof openPositions[0], index: number) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const resumeFile = selectedFiles[index] || (formData.get('resume') as File | null);

    // Create FormData to send file
    const submitFormData = new FormData();
    submitFormData.append('firstName', formData.get('firstName') as string);
    submitFormData.append('lastName', formData.get('lastName') as string);
    submitFormData.append('email', formData.get('email') as string);
    submitFormData.append('phone', formData.get('phone') as string);
    submitFormData.append('linkedin', formData.get('linkedin') as string || '');
    submitFormData.append('portfolio', formData.get('portfolio') as string || '');
    submitFormData.append('coverLetter', formData.get('coverLetter') as string || '');
    submitFormData.append('positionTitle', position.title);
    submitFormData.append('department', position.department);
    submitFormData.append('location', position.location);
    
    // Add resume file if provided
    if (resumeFile && resumeFile.size > 0) {
      submitFormData.append('resume', resumeFile);
    }

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: submitFormData, // Don't set Content-Type header, browser will set it with boundary
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Application submitted successfully!', {
          description: "We'll review your application and get back to you soon.",
        });
        // Reset form and close dialog
        if (formRefs.current[index]) {
          formRefs.current[index]?.reset();
        }
        setSelectedFiles((prev) => ({ ...prev, [index]: null }));
        setOpenDialogIndex(null);
      } else {
        toast.error('Failed to submit application', {
          description: result.error || 'Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application', {
        description: 'Please check your internet connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Loading>
      <div className="min-h-screen bg-background">
        <FloatingCTA />

        <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Join Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Amazing Team
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Help us build the future of business management. We're looking for talented individuals who are passionate about making a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Zapeera?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Competitive Salary", desc: "Industry-leading compensation packages" },
                { title: "Remote-First", desc: "Work from anywhere in the world" },
                { title: "Health Benefits", desc: "Comprehensive health, dental, and vision" },
                { title: "Learning Budget", desc: "Annual budget for courses and conferences" },
                { title: "Flexible Hours", desc: "Work when you're most productive" },
                { title: "Stock Options", desc: "Be an owner, not just an employee" },
                { title: "Paid Time Off", desc: "Generous PTO and holidays" },
                { title: "Great Culture", desc: "Collaborative and inclusive environment" },
              ].map((benefit, index) => (
                <Card key={index} className="p-6 text-center border-2 border-border hover:border-primary/50 transition-all">
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Open Positions</h2>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="p-6 lg:p-8 border-2 border-border hover:border-primary/50 transition-all animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{position.title}</h3>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                      </div>
                    </div>

                    <Dialog open={openDialogIndex === index} onOpenChange={(open) => setOpenDialogIndex(open ? index : null)}>
                      <DialogTrigger asChild>
                        <Button className="bg-gradient-primary hover:opacity-90 group">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Apply for {position.title}</DialogTitle>
                          <DialogDescription>
                            Fill out the form below to submit your application. We'll review your application and get back to you soon.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <form 
                          ref={(el) => {
                            if (el) formRefs.current[index] = el;
                          }}
                          onSubmit={(e) => handleApply(e, position, index)} 
                          className="space-y-6 mt-4"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor={`firstName-${index}`} className="block text-sm font-medium mb-2">
                                First Name *
                              </label>
                              <Input id={`firstName-${index}`} name="firstName" required />
                            </div>
                            <div>
                              <label htmlFor={`lastName-${index}`} className="block text-sm font-medium mb-2">
                                Last Name *
                              </label>
                              <Input id={`lastName-${index}`} name="lastName" required />
                            </div>
                          </div>

                          <div>
                            <label htmlFor={`email-${index}`} className="block text-sm font-medium mb-2">
                              Email Address *
                            </label>
                            <Input id={`email-${index}`} name="email" type="email" required />
                          </div>

                          <div>
                            <label htmlFor={`phone-${index}`} className="block text-sm font-medium mb-2">
                              Phone Number *
                            </label>
                            <Input id={`phone-${index}`} name="phone" type="tel" required />
                          </div>

                          <div>
                            <label htmlFor={`linkedin-${index}`} className="block text-sm font-medium mb-2">
                              LinkedIn Profile
                            </label>
                            <Input id={`linkedin-${index}`} name="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" />
                          </div>

                          <div>
                            <label htmlFor={`portfolio-${index}`} className="block text-sm font-medium mb-2">
                              Portfolio / Website
                            </label>
                            <Input id={`portfolio-${index}`} name="portfolio" type="url" placeholder="https://yourportfolio.com" />
                          </div>

                          <div>
                            <label htmlFor={`resume-${index}`} className="block text-sm font-medium mb-2">
                              Resume / CV *
                            </label>
                            <Input 
                              id={`resume-${index}`} 
                              name="resume" 
                              type="file" 
                              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                              required 
                              onChange={(e) => handleFileChange(e as React.ChangeEvent<HTMLInputElement>, index)}
                              className="cursor-pointer"
                            />
                            {selectedFiles[index] && (
                              <div className="mt-2 p-2 bg-muted rounded-md">
                                <p className="text-sm font-medium">
                                  ✓ {selectedFiles[index]!.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Size: {(selectedFiles[index]!.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            )}
                            <p className="text-xs text-muted-foreground mt-1">
                              Accepted formats: PDF, DOC, DOCX (Max 5MB)
                            </p>
                          </div>

                          <div>
                            <label htmlFor={`coverLetter-${index}`} className="block text-sm font-medium mb-2">
                              Cover Letter
                            </label>
                            <Textarea
                              id={`coverLetter-${index}`}
                              name="coverLetter"
                              placeholder="Tell us why you'd be a great fit for this role..."
                              className="min-h-[120px]"
                            />
                          </div>

                          <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full bg-gradient-primary hover:opacity-90"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't see the right role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Send General Application
            </Button>
          </div>
        </section>
        </main>
      </div>
    </Loading>
  );
};

export default Careers;
