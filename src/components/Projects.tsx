
import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

export const projectsData = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Urban Residence",
    description: "A modern minimalist residence designed to maximize natural light while maintaining privacy in an urban setting.",
    year: "2023",
    location: "New York, NY"
  },
  {
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Lakeside Retreat",
    description: "Harmonizing with the surrounding landscape, this retreat employs sustainable materials and passive design strategies.",
    year: "2022",
    location: "Lake Tahoe, CA"
  },
  {
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Suburban Transformation",
    description: "Renovation project that transformed a traditional suburban house into a contemporary living space with open floor plans.",
    year: "2021",
    location: "Portland, OR"
  }
];

const Projects = () => {
  const titleRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-6 md:px-12">
        <div ref={titleRef} className="reveal from-bottom mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gray-900"></div>
        </div>
        
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              year={project.year}
              location={project.location}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
