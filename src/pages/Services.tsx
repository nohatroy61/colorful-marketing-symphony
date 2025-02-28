
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import CtaSection from '@/components/sections/CtaSection';
import { Check, ArrowRight, BarChart, Target, MessageSquare, Globe, Link as LinkIcon, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: LinkIcon,
      title: "Affiliate Network",
      description: "Connect with our global network of premium affiliates to expand your reach and drive conversions.",
      benefits: [
        "Access to 500+ vetted affiliate partners",
        "Performance-based commission structure",
        "Real-time tracking and analytics",
        "Dedicated affiliate management"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: BarChart,
      title: "Performance Marketing",
      description: "Data-driven campaigns designed to maximize ROI and deliver measurable results for your business.",
      benefits: [
        "Comprehensive campaign strategy",
        "A/B testing and optimization",
        "Conversion rate optimization",
        "Regular performance reporting"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Target audiences across various markets with localized, culturally-relevant marketing strategies.",
      benefits: [
        "Multi-language campaign management",
        "Regional market insights",
        "Localized content strategy",
        "International partnership network"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Users,
      title: "Influencer Partnerships",
      description: "Collaborate with relevant influencers to authentically promote your products and services.",
      benefits: [
        "Strategic influencer selection",
        "Campaign concept development",
        "Performance tracking",
        "Relationship management"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach your ideal customers through sophisticated segmentation and targeting capabilities.",
      benefits: [
        "Audience analysis and segmentation",
        "Custom targeting strategies",
        "Behavioral targeting options",
        "Retargeting campaigns"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: MessageSquare,
      title: "Content Strategy",
      description: "Develop engaging content that resonates with your audience and drives meaningful engagement.",
      benefits: [
        "Content audit and planning",
        "SEO-optimized content creation",
        "Distribution strategy",
        "Performance analysis"
      ],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 sm:pb-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-purple opacity-10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-brand-peach opacity-10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4 inline-block bg-brand-lavender px-4 py-1.5 rounded-full">
              <p className="text-sm font-medium text-brand-purple">Our Services</p>
            </div>
            
            <AnimatedHeading
              as="h1"
              gradient
              align="center"
              className="text-4xl sm:text-5xl mb-6"
            >
              Comprehensive Digital Marketing Solutions
            </AnimatedHeading>
            
            <p 
              className="text-lg sm:text-xl text-brand-dark/80 mb-8 sm:mb-10 max-w-3xl mx-auto animate-fade-in opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              We offer a full range of digital marketing services to help your brand stand out, 
              connect with your audience, and drive measurable business results.
            </p>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:rtl' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'md:text-right md:ltr' : ''}`}>
                    <div className="rounded-full bg-brand-lavender p-3 w-12 h-12 flex items-center justify-center mb-6">
                      <service.icon className="text-brand-purple" size={24} />
                    </div>
                    
                    <AnimatedHeading
                      gradient
                      className="text-3xl mb-4"
                    >
                      {service.title}
                    </AnimatedHeading>
                    
                    <p className="text-lg text-brand-dark/80 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center animate-fade-in opacity-0 ${index % 2 === 1 ? 'md:justify-end' : ''}`}
                          style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'forwards' }}
                        >
                          <div className="rounded-full bg-brand-lavender/60 p-1 flex items-center justify-center mr-3">
                            <Check className="text-brand-purple h-4 w-4" />
                          </div>
                          <span className="text-brand-dark/80">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                      <Link
                        to="/contact"
                        className={`inline-flex items-center font-medium text-brand-purple hover:underline ${index % 2 === 1 ? 'md:justify-end' : ''}`}
                      >
                        Get started with {service.title} <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="relative animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevation">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    
                    {/* Floating card */}
                    <GlassmorphicCard className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6 sm:-right-8' : '-left-6 sm:-left-8'} max-w-[180px] animate-float shadow-elevation`}>
                      <p className="text-sm font-semibold text-brand-purple">Feature</p>
                      <p className="text-xs text-brand-dark/80 mt-1">Specialized {service.title} Solutions</p>
                    </GlassmorphicCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CtaSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Services;
