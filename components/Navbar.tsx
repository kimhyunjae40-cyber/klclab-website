import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine if we need light text (for dark backgrounds like the Technology page)
  // Only apply when not scrolled (transparent background)
  const isDarkPage = currentPage === 'technology';
  const isLightText = isDarkPage && !scrolled;

  // Dynamic classes based on state
  const textColorClass = isLightText ? 'text-white' : 'text-stone-900';
  const mutedTextColorClass = isLightText ? 'text-stone-300' : 'text-stone-600';
  const hoverTextColorClass = isLightText ? 'hover:text-white' : 'hover:text-stone-900';
  const logoBgClass = isLightText ? 'bg-white text-stone-900' : 'bg-stone-900 text-white';
  const buttonClass = isLightText 
    ? 'bg-white text-stone-900 hover:bg-stone-200' 
    : 'bg-stone-900 text-white hover:bg-stone-800';
  const menuButtonClass = isLightText ? 'text-white' : 'text-stone-900';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const page = href.replace('#', '');
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center">
        <div className={`
            flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300
            ${scrolled ? 'bg-white/80 shadow-sm border border-stone-200 w-full max-w-5xl' : 'bg-transparent w-full'}
        `}>
          {/* Logo */}
          <button onClick={() => handleNavClick('#home')} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${logoBgClass}`}>
                <Logo className="w-5 h-5" />
            </div>
            <span className={`font-bold text-lg tracking-tight font-[Manrope] transition-colors ${textColorClass}`}>KLCLAB</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const pageKey = link.href.replace('#', '');
              const isActive = currentPage === pageKey;
              return (
                <button 
                  key={link.label} 
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? `${textColorClass} font-bold` : `${mutedTextColorClass} ${hoverTextColorClass}`
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNavClick('#careers')}
              className={`hidden md:block px-5 py-2 rounded-full text-sm font-medium transition-colors ${buttonClass}`}
            >
              베타 참여
            </button>
            <button 
              className={`md:hidden ${menuButtonClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 p-6 md:hidden shadow-xl animate-fade-in-down">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button 
                key={link.label} 
                onClick={() => handleNavClick(link.href)}
                className="text-lg font-medium text-stone-900 text-left"
              >
                {link.label}
              </button>
            ))}
            <hr className="border-stone-100" />
            <button 
              onClick={() => handleNavClick('#careers')}
              className="w-full bg-stone-900 text-white px-5 py-3 rounded-xl text-center font-medium"
            >
              베타 참여
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};