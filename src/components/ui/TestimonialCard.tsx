
import React from 'react';
import { Quote } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  avatarSrc?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  company,
  avatarSrc,
  className
}: TestimonialCardProps) => {
  return (
    <GlassmorphicCard className={cn("flex flex-col h-full", className)} hoverEffect>
      <Quote size={36} className="text-brand-purple opacity-50 mb-4" />
      <p className="text-lg leading-relaxed flex-grow mb-6 text-brand-dark/80">
        "{quote}"
      </p>
      <div className="flex items-center mt-auto">
        {avatarSrc ? (
          <img 
            src={avatarSrc} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-brand-purple/20"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-brand-peach flex items-center justify-center text-white font-bold mr-4">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-brand-dark">{author}</p>
          <p className="text-sm text-brand-gray">{company}</p>
        </div>
      </div>
    </GlassmorphicCard>
  );
};

export default TestimonialCard;
