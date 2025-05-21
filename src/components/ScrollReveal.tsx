
import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
  
  return null;
};

export default ScrollReveal;
