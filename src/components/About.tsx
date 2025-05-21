
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.reveal');
    
    childElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      childElements?.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50">
      <div ref={sectionRef} className="container px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="reveal from-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gray-900 mb-8"></div>
              <p className="text-gray-600 mb-6">
                I'm an aspiring architect passionate about creating spaces that harmoniously blend functionality, aesthetics, and sustainability. With a strong foundation in architectural theory and practical design, I strive to develop innovative solutions that respond to both human needs and environmental concerns.
              </p>
              <p className="text-gray-600 mb-6">
                My approach to architecture centers on understanding the unique context of each project—its site, cultural significance, and the people who will interact with it. I believe that thoughtful design has the power to enhance lives and communities.
              </p>
              <p className="text-gray-600">
                Through my portfolio, you'll see my journey of exploration and growth as I work toward making a meaningful contribution to the built environment.
              </p>
            </div>
          </div>
          
          <div className="reveal from-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Architect working"
                className="w-full h-auto"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-6 shadow-lg max-w-xs">
                <h3 className="font-display text-xl mb-2">Education</h3>
                <p className="text-sm text-gray-600">Master of Architecture<br/>Harvard Graduate School of Design<br/>2018-2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
