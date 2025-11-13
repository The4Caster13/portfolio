
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to section or navigate to home then scroll
  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on homepage, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => navigate('/')} 
            className="text-xl md:text-2xl font-bold font-display tracking-tight hover:text-gray-600 transition-colors"
          >
            MATTHEW <span className="text-gray-400">CHEN</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-900 my-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <button onClick={() => navigate('/recent-work')} className="hover:text-gray-600 transition-colors">Photography</button>
          <button onClick={() => navigate('/projects')} className="hover:text-gray-600 transition-colors">Projects</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 transition-colors">About</button>
          <button onClick={() => scrollToSection('philosophy')} className="hover:text-gray-600 transition-colors">Philosophy</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">Contact</button>
        </nav>

        {/* Mobile navigation overlay */}
        <div className={`md:hidden fixed inset-0 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium">
            <button onClick={() => { navigate('/recent-work'); setMenuOpen(false); }} className="hover:text-gray-600 transition-colors">Photography</button>
            <button onClick={() => { navigate('/projects'); setMenuOpen(false); }} className="hover:text-gray-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('philosophy')} className="hover:text-gray-600 transition-colors">Philosophy</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
