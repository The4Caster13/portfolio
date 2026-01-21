import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
// snowboard assets
import initial from "../Assets/Assets/snowboard/initialplans.jpg";
import video from "../Assets/Assets/snowboard/creativetimelapse.mp4";
import prop from "../Assets/Assets/snowboard/ProperDrawing.jpg";
import deed from "../Assets/Assets/snowboard/3d.stl";
// cpt assets
import ai from "../Assets/Assets/cpt/aiart.jpg";
import concept from "../Assets/Assets/cpt/concept.jpg";
import drawing from "../Assets/Assets/cpt/drawing.jpg";
import plan1 from "../Assets/Assets/cpt/floorplan1.jpg";
import plan2 from "../Assets/Assets/cpt/floorplan2.jpg";
import plan3 from "../Assets/Assets/cpt/floorplan3.jpg";
import plan4 from "../Assets/Assets/cpt/floorplan4.jpg";
import line from "../Assets/Assets/cpt/line.jpg";
import sketch from "../Assets/Assets/cpt/sketch.jpg";
import vid from "../Assets/Assets/cpt/timelapsec.mp4";
// road
import original from "../Assets/Assets/road/original.jpg";
import change from "../Assets/Assets/road/changes.jpg";
import vid2 from "../Assets/Assets/road/changes.mp4";
import vid3 from "../Assets/Assets/road/original.mp4";
// sketchup progression
import first from "../Assets/Assets/sketchup/house.stl";
import hero from "../Assets/Assets/sketchup/house.png";

export interface MediaItem {
  url: string;
  type: "image" | "video" | "model";
}
const normalizeImages = (arr: (string | MediaItem)[]): MediaItem[] => {
  return arr.map((item) => {
    if (typeof item === "string") {
      const isVideo = item.toLowerCase().endsWith(".mp4");
      return { url: item, type: isVideo ? "video" : "image" };
    }
    return { url: item.url, type: item.type };
  });
};

export const projectsData: {
  image: string;
  title: string;
  description: string;
  year: string;
  location: string;
  featured: boolean;
  construction?: boolean;
  images: MediaItem[];
  progressionStages: any[];
  details?: string;
}[] = [

  // grade 10 cpt 
  {
    image: drawing,
    title: "Bayside Mansion",
    description:
      "Harmonizing with the surrounding landscape, this retreat employs sustainable materials...",
    year: "2024-2025",
    location: "San Jose, CA",
    featured: true,
    details: "The Bayside Mansion was a project that began in 10th grade during Art Class when we were told to create a meaningful art project. My passion for architecture, as well as my ",
    images: normalizeImages([
      drawing,
      line,
      { url: vid, type: "video" },
      sketch,
      plan1,
      plan2,
      plan3,
      plan4,
      concept,
      ai,
    ]),

    progressionStages: [],
  },

  // road
  {
    image: change,
    title: "Road Reconstruction",
    description:
      "Renovation project that transformed a traditional suburban house into a contemporary living space...",
    year: "2025",
    location: "Toronto, ON",
    featured: true,
    details: "",
    images: normalizeImages([
      { url: change, type: "image" },
      { url: original, type: "image" },
      { url: vid2, type: "video" },
      { url: vid3, type: "video" },
    ]),

    progressionStages: [],
  },
  // sketchup
  {
    image: hero,
    title: "Tiny House",
    description:
      "While drawings and sketches are great for brainstorming and idea generation, ultimately bringing your ideas into 3D helps to visualize the real end-product. My goal was to learn SketchUp and become proficient in using 3D modelling softwares to improve my technical skills and help bring my ideas to life.",
    year: "2025",
    location: "",
    featured: false,
    details: "While drawings and sketches are great for brainstorming and idea generation, ultimately bringing your ideas into 3D helps to visualize the real end-product. My goal was to learn SketchUp and become proficient in using 3D modelling softwares to improve my technical skills and help bring my ideas to life.",
    images: normalizeImages([
      { url: hero, type: "image" },
      { url: first, type: "model" },
    ]),

    progressionStages: [],
  },

 // cas project 
  {
    image: prop,
    title: "Snowboard Launcher",
    description:
      "What began as a simple desire to practice snowboard tricks at home evolved into a full architectural exploration...",
    year: "2024",
    location: "North York, ON",
    featured: true,

    images: [
      { url: prop, type: "image" },
      { url: initial, type: "image" },
      { url: deed, type: "model" },
      { url: video, type: "video" },
    ],

    progressionStages: [],
  },

  //tbd (prolly rayon)
  {
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop",
    title: "Coastal Modern",
    description:
      "Beachfront property with floor-to-ceiling glass walls and seamless indoor-outdoor living...",
    year: "2022",
    location: "Miami Beach, FL",
    featured: false,
    construction: true,

    images: normalizeImages([
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1770&auto=format&fit=crop",
    ]),

    progressionStages: [],
  },

  //tbd (maybe do Japan fusion idea)
  {
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1770&auto=format&fit=crop",
    title: "Pancake Model",
    description:
      "Mathematically modelling the perfect pancake through experimentation and integration.",
    year: "2025",
    location: "North York, ON",
    featured: false,
    construction: false,

    images: normalizeImages([
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1770&auto=format&fit=crop",
    ]),

    progressionStages: [],
  },
];

const Projects = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  const featured = projectsData.filter((p) => p.featured);

  return (
  <section id="projects" className="relative py-24 md:py-32 overflow-hidden">

    {/* background pattern */}
    <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="rings" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
            <circle cx="120" cy="120" r="40" fill="none" stroke="#1b1b1b" strokeWidth="0.5" />
            <circle cx="120" cy="120" r="80" fill="none" stroke="#1b1b1b" strokeWidth="0.5" />
            <circle cx="120" cy="120" r="120" fill="none" stroke="#1b1b1b" strokeWidth="0.5" />
          </pattern>

          <pattern id="waves" x="0" y="0" width="260" height="120" patternUnits="userSpaceOnUse">
            <path d="M0 60 Q60 0 130 60 T260 60" fill="none" stroke="#1b1b1b" strokeWidth="0.6" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#rings)" />
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
    </div>

    {/* leaf decorations */}
    <div className="absolute top-14 left-10 opacity-10">
      <svg width="65" height="65" viewBox="0 0 60 60" fill="none">
        <path d="M30 5C35 15 45 25 30 55C15 25 25 15 30 5Z" fill="#1b1b1b" />
        <path d="M30 5V55" stroke="#1b1b1b" strokeWidth="1.5" />
      </svg>
    </div>

    <div className="absolute bottom-20 right-10 opacity-10 rotate-45">
      <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
        <path d="M30 5C35 15 45 25 30 55C15 25 25 15 30 5Z" fill="#1b1b1b" />
      </svg>
    </div>

    {/* content */}
    <div className="container px-6 md:px-12">
      <div ref={titleRef} className="reveal from-bottom mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-gray-900"></div>
      </div>

      <div className="space-y-12">
        {featured.map((project) => {
          const index = projectsData.findIndex((p) => p === project);
          return (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              year={project.year}
              location={project.location}
              index={index}
            />
          );
        })}
      </div>
    </div>
    
  </section>
  );
};

export default Projects;
