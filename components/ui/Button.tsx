import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-vyne-neon text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,127,0.6)]",
    secondary: "bg-vyne-card text-vyne-neon border border-vyne-neon/30 hover:border-vyne-neon hover:shadow-[0_0_15px_rgba(0,255,127,0.2)]",
    outline: "border border-gray-700 text-gray-300 hover:border-white hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};