
import React, { useEffect, useRef } from 'react';

const philosophyPoints = [
  {
    number: "01",
    title: "Building",
    description: "I see building as an essential part of thinking. A design is never complete until it has passed through the honesty of materials, structure, and gravity. When I build, I learn what drawings cannot show: how weight is carried, how joints behave, how a form responds to touch, and how a space feels when occupied. Building grounds ideas in reality and reminds me that every design must ultimately serve people, movement, and environment."
  },
  {
    number: "02",
    title: "Creating",
    description: "Creativity, for me, is an open-ended exploration fueled by curiosity. I move fluidly between sketching, modeling, and prototyping, allowing the process itself to reveal possibilities I could not predict. I value clean and intentional forms that have purpose in every angle and gesture. Creativity grows when the mind and hand work together, when experimentation is encouraged, and when no idea is too rough to be explored."
  },
  {
    number: "03",
    title: "Learning",
    description: "Learning is the foundation that connects every part of my process. Each project, whether successful or imperfect, sharpens my understanding of materials, ergonomics, and spatial experience. I believe strong design requires humility: the willingness to revise, to ask questions, and to let each challenge refine both the idea and the designer behind it. Learning ensures that my work and my approach continue to evolve with every build."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Philosophy</h2>
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
            "Enjoy the butterflies, enjoy being naïve
Enjoy the nerves, the pressure, people not knowing your name. 
Enjoy the process of making a name for yourself, getting faster and faster with each lap and meeting some great people along the way
Bring friends along. Bring family along. Don't assume they'll be a distraction. Don't be afraid to surround yourself with people you care about and love."
          </blockquote>
          <div className="text-gray-500">— Danielle Ricciardo</div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
