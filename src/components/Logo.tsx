import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/images';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = false,
  className = ''
}) => {
  const isDarkBg = variant === 'dark';
  const [imageError, setImageError] = useState(false);

  const logoHeight =
    size === 'sm'
      ? 'h-8 sm:h-9 w-auto'
      : size === 'lg'
      ? 'h-14 sm:h-16 w-auto'
      : 'h-10 sm:h-12 w-auto';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}
      aria-label="Keatlegile Mabena Home"
    >
      {/* Official Website Logo */}
      {!imageError ? (
        <img
          src={IMAGES.logo}
          alt="Keatlegile Mabena"
          className={`${logoHeight} object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm`}
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className={`${
            size === 'sm'
              ? 'w-9 h-9 text-sm'
              : size === 'lg'
              ? 'w-14 h-14 text-lg'
              : 'w-11 h-11 text-base'
          } rounded-sm flex items-center justify-center font-serif font-bold tracking-wider transition-transform duration-300 group-hover:scale-105 border ${
            isDarkBg
              ? 'bg-gradient-to-br from-[#E2C45C] via-[#D4AF37] to-[#A88616] text-[#5a1f10] border-[#E2C45C] shadow-md'
              : 'bg-[#7e2e19] text-[#D4AF37] border-[#7e2e19] shadow-sm'
          }`}
        >
          KM
        </div>
      )}
    </Link>
  );
};
