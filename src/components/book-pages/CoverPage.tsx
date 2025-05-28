
import React from 'react';

const CoverPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-8 max-w-lg">
        
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 leading-tight">
            MATTHEW
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-gray-600 font-display">
            CHEN
          </h2>
        </div>

        {/* Subtitle */}
        <div className="w-24 h-px bg-gray-400 mx-auto"></div>
        
        <p className="text-lg text-gray-600 font-light leading-relaxed">
          Architecture as a journey:<br />
          exploring, evolving, creating.
        </p>

        {/* Year */}
        <div className="text-sm text-gray-400 font-mono">
          Portfolio 2024
        </div>

      </div>
    </div>
  );
};

export default CoverPage;
