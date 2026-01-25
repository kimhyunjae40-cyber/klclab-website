import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Outer Circuit Trace */}
      <path d="M4 15v-3a8 8 0 0 1 16 0v1" />
      <circle cx="4" cy="15" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="13" r="1.5" fill="currentColor" stroke="none" />

      {/* Middle Circuit Trace */}
      <path d="M8 17v-5a4 4 0 0 1 8 0v1" />
      <circle cx="8" cy="17" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="13" r="1.5" fill="currentColor" stroke="none" />

      {/* Inner Core Trace (Hook) */}
      <path d="M12 19v-5a2 2 0 0 1 2-2" />
      <circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="14" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
};