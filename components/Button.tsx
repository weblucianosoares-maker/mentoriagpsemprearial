import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success';
  fullWidth?: boolean;
  subtext?: string;
  pulse?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  subtext,
  pulse = false,
  className = '',
  href,
  onClick,
  ...props 
}) => {
  const baseStyles = "font-bold rounded-lg transition-transform transform active:scale-95 flex flex-col items-center justify-center py-4 px-8 shadow-lg cursor-pointer decoration-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-400 hover:to-gold-500 border-2 border-transparent",
    secondary: "bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white",
    success: "bg-green-600 text-white hover:bg-green-500 border-2 border-transparent shadow-green-900/50"
  };
  
  const widthClass = fullWidth ? "w-full" : "w-auto";
  const pulseClass = pulse ? "animate-pulse" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${pulseClass} ${className}`;

  // Helper to handle scroll if no href provided
  const handleScrollToPricing = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e as any);
      return;
    }
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-xl md:text-2xl uppercase tracking-wide text-center font-black">{children}</span>
        {subtext && <span className="text-sm mt-1 font-medium opacity-90 text-center">{subtext}</span>}
      </a>
    );
  }

  return (
    <button 
      className={combinedClasses}
      {...props}
      onClick={handleScrollToPricing}
    >
      <span className="text-xl md:text-2xl uppercase tracking-wide text-center font-black">{children}</span>
      {subtext && <span className="text-sm mt-1 font-medium opacity-90 text-center">{subtext}</span>}
    </button>
  );
};