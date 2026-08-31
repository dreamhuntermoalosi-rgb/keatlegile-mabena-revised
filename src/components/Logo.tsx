import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = ''
}) => {
  const isDarkBg = variant === 'dark';

  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtextSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]';
  const badgeSize = size === 'sm' ? 'w-8 h-8 text-xs' : size === 'lg' ? 'w-12 h-12 text-base' : 'w-10 h-10 text-sm';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Monogram Badge */}
      <div
        className={`${badgeSize} rounded-sm flex items-center justify-center font-serif font-bold tracking-wider transition-transform duration-300 group-hover:scale-105 border ${
          isDarkBg
            ? 'bg-gradient-to-br from-[#E2C45C] via-[#D4AF37] to-[#A88616] text-[#003333] border-[#E2C45C] shadow-md'
            : 'bg-[#004C4C] text-[#D4AF37] border-[#004C4C] shadow-sm'
        }`}
      >
        KM
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-serif ${textSize} font-bold tracking-wider uppercase transition-colors duration-200 leading-none ${
            isDarkBg ? 'text-white group-hover:text-[#E2C45C]' : 'text-[#003333] group-hover:text-[#006666]'
          }`}
        >
          Keatlegile Mabena
        </span>
        <span
          className={`${subtextSize} tracking-widest font-semibold uppercase mt-1 leading-none ${
            isDarkBg ? 'text-[#D4AF37]' : 'text-[#006666]'
          }`}
        >
          Speaker • Career Success Expert • Author • Philanthropist
        </span>
      </div>
    </Link>
  );
};
