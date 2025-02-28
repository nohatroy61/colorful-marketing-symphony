
import React from 'react';
import AnimatedHeading from '../ui/AnimatedHeading';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "NexusNetwork transformed our digital marketing strategy. Their affiliate partnerships helped us reach new markets we hadn't tapped into before.",
      author: "Sarah Johnson",
      company: "FitTech Solutions",
      delay: "0.1s"
    },
    {
      quote: "Working with NexusNetwork has been game-changing for our e-commerce brand. Their performance marketing approach delivered a 215% increase in ROAS.",
      author: "Michael Chen",
      company: "Urban Essentials",
      delay: "0.2s"
    },
    {
      quote: "The team at NexusNetwork understands digital marketing at a profound level. Their insights and execution have been invaluable to our growth.",
      author: "Emma Rodriguez",
      company: "Bloom Beauty",
      delay: "0.3s"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-brand-lavender/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-4 inline-block bg-brand-lavender px-4 py-1.5 rounded-full">
            <p className="text-sm font-medium text-brand-purple">Client Success</p>
          </div>
          
          <AnimatedHeading
            gradient
            align="center"
            className="text-3xl sm:text-4xl mb-6"
          >
            What Our Clients Say
          </AnimatedHeading>
          
          <p className="text-lg text-brand-dark/80 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Discover how we've helped businesses like yours achieve remarkable results through our 
            innovative digital marketing solutions.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0"
              style={{ animationDelay: testimonial.delay, animationFillMode: 'forwards' }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
