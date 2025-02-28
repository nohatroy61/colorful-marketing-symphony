
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, Link as LinkIcon, BarChart, Target, Users, MessageSquare } from 'lucide-react';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import AnimatedHeading from '../ui/AnimatedHeading';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: string;
}

const ServiceCard = ({ title, description, icon: Icon, delay }: ServiceCardProps) => (
  <div 
    className="animate-fade-in opacity-0"
    style={{ animationDelay: delay, animationFillMode: 'forwards' }}
  >
    <GlassmorphicCard hoverEffect className="h-full">
      <div className="rounded-full bg-brand-lavender p-3 w-12 h-12 flex items-center justify-center mb-6">
        <Icon className="text-brand-purple" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-brand-dark">{title}</h3>
      <p className="text-brand-dark/70 mb-4">{description}</p>
      
      <Link 
        to="/services"
        className="inline-flex items-center font-medium text-brand-purple hover:underline mt-auto"
      >
        Learn more <ChevronRight size={16} className="ml-1" />
      </Link>
    </GlassmorphicCard>
  </div>
);

const ServicesSection = ({ className }: { className?: string }) => {
  const services = [
    {
      title: 'Affiliate Network',
      description: 'Connect with our global network of premium affiliates to expand your reach and drive conversions.',
      icon: LinkIcon,
      delay: '0.1s'
    },
    {
      title: 'Performance Marketing',
      description: 'Data-driven campaigns designed to maximize ROI and deliver measurable results for your business.',
      icon: BarChart,
      delay: '0.2s'
    },
    {
      title: 'Global Reach',
      description: 'Target audiences across various markets with localized, culturally-relevant marketing strategies.',
      icon: Globe,
      delay: '0.3s'
    },
    {
      title: 'Influencer Partnerships',
      description: 'Collaborate with relevant influencers to authentically promote your products and services.',
      icon: Users,
      delay: '0.4s'
    },
    {
      title: 'Precision Targeting',
      description: 'Reach your ideal customers through sophisticated segmentation and targeting capabilities.',
      icon: Target,
      delay: '0.5s'
    },
    {
      title: 'Content Strategy',
      description: 'Develop engaging content that resonates with your audience and drives meaningful engagement.',
      icon: MessageSquare,
      delay: '0.6s'
    }
  ];

  return (
    <section className={cn("py-16 sm:py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-4 inline-block bg-brand-lavender px-4 py-1.5 rounded-full">
            <p className="text-sm font-medium text-brand-purple">Our Services</p>
          </div>
          
          <AnimatedHeading
            gradient
            align="center"
            className="text-3xl sm:text-4xl mb-6"
          >
            Comprehensive Digital Marketing Solutions
          </AnimatedHeading>
          
          <p className="text-lg text-brand-dark/80 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            From affiliate partnerships to targeted campaigns, we offer end-to-end marketing solutions 
            to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
