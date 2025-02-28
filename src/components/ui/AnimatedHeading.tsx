
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  align?: 'left' | 'center' | 'right';
  animationDelay?: string;
}

const AnimatedHeading = ({ 
  as: Component = 'h2', 
  children, 
  className, 
  gradient = false,
  align = 'left',
  animationDelay = '0s'
}: AnimatedHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <Component 
      className={cn(
        'animate-fade-in opacity-0',
        gradient ? 'text-gradient font-bold' : 'font-semibold',
        alignmentClasses[align],
        className
      )}
      style={{ 
        animationDelay,
        animationFillMode: 'forwards' 
      }}
    >
      {children}
    </Component>
  );
};

export default AnimatedHeading;
