
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import CtaSection from '@/components/sections/CtaSection';
import { Heart, Zap, Lightbulb, Target } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Alexandra Chen",
      role: "Founder & CEO",
      bio: "With 15+ years in digital marketing, Alexandra leads NexusNetwork with a vision to transform how brands connect with audiences.",
      delay: "0.1s"
    },
    {
      name: "Marcus Johnson",
      role: "Chief Marketing Officer",
      bio: "Marcus brings a wealth of experience from top global agencies, specializing in data-driven marketing strategies.",
      delay: "0.2s"
    },
    {
      name: "Sophia Rodriguez",
      role: "Head of Affiliate Relations",
      bio: "Sophia has built our network of 500+ premium affiliates, focusing on quality partnerships that deliver results.",
      delay: "0.3s"
    },
    {
      name: "David Kim",
      role: "Director of Technology",
      bio: "David leads our tech innovations, developing proprietary tracking and analytics solutions for our clients.",
      delay: "0.4s"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure our success by the results we deliver for our clients. Every strategy is designed with clear outcomes in mind."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly explore new approaches and technologies to keep our clients at the forefront of digital marketing."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We believe in transparent, ethical marketing practices that build long-term trust with audiences."
    },
    {
      icon: Zap,
      title: "Adaptability",
      description: "The digital landscape evolves rapidly, and we pride ourselves on our ability to adapt and evolve with it."
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
              <p className="text-sm font-medium text-brand-purple">Our Story</p>
            </div>
            
            <AnimatedHeading
              as="h1"
              gradient
              align="center"
              className="text-4xl sm:text-5xl mb-6"
            >
              About NexusNetwork
            </AnimatedHeading>
            
            <p 
              className="text-lg sm:text-xl text-brand-dark/80 mb-8 sm:mb-10 max-w-3xl mx-auto animate-fade-in opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              We're a team of digital marketing experts on a mission to help brands create 
              meaningful connections with their audiences through innovative strategies.
            </p>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevation">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="NexusNetwork team" 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Floating stat card */}
                <GlassmorphicCard className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 max-w-[180px] animate-float shadow-elevation">
                  <p className="text-3xl font-bold text-brand-purple mb-1">2008</p>
                  <p className="text-sm text-brand-dark">Founded in San Francisco</p>
                </GlassmorphicCard>
              </div>
              
              <div>
                <AnimatedHeading
                  gradient
                  className="text-3xl mb-6"
                >
                  Our Journey
                </AnimatedHeading>
                
                <div className="space-y-6 text-brand-dark/80">
                  <p className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                    Founded in 2008, NexusNetwork began with a simple mission: to create a more effective way for brands to connect 
                    with their audiences online. What started as a small affiliate network has grown into a comprehensive digital 
                    marketing company serving clients worldwide.
                  </p>
                  <p className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    Over the years, we've evolved alongside the digital landscape, continuously adapting our strategies to leverage 
                    new technologies and platforms. Through it all, our focus has remained on delivering measurable results that 
                    drive real business growth.
                  </p>
                  <p className="animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                    Today, we're proud to work with brands of all sizes, from emerging startups to established enterprises, helping 
                    them navigate the complex world of digital marketing with confidence and clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-brand-lavender/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="mb-4 inline-block bg-brand-lavender px-4 py-1.5 rounded-full">
                <p className="text-sm font-medium text-brand-purple">Our Values</p>
              </div>
              
              <AnimatedHeading
                gradient
                align="center"
                className="text-3xl sm:text-4xl mb-6"
              >
                What Drives Us
              </AnimatedHeading>
              
              <p className="text-lg text-brand-dark/80 max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Our core values guide everything we do – from how we work with clients to how we develop our strategies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <GlassmorphicCard 
                  key={index} 
                  className="text-center h-full animate-fade-in opacity-0" 
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
                  hoverEffect
                >
                  <div className="rounded-full bg-brand-lavender p-3 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="text-brand-purple" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-dark">{value.title}</h3>
                  <p className="text-brand-dark/70">{value.description}</p>
                </GlassmorphicCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="mb-4 inline-block bg-brand-lavender px-4 py-1.5 rounded-full">
                <p className="text-sm font-medium text-brand-purple">Our Team</p>
              </div>
              
              <AnimatedHeading
                gradient
                align="center"
                className="text-3xl sm:text-4xl mb-6"
              >
                Meet the Experts
              </AnimatedHeading>
              
              <p className="text-lg text-brand-dark/80 max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Our diverse team brings together expertise from across the digital marketing landscape.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in opacity-0"
                  style={{ animationDelay: member.delay, animationFillMode: 'forwards' }}
                >
                  <GlassmorphicCard className="text-center h-full" hoverEffect>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-purple to-brand-peach mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-brand-dark">{member.name}</h3>
                    <p className="text-brand-purple mb-4">{member.role}</p>
                    <p className="text-brand-dark/70">{member.bio}</p>
                  </GlassmorphicCard>
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

export default About;
