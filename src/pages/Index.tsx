
import React, { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, BarChart, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 bg-brand-lavender/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-4 inline-block bg-brand-lavender px-4 py-1.5 rounded-full">
                  <p className="text-sm font-medium text-brand-purple">Why Choose Us</p>
                </div>
                
                <AnimatedHeading
                  gradient
                  className="text-3xl sm:text-4xl mb-6"
                >
                  Elevate Your Brand with Data-Driven Strategies
                </AnimatedHeading>
                
                <p className="text-lg text-brand-dark/80 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  We combine cutting-edge technology with creative expertise to deliver marketing 
                  solutions that drive real business growth.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: BarChart,
                      title: "Results-Focused Approach",
                      description: "Every strategy is designed with clear KPIs and measurable outcomes."
                    },
                    {
                      icon: Target,
                      title: "Precision Targeting",
                      description: "Reach the right audience at the right time with data-backed insights."
                    },
                    {
                      icon: Award,
                      title: "Industry Expertise",
                      description: "Our team brings decades of experience across diverse markets."
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start animate-fade-in opacity-0"
                      style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
                    >
                      <div className="mt-1 rounded-full bg-brand-lavender p-2 flex items-center justify-center mr-4">
                        <item.icon className="text-brand-purple" size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-brand-dark mb-1">{item.title}</h3>
                        <p className="text-brand-dark/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                  <Link
                    to="/about"
                    className="inline-flex items-center font-medium text-brand-purple hover:underline"
                  >
                    Discover our approach <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevation">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Team working on digital marketing strategy" 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Floating stat card */}
                <GlassmorphicCard className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-8 max-w-[200px] animate-float shadow-elevation">
                  <p className="text-3xl font-bold text-brand-purple mb-1">215%</p>
                  <p className="text-sm text-brand-dark">Average ROAS for our clients</p>
                </GlassmorphicCard>
              </div>
            </div>
          </div>
        </section>
        
        <ServicesSection />
        <TestimonialsSection />
        
        {/* Brand Logos Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-lg font-medium text-brand-gray">Trusted by innovative brands worldwide</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div 
                  key={index} 
                  className="h-12 w-24 bg-brand-dark/5 rounded-md flex items-center justify-center animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
                >
                  <div className="text-brand-dark/40 font-semibold">LOGO {index}</div>
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

export default Index;
