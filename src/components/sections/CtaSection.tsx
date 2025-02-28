
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedHeading from '../ui/AnimatedHeading';

const CtaSection = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-purple opacity-10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-peach opacity-10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto">
          <AnimatedHeading
            gradient
            align="center"
            className="text-3xl sm:text-4xl mb-6"
          >
            Ready to Transform Your Digital Marketing?
          </AnimatedHeading>
          
          <p 
            className="text-lg text-brand-dark/80 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Join hundreds of successful businesses that have partnered with NexusNetwork 
            to achieve exceptional growth and ROI.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
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
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
