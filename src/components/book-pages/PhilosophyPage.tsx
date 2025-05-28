
import React from 'react';

const PhilosophyPage = () => {
  const principles = [
    {
      title: "Context Responsive Design",
      description: "Architecture should respond to its environment and cultural context, creating a sense of place."
    },
    {
      title: "Sustainable Thinking", 
      description: "Integrating environmental considerations into every design decision for long-term positive impact."
    },
    {
      title: "Human Experience",
      description: "Prioritizing how people interact with and feel within spaces to enhance quality of life."
    }
  ];

  return (
    <div className="h-full p-12 flex flex-col">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold font-display text-gray-900 mb-4">
          Design Philosophy
        </h1>
        <div className="w-16 h-px bg-gray-900"></div>
      </div>

      {/* Principles */}
      <div className="flex-1 space-y-8">
        {principles.map((principle, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {principle.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-12 text-center">
        <blockquote className="text-lg font-display italic text-gray-700 leading-relaxed mb-4">
          "Architecture is not about building the impossible, but about building what is appropriate and attaining beauty through such an approach."
        </blockquote>
        <div className="text-sm text-gray-500">— Tadao Ando</div>
      </div>

    </div>
  );
};

export default PhilosophyPage;
