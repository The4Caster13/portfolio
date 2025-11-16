
import React, { useEffect, useRef } from 'react';
//snowboard assets
import initial from "../Assets/Assets/snowboard/initialplans.jpg";
import video from "../Assets/Assets/snowboard/creativetimelapse.mp4";
//cpt
import ai from "../Assets/Assets/cpt/aiart.jpg";
import concept from "../Assets/Assets/cpt/concept.jpg";
import drawing from "../Assets/Assets/cpt/drawing.jpg";
import plan1 from "../Assets/Assets/cpt/floorplan1.jpg";
import plan2 from "../Assets/Assets/cpt/floorplan2.jpg";
import plan3 from "../Assets/Assets/cpt/floorplan3.jpg";
import plan4 from "../Assets/Assets/cpt/floorplan4.jpg";
import line from "../Assets/Assets/cpt/line.jpg";
import sketch from "../Assets/Assets/cpt/sketch.jpg";

import ProjectCard from './ProjectCard';
  //individual projects still have weeks before they are ready and im gonna overhaul this part
export const projectsData = [
  //snowboard cas project
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
    ],
    progressionStages: [
      {
        stage: "Sketch",
        title: "Initial Concept",
        description: "Hand-drawn sketches exploring form and spatial relationships",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
        icon: "✏️",
        details: {
          process: "The design journey begins with freehand sketches that capture the initial vision and spatial concepts.",
          tools: ["Pencil and paper", "Concept sketching", "Site analysis"],
          timeline: "Week 1-2",
          deliverables: ["Concept sketches", "Site analysis diagrams"]
        }
      },
      {
        stage: "CAD",
        title: "Technical Drawing",
        description: "Precise computer-aided design with measurements and specifications",
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=400&auto=format&fit=crop",
        icon: "📐",
        details: {
          process: "Converting conceptual sketches into precise technical drawings using CAD software.",
          tools: ["AutoCAD", "Revit", "Building codes compliance"],
          timeline: "Week 3-8",
          deliverables: ["Floor plans", "Elevations", "Sections"]
        }
      },
      {
        stage: "Render",
        title: "3D Visualization",
        description: "Photorealistic rendering showing materials and lighting",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=400&auto=format&fit=crop",
        icon: "🎨",
        details: {
          process: "Creating photorealistic 3D visualizations that help clients understand the final design.",
          tools: ["3ds Max", "V-Ray", "Lumion"],
          timeline: "Week 9-12",
          deliverables: ["3D renderings", "Material boards", "Lighting studies"]
        }
      },
      {
        stage: "Real Photo",
        title: "Built Reality",
        description: "The final constructed project in its environment",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
        icon: "📸",
        details: {
          process: "The completed project photographed in its natural setting, showcasing how the design vision became reality.",
          tools: ["Professional photography", "Drone photography", "Site documentation"],
          timeline: "Post-construction",
          deliverables: ["Professional photos", "Project documentation", "Case study"]
        }
      }
    ]
  },
  // grade 10 cpt
  {
    image: drawing,
    title: "Bayside Mansion",
    description: "Harmonizing with the surrounding landscape, this retreat employs sustainable materials and passive design strategies.",
    year: "2024-2025",
    location: "San Jose, CA",
    featured: true,
    images: [
    ai, concept, drawing, plan1, plan2, plan3, plan4, line, sketch 
    ],
    progressionStages: [
      {
        stage: "Sketch",
        title: "Site Analysis",
        description: "Understanding the lakeside context and natural features",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
        icon: "✏️",
        details: {
          process: "Comprehensive site analysis focusing on topography, views, and environmental conditions.",
          tools: ["Site surveys", "Environmental studies", "Landscape analysis"],
          timeline: "Week 1-3",
          deliverables: ["Site diagrams", "Context sketches", "Environmental impact study"]
        }
      },
      {
        stage: "CAD",
        title: "Sustainable Design",
        description: "Technical planning for passive systems and sustainable features",
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=400&auto=format&fit=crop",
        icon: "📐",
        details: {
          process: "Detailed technical design incorporating passive solar strategies and sustainable systems.",
          tools: ["BIM software", "Energy modeling", "Structural analysis"],
          timeline: "Week 4-10",
          deliverables: ["Construction documents", "Energy models", "Material specifications"]
        }
      },
      {
        stage: "Render",
        title: "Natural Integration",
        description: "Visualizing harmony between architecture and landscape",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=400&auto=format&fit=crop",
        icon: "🎨",
        details: {
          process: "Creating visualizations that showcase the building's relationship with its natural surroundings.",
          tools: ["Landscape rendering", "Seasonal studies", "Material visualization"],
          timeline: "Week 11-14",
          deliverables: ["Exterior renderings", "Landscape integration studies", "Material samples"]
        }
      },
      {
        stage: "Real Photo",
        title: "Completed Retreat",
        description: "The harmonious integration of architecture and nature",
        image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3",
        icon: "📸",
        details: {
          process: "Final documentation showcasing the retreat's seamless integration with the lakeside environment.",
          tools: ["Architectural photography", "Seasonal documentation", "Aerial views"],
          timeline: "Post-completion",
          deliverables: ["Photography portfolio", "Project publication", "Case study"]
        }
      }
    ]
  },
  //3 different road reconstructions
  {
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Road Reconstruction",
    description: "Renovation project that transformed a traditional suburban house into a contemporary living space with open floor plans.",
    year: "2025",
    location: "Toronto, ON",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1480074554294-5c5bb7b0e9fb?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1480074554297-5c5bb7b0e9fc?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1480074554298-5c5bb7b0e9fd?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
        progressionStages: [
      {
        stage: "Sketch",
        title: "Renovation Planning",
        description: "Assessing existing structure and planning transformation",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
        icon: "✏️",
        details: {
          process: "Detailed assessment of the existing home's structure and opportunities for modernization.",
          tools: ["Existing condition surveys", "Structural analysis", "Space planning"],
          timeline: "Week 1-2",
          deliverables: ["Condition assessment", "Renovation concepts", "Before sketches"]
        }
      },
      {
        stage: "CAD",
        title: "Technical Renovation",
        description: "Detailed plans for structural changes and new systems",
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=400&auto=format&fit=crop",
        icon: "📐",
        details: {
          process: "Creating comprehensive renovation plans including structural modifications and system upgrades.",
          tools: ["Renovation drawings", "Structural engineering", "MEP coordination"],
          timeline: "Week 3-7",
          deliverables: ["Demolition plans", "New construction drawings", "Permit documents"]
        }
      },
      {
        stage: "Render",
        title: "Modern Vision",
        description: "Visualizing the contemporary transformation",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=400&auto=format&fit=crop",
        icon: "🎨",
        details: {
          process: "Creating before-and-after visualizations to illustrate the dramatic transformation.",
          tools: ["Interior visualization", "Material selection", "Lighting design"],
          timeline: "Week 8-10",
          deliverables: ["Interior renderings", "Material palettes", "Comparison views"]
        }
      },
      {
        stage: "Real Photo",
        title: "Transformed Home",
        description: "The completed contemporary renovation",
        image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3",
        icon: "📸",
        details: {
          process: "Documenting the successful transformation from traditional to contemporary living.",
          tools: ["Before-after photography", "Interior documentation", "Detail shots"],
          timeline: "Post-renovation",
          deliverables: ["Transformation portfolio", "Interior photos", "Project story"]
        }
      }
    ]
  },
  //placeholder
  {
    image: "",
    title: "Modern Estate",
    description: "Expansive estate featuring contemporary architecture with panoramic views and luxury amenities.",
    year: "2023",
    location: "Beverly Hills, CA",
    featured: false,
    construction: true, 
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
        progressionStages: [
      {
        stage: "Sketch",
        title: "Estate Vision",
        description: "Conceptualizing luxury living and site integration",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
        icon: "✏️",
        details: {
          process: "Initial vision for a luxury estate that maximizes views and creates distinct living zones.",
          tools: ["Master planning", "Site analysis", "Program development"],
          timeline: "Week 1-3",
          deliverables: ["Site master plan", "Concept sketches", "Spatial studies"]
        }
      },
      {
        stage: "CAD",
        title: "Detailed Planning",
        description: "Complex technical coordination for luxury systems",
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=400&auto=format&fit=crop",
        icon: "📐",
        details: {
          process: "Comprehensive technical design integrating luxury amenities and advanced building systems.",
          tools: ["BIM coordination", "Structural engineering", "MEP systems"],
          timeline: "Week 4-12",
          deliverables: ["Construction documents", "System coordination", "Specifications"]
        }
      },
      {
        stage: "Render",
        title: "Luxury Visualization",
        description: "Photorealistic renderings of premium spaces",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=400&auto=format&fit=crop",
        icon: "🎨",
        details: {
          process: "High-end visualizations showcasing luxury finishes, lighting, and spatial quality.",
          tools: ["Premium rendering", "Material visualization", "Lighting studies"],
          timeline: "Week 13-16",
          deliverables: ["Luxury renderings", "Material samples", "Virtual tours"]
        }
      },
      {
        stage: "Real Photo",
        title: "Completed Estate",
        description: "The realized vision of luxury living",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
        icon: "📸",
        details: {
          process: "Professional documentation of the completed luxury estate and its premium features.",
          tools: ["Luxury photography", "Aerial documentation", "Twilight shoots"],
          timeline: "Post-completion",
          deliverables: ["Professional portfolio", "Marketing materials", "Publication shots"]
        }
      }
    ]
  },
  //placeholder
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Coastal Modern",
    description: "Beachfront property with floor-to-ceiling glass walls and seamless indoor-outdoor living spaces.",
    year: "2022",
    location: "Miami Beach, FL",
    featured: false,
    construction: true, 
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
    progressionStages: [
      {
        stage: "Sketch",
        title: "Coastal Concept",
        description: "Designing for ocean views and coastal conditions",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
        icon: "✏️",
        details: {
          process: "Conceptual design focused on maximizing ocean views while addressing coastal climate challenges.",
          tools: ["Coastal site analysis", "Wind studies", "View analysis"],
          timeline: "Week 1-2",
          deliverables: ["Coastal sketches", "View diagrams", "Climate analysis"]
        }
      },
      {
        stage: "CAD",
        title: "Hurricane Engineering",
        description: "Technical design for coastal resilience",
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=400&auto=format&fit=crop",
        icon: "📐",
        details: {
          process: "Engineering design incorporating hurricane-rated systems and coastal building codes.",
          tools: ["Structural engineering", "Hurricane-rated systems", "Coastal codes"],
          timeline: "Week 3-9",
          deliverables: ["Structural plans", "Impact-resistant details", "Permit documents"]
        }
      },
      {
        stage: "Render",
        title: "Coastal Living",
        description: "Visualizing indoor-outdoor coastal lifestyle",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=400&auto=format&fit=crop",
        icon: "🎨",
        details: {
          process: "Creating renderings that capture the seamless connection between interior spaces and ocean.",
          tools: ["Ocean visualization", "Natural lighting", "Material rendering"],
          timeline: "Week 10-13",
          deliverables: ["Coastal renderings", "Ocean view studies", "Material boards"]
        }
      },
      {
        stage: "Real Photo",
        title: "Beachfront Reality",
        description: "The completed coastal modern home",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
        icon: "📸",
        details: {
          process: "Photography showcasing the home's integration with its beachfront setting.",
          tools: ["Coastal photography", "Golden hour shoots", "Aerial beach views"],
          timeline: "Post-completion",
          deliverables: ["Beachfront photos", "Lifestyle imagery", "Marketing portfolio"]
        }
      }
    ]
  },
  //placeholder
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Industrial Loft",
    description: "Converted warehouse space combining exposed structural elements with refined modern finishes.",
    year: "2021",
    location: "Chicago, IL",
    featured: false,
    construction: true, 
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    ], 
    progressionStages: [
      {
        stage: "Sketch",
        title: "Adaptive Reuse",
        description: "Planning conversion from warehouse to residential",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
        icon: "✏️",
        details: {
          process: "Assessing the industrial building's character and planning for residential conversion.",
          tools: ["Historic documentation", "Existing conditions", "Spatial planning"],
          timeline: "Week 1-2",
          deliverables: ["Conversion concepts", "Historic preservation plan", "Layout studies"]
        }
      },
      {
        stage: "CAD",
        title: "Industrial Retrofit",
        description: "Technical design for building systems and code compliance",
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=400&auto=format&fit=crop",
        icon: "📐",
        details: {
          process: "Detailed planning for new building systems while preserving industrial character.",
          tools: ["Adaptive reuse codes", "MEP design", "Structural reinforcement"],
          timeline: "Week 3-8",
          deliverables: ["Retrofit drawings", "System plans", "Code compliance documents"]
        }
      },
      {
        stage: "Render",
        title: "Industrial Modern",
        description: "Visualizing the blend of old and new",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=400&auto=format&fit=crop",
        icon: "🎨",
        details: {
          process: "Creating visualizations that showcase the contrast between industrial and modern elements.",
          tools: ["Industrial visualization", "Material contrast studies", "Lighting design"],
          timeline: "Week 9-11",
          deliverables: ["Loft renderings", "Material selections", "Character studies"]
        }
      },
      {
        stage: "Real Photo",
        title: "Converted Loft",
        description: "The transformed industrial space",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
        icon: "📸",
        details: {
          process: "Documentation highlighting the successful blend of industrial heritage and modern living.",
          tools: ["Industrial photography", "Detail documentation", "Before-after shots"],
          timeline: "Post-conversion",
          deliverables: ["Conversion portfolio", "Heritage documentation", "Design story"]
        }
      }
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

