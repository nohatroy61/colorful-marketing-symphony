
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeading from '../ui/AnimatedHeading';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-purple opacity-10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-brand-peach opacity-10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute -top-40 -right-40 w-80 h-80 border border-brand-purple/20 rounded-full animate-spin-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 inline-block bg-brand-lavender px-4 py-1.5 rounded-full">
            <p className="text-sm font-medium text-brand-purple animate-fade-in">
              Revolutionizing Digital Marketing
            </p>
          </div>
          
          <AnimatedHeading
            as="h1"
            gradient
            align="center"
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            animationDelay="0.1s"
          >
            Amplify Your Brand's Digital Presence
          </AnimatedHeading>
          
          <p 
            className="text-lg sm:text-xl text-brand-dark/80 mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Connect with the right audience through strategic affiliate partnerships 
            and results-driven digital marketing solutions.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <Link
              to="/contact"
              className="bg-brand-purple text-white px-8 py-3 rounded-lg font-medium inline-flex items-center hover:shadow-lg hover:shadow-brand-purple/20 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Get Started
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              to="/services"
              className="bg-transparent border border-brand-dark/20 text-brand-dark px-8 py-3 rounded-lg font-medium hover:border-brand-purple hover:text-brand-purple transition-colors duration-300 inline-flex items-center w-full sm:w-auto justify-center"
            >
              Discover Services
            </Link>
          </div>
        </div>
        
        {/* Stats Section */}
        <div 
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in opacity-0"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-brand-purple mb-2">500+</p>
            <p className="text-sm sm:text-base text-brand-gray">Affiliate Partners</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-brand-purple mb-2">98%</p>
            <p className="text-sm sm:text-base text-brand-gray">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-brand-purple mb-2">10M+</p>
            <p className="text-sm sm:text-base text-brand-gray">Monthly Impressions</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-brand-purple mb-2">15yrs</p>
            <p className="text-sm sm:text-base text-brand-gray">Industry Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
