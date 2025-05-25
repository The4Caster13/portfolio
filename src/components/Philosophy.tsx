
import React, { useEffect, useRef } from 'react';

const philosophyPoints = [
  {
    number: "01",
    title: "Context Responsive Design",
    description: "Architecture should respond to its environment and cultural context, creating a sense of place."
  },
  {
    number: "02",
    title: "Sustainable Thinking",
    description: "Integrating environmental considerations into every design decision for long-term positive impact."
  },
  {
    number: "03",
    title: "Human Experience",
    description: "Prioritizing how people interact with and feel within spaces to enhance quality of life."
  }
];

const Philosophy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('active');
            }, index * 200);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="philosophy" className="py-24 md:py-32">
      <div ref={sectionRef} className="container px-6 md:px-12">
        <div className="reveal from-bottom mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Philosophy</h2>
          <div className="w-24 h-1 bg-gray-900"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {philosophyPoints.map((point, index) => (
            <div key={index} className="reveal from-bottom">
              <div className="mb-3 text-3xl font-bold text-gray-200">{point.number}</div>
              <h3 className="text-lg font-bold mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal from-bottom max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-display italic leading-relaxed mb-6">
            "Architecture is not about building the impossible, which we can do if we have enough money and enough tools and enough computers. It's about building what is appropriate and about attaining beauty through such an approach."
          </blockquote>
          <div className="text-gray-500">— Tadao Ando</div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
