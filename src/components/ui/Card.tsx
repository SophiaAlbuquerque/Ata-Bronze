import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card = ({ children, className = '', padding = 'md', hover = false }: CardProps) => {
  const baseClasses = 'bg-white border border-gray-200 rounded-lg shadow-sm';
  const hoverClasses = hover ? 'hover:shadow-md transition-shadow cursor-pointer' : '';
  
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };
  
  const classes = [
    baseClasses,
    hoverClasses,
    paddingClasses[padding],
    className,
  ].join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
