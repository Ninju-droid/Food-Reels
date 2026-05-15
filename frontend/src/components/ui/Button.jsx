import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-[#ff3b30] text-white hover:bg-[#ff453a] shadow-lg shadow-red-500/20',
    secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10',
    ghost: 'bg-transparent text-white hover:bg-white/5',
    outline: 'bg-transparent border-2 border-[#ff3b30] text-[#ff3b30] hover:bg-[#ff3b30] hover:text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
