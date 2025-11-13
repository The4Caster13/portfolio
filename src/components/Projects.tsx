
import React, { useEffect, useRef } from 'react';
//assets
import initial from "../Assets/Assets/snowboard/initialplans.jpg";
import video from "../Assets/Assets/snowboard/creativetimelapse.mp4";
import ProjectCard from './ProjectCard';

export const projectsData = [
  {
    image: initial,
    title: "Snowboard Launcher",
    description: "What began as a simple desire to practice snowboard tricks at home evolved into a full architectural exploration of form, ergonomics, and environmental fit. The Snowboard Launcher project became a study in how creative play can intersect with technical precision, and how designing for movement requires a deep understanding of both the human body and spatial experience. The process started with loose, intuitive sketches—hand explorations mapping slope, posture, and momentum. As the idea matured, these sketches transformed into measured technical drawings, modular breakdowns, and material studies. Through this iterative workflow, the project shifted from a spontaneous idea into a carefully crafted system of interlocking geometries, structural stability, and rider safety. This project reinforced one of the most important lessons in design: creativity is not a moment of inspiration, but a disciplined sequence of testing, refining, and redefining. From early concepts to scaled models, CAD drafting, 3D visualization, and the final build, each phase contributed to a solution that balances function, aesthetics, and play.",
    year: "2024",
    location: "North York, ON",
    featured: true,
    media: video, 
    type: "video", 
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Lakeside Retreat",
    description: "Harmonizing with the surrounding landscape, this retreat employs sustainable materials and passive design strategies.",
    year: "2022",
    location: "Lake Tahoe, CA",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1536376072056-3a5f4f7b6a7c?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1536376072033-4e2e6b8e1c6d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1536375972964-84b6b7fd4b8a?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Suburban Transformation",
    description: "Renovation project that transformed a traditional suburban house into a contemporary living space with open floor plans.",
    year: "2021",
    location: "Portland, OR",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1480074554294-5c5bb7b0e9fb?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1480074554297-5c5bb7b0e9fc?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1480074554298-5c5bb7b0e9fd?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Modern Estate",
    description: "Expansive estate featuring contemporary architecture with panoramic views and luxury amenities.",
    year: "2023",
    location: "Beverly Hills, CA",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Coastal Modern",
    description: "Beachfront property with floor-to-ceiling glass walls and seamless indoor-outdoor living spaces.",
    year: "2022",
    location: "Miami Beach, FL",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Industrial Loft",
    description: "Converted warehouse space combining exposed structural elements with refined modern finishes.",
    year: "2021",
    location: "Chicago, IL",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    ]
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

  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-6 md:px-12">
        <div ref={titleRef} className="reveal from-bottom mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gray-900"></div>
        </div>
        
        <div className="space-y-12">
          {featuredProjects.map((project, index) => {
            const projectIndex = projectsData.findIndex(p => p === project);
            return (
              <ProjectCard 
                key={projectIndex}
                image={project.image}
                title={project.title}
                description={project.description}
                year={project.year}
                location={project.location}
                index={projectIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

