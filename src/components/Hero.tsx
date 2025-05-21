
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12">
        <div 
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
            Creating Spaces<br /> That Inspire
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Architecture as a journey: exploring, evolving, creating.
          </p>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-900 px-8 py-3 rounded-none hover:bg-gray-100 transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Scroll indicator with enhanced animations */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80">
        <span className="text-xs uppercase tracking-widest mb-2 animate-bounce">Scroll</span>
        <div className="flex flex-col items-center">
          <div className="w-px h-5 bg-white/60 animate-[pulse_2s_infinite]"></div>
          <div className="w-0.5 h-0 bg-white/80 animate-[scrollDown_1.5s_ease-in-out_infinite]" style={{
            animation: 'scrollDown 1.5s ease-in-out infinite',
          }}></div>
          <style jsx>{`
            @keyframes scrollDown {
              0% {
                height: 0;
                opacity: 0;
              }
              30% {
                height: 8px;
                opacity: 1;
              }
              100% {
                height: 0;
                opacity: 0;
                transform: translateY(20px);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Hero;
