import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  className?: string;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary:
    'bg-lilac-500 text-white hover:bg-lilac-600 shadow-sm hover:shadow-md focus:ring-lilac-400',
    secondary:
    'bg-slate-600 text-white hover:bg-slate-700 shadow-sm hover:shadow-md focus:ring-slate-400',
    outline:
    'border-2 border-lilac-400 text-lilac-700 hover:bg-lilac-50 focus:ring-lilac-400',
    ghost: 'text-lilac-600 hover:bg-lilac-50 hover:text-lilac-700'
  };
  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-5 text-sm',
    lg: 'h-12 px-6 text-base'
  };
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>);

  }
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>);

}