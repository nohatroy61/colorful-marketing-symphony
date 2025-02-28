
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassmorphicCard = ({ 
  children, 
  className, 
  hoverEffect = false,
  ...props 
}: GlassmorphicCardProps) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl glass p-6", 
        hoverEffect && "transition-all duration-300 hover:shadow-elevation hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
