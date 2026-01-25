import React from 'react';

interface SymbolProps {
  className?: string;
}

/**
 * Symbol: Adaptive Learning
 * Concept: A core nucleus with orbital paths adjusting dynamically.
 */
export const SymbolAdaptive: React.FC<SymbolProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M16 4C9.37258 4 4 9.37258 4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 16C28 22.6274 22.6274 28 16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 10L20.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 22L11.5 20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="22" cy="10" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
);

/**
 * Symbol: Contextual Continuity
 * Concept: An infinite flow, weaving through time and space without breaking.
 */
export const SymbolContext: React.FC<SymbolProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 20C4 20 9 12 16 12C23 12 28 20 28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12C4 12 9 20 16 20C23 20 28 12 28 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
    <circle cx="28" cy="12" r="1.5" fill="currentColor" />
    <circle cx="4" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * Symbol: Empathic Interface
 * Concept: Two soft shapes merging/overlapping, representing the union of human emotion and AI logic.
 */
export const SymbolEmpathy: React.FC<SymbolProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16C6 19.3137 8.68629 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 22C23.3137 22 26 19.3137 26 16C26 12.6863 23.3137 10 20 10C16.6863 10 14 12.6863 14 16C14 19.3137 16.6863 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeOpacity="0.7"/>
    <path d="M16 13V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/**
 * Symbol: Proactive Care
 * Concept: A spark of insight, radiating outwards before it's asked for.
 */
export const SymbolProactive: React.FC<SymbolProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 16H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 11L19 16L13 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="2 2"/>
  </svg>
);