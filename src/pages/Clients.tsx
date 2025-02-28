
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import { ArrowRight, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      company: "FitTech Solutions",
      industry: "Health & Fitness",
      challenge: "Expanding user base for a fitness app in a crowded market.",
      solution: "Targeted affiliate marketing campaign with fitness influencers.",
      results: ["215% increase in sign-ups", "38% reduction in acquisition costs", "4.8/5 average user rating"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      delay: "0.1s"
    },
    {
      company: "Urban Essentials",
      industry: "E-commerce",
      challenge: "Struggling to differentiate in the competitive home goods market.",
      solution: "Performance marketing strategy focusing on high-intent keywords and retargeting.",
      results: ["187% increase in ROAS", "43% improvement in cart completion", "5x growth in email subscribers"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      delay: "0.2s"
    },
    {
      company: "Bloom Beauty",
      industry: "Beauty & Cosmetics",
      challenge: "New product launch with limited brand recognition.",
      solution: "Integrated campaign combining influencer partnerships and affiliate marketing.",
      results: ["Product sold out within 48 hours", "320% increase in website traffic", "18k+ new social media followers"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      delay: "0.3s"
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
              <p className="text-sm font-medium text-brand-purple">Success Stories</p>
            </div>
            
            <AnimatedHeading
              as="h1"
              gradient
              align="center"
              className="text-4xl sm:text-5xl mb-6"
            >
              Client Success Stories
            </AnimatedHeading>
            
            <p 
              className="text-lg sm:text-xl text-brand-dark/80 mb-8 sm:mb-10 max-w-3xl mx-auto animate-fade-in opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Discover how we've helped businesses across industries achieve exceptional results 
              through strategic digital marketing solutions.
            </p>
          </div>
        </section>
        
        {/* Clients Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div 
                  key={index} 
                  className="h-16 w-32 bg-brand-dark/5 rounded-md flex items-center justify-center animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
                >
                  <div className="text-brand-dark/40 font-semibold">CLIENT {index}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="mb-4 inline-block bg-brand-lavender px-4 py-1.5 rounded-full">
                <p className="text-sm font-medium text-brand-purple">Case Studies</p>
              </div>
              
              <AnimatedHeading
                gradient
                align="center"
                className="text-3xl sm:text-4xl mb-6"
              >
                Real Results for Real Businesses
              </AnimatedHeading>
              
              <p className="text-lg text-brand-dark/80 max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                See how our strategies have helped businesses overcome challenges and achieve their goals.
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div 
                  key={index} 
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:rtl' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'md:text-right md:ltr' : ''} animate-fade-in opacity-0`} style={{ animationDelay: study.delay, animationFillMode: 'forwards' }}>
                    <div className="mb-4 inline-block bg-brand-lavender px-4 py-1.5 rounded-full">
                      <p className="text-sm font-medium text-brand-purple">{study.industry}</p>
                    </div>
                    
                    <AnimatedHeading
                      gradient
                      className="text-3xl mb-2"
                    >
                      {study.company}
                    </AnimatedHeading>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="font-semibold text-lg text-brand-dark mb-2">The Challenge</h3>
                        <p className="text-brand-dark/80">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg text-brand-dark mb-2">Our Solution</h3>
                        <p className="text-brand-dark/80">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg text-brand-dark mb-2">The Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center">
                              <BarChart className="text-brand-purple mr-2 h-5 w-5" />
                              <span className="text-brand-dark/80">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Link
                      to="/contact"
                      className={`inline-flex items-center font-medium text-brand-purple hover:underline ${index % 2 === 1 ? 'md:justify-end' : ''}`}
                    >
                      Discuss your project <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                  
                  <div className="relative animate-fade-in opacity-0" style={{ animationDelay: study.delay, animationFillMode: 'forwards' }}>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-elevation">
                      <img 
                        src={study.image} 
                        alt={study.company} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    
                    {/* Floating stat card */}
                    <GlassmorphicCard className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6 sm:-right-8' : '-left-6 sm:-left-8'} max-w-[180px] animate-float shadow-elevation`}>
                      <p className="text-sm font-semibold text-brand-purple">{study.results[0].split(' ')[0]}</p>
                      <p className="text-xs text-brand-dark/80 mt-1">Impressive Results</p>
                    </GlassmorphicCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Clients;
