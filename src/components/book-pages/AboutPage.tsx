
import React from 'react';

const AboutPage = () => {
  return (
    <div className="h-full p-12 flex">
      
      {/* Left Column - Text */}
      <div className="w-1/2 pr-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold font-display text-gray-900 mb-6">
          About Me
        </h1>
        <div className="w-16 h-px bg-gray-900 mb-8"></div>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            I'm an aspiring architect passionate about creating spaces that harmoniously blend functionality, aesthetics, and sustainability.
          </p>
          
          <p>
            My approach centers on understanding the unique context of each project—its site, cultural significance, and the people who will interact with it.
          </p>
          
          <p>
            Through thoughtful design, I believe architecture has the power to enhance lives and communities.
          </p>
        </div>

        {/* Education */}
        <div className="mt-8 p-6 bg-gray-50 border-l-4 border-gray-900">
          <h3 className="font-display text-lg font-semibold mb-2">Education</h3>
          <p className="text-gray-600">St. Robert CHS<br />2022-2026</p>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="w-1/2 pl-8 flex items-center">
        <div className="w-full aspect-[3/4] bg-gray-200 rounded-sm overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Architect working"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
