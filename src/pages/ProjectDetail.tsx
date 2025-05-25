import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/components/Projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedZoom, setSelectedZoom] = useState<number | null>(null);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  
  // Find the project based on the id
  const projectIndex = Number(id);
  const project = projectsData[projectIndex];
  
  // Redirect to home if project doesn't exist
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);
  
  if (!project) return null;

  // Interactive points for different areas of the image
  const interactivePoints = [
    { id: 1, x: 25, y: 30, label: "Exterior Detail", description: "Modern facade with sustainable materials" },
    { id: 2, x: 65, y: 45, label: "Window Design", description: "Energy-efficient glazing system" },
    { id: 3, x: 45, y: 70, label: "Landscaping", description: "Native plant integration" },
  ];

  // Progression stages data
  const progressionStages = [
    {
      stage: "Sketch",
      title: "Initial Concept",
      description: "Hand-drawn sketches exploring form and spatial relationships",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
      icon: "✏️",
      details: {
        process: "The design journey begins with freehand sketches that capture the initial vision and spatial concepts. These early drawings explore the relationship between form, function, and site context.",
        tools: ["Pencil and paper", "Concept sketching", "Site analysis", "Program development"],
        timeline: "Week 1-2",
        deliverables: ["Concept sketches", "Site analysis diagrams", "Spatial relationship studies", "Initial design intent"]
      }
    },
    {
      stage: "CAD",
      title: "Technical Drawing",
      description: "Precise computer-aided design with measurements and specifications",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=400&auto=format&fit=crop",
      icon: "📐",
      details: {
        process: "Converting conceptual sketches into precise technical drawings using CAD software. This phase focuses on accurate dimensions, structural elements, and building systems integration.",
        tools: ["AutoCAD", "Revit", "Technical drawing standards", "Building codes compliance"],
        timeline: "Week 3-8",
        deliverables: ["Floor plans", "Elevations", "Sections", "Construction details", "Technical specifications"]
      }
    },
    {
      stage: "Render",
      title: "3D Visualization",
      description: "Photorealistic rendering showing materials and lighting",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=400&auto=format&fit=crop",
      icon: "🎨",
      details: {
        process: "Creating photorealistic 3D visualizations that help clients understand the final design. This phase includes material selection, lighting studies, and atmospheric rendering.",
        tools: ["3ds Max", "V-Ray", "Lumion", "Material libraries", "Lighting simulation"],
        timeline: "Week 9-12",
        deliverables: ["3D renderings", "Material boards", "Lighting studies", "Virtual walkthroughs", "Design presentations"]
      }
    },
    {
      stage: "Real Photo",
      title: "Built Reality",
      description: "The final constructed project in its environment",
      image: project.image,
      icon: "📸",
      details: {
        process: "The culmination of the design process - the actual constructed building. This phase involves construction administration, quality control, and final documentation of the completed project.",
        tools: ["Construction management", "Quality control", "Site supervision", "Professional photography"],
        timeline: "Month 4-18",
        deliverables: ["Completed building", "As-built drawings", "Project photography", "Performance evaluation", "Client handover"]
      }
    }
  ];

  const handlePointClick = (pointId: number) => {
    console.log('Point clicked:', pointId);
    setSelectedZoom(selectedZoom === pointId ? null : pointId);
  };

  const handleStageClick = (stageIndex: number) => {
    console.log('Stage clicked:', stageIndex);
    setSelectedStage(selectedStage === stageIndex ? null : stageIndex);
  };
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        {/* Background texture overlays */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tree-rings" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="20" fill="none" stroke="#2E7D32" strokeWidth="1"/>
                <circle cx="100" cy="100" r="40" fill="none" stroke="#2E7D32" strokeWidth="1"/>
                <circle cx="100" cy="100" r="60" fill="none" stroke="#2E7D32" strokeWidth="1"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#2E7D32" strokeWidth="1"/>
              </pattern>
              <pattern id="vines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#A8C3A0" strokeWidth="2"/>
                <path d="M50,0 Q75,25 100,0" fill="none" stroke="#A8C3A0" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tree-rings)"/>
            <rect width="100%" height="100%" fill="url(#vines)"/>
          </svg>
        </div>

        {/* Leaf motifs */}
        <div className="absolute top-10 left-10 opacity-20">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5C35 15 45 25 30 55C15 25 25 15 30 5Z" fill="#2E7D32"/>
            <path d="M30 5L30 55" stroke="#A8C3A0" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute top-32 right-20 opacity-20 transform rotate-45">
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
            <path d="M30 5C35 15 45 25 30 55C15 25 25 15 30 5Z" fill="#7EC8E3"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20 transform -rotate-12">
          <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
            <path d="M30 5C35 15 45 25 30 55C15 25 25 15 30 5Z" fill="#E27D60"/>
          </svg>
        </div>

        {/* Branching patterns */}
        <div className="absolute bottom-0 right-0 opacity-15">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <path d="M150 300L150 200L100 150L50 100" stroke="#2E7D32" strokeWidth="3"/>
            <path d="M150 200L200 150L250 100" stroke="#2E7D32" strokeWidth="3"/>
            <path d="M100 150L80 120L60 90" stroke="#A8C3A0" strokeWidth="2"/>
            <path d="M200 150L220 120L240 90" stroke="#A8C3A0" strokeWidth="2"/>
          </svg>
        </div>

        <div className="container px-6 md:px-12 py-24 relative z-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center mb-8 text-sm font-medium text-charcoal hover:text-forest-green transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to projects
          </button>
          
          {/* Large project image with interactive points */}
          <div className="mb-12">
            <div className="relative aspect-[21/9] overflow-hidden bg-off-white shadow-2xl rounded-lg border border-sage/20">
              <img 
                src={project.image} 
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  selectedZoom ? 'scale-150' : 'scale-100'
                }`}
                style={{
                  transformOrigin: selectedZoom 
                    ? `${interactivePoints.find(p => p.id === selectedZoom)?.x}% ${interactivePoints.find(p => p.id === selectedZoom)?.y}%`
                    : 'center'
                }}
              />
              
              {/* Interactive points - now translucent with expanding magnifying glass */}
              {interactivePoints.map((point) => (
                <button
                  key={point.id}
                  onClick={() => handlePointClick(point.id)}
                  className="absolute transition-all duration-300 hover:scale-110 z-20"
                  style={{ 
                    left: `${point.x}%`, 
                    top: `${point.y}%`, 
                    transform: 'translate(-50%, -50%)' 
                  }}
                >
                  {/* Translucent point that expands into magnifying glass */}
                  <div className={`relative transition-all duration-500 ease-in-out ${
                    selectedZoom === point.id 
                      ? 'w-24 h-24' 
                      : 'w-4 h-4'
                  }`}>
                    {selectedZoom === point.id ? (
                      /* Expanded magnifying glass circle */
                      <div className="w-full h-full bg-white/90 rounded-full border-3 border-forest-green shadow-xl flex items-center justify-center animate-scale-in">
                        <svg 
                          className="w-8 h-8 text-forest-green" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.35-4.35"></path>
                        </svg>
                      </div>
                    ) : (
                      /* Translucent point */
                      <div className="w-full h-full bg-white/40 backdrop-blur-sm rounded-full border-2 border-white/60 shadow-lg hover:bg-white/60 transition-all duration-300">
                        <div className="w-full h-full rounded-full bg-forest-green/20 hover:bg-forest-green/30 transition-all duration-300"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Tooltip - only show when not expanded */}
                  {selectedZoom !== point.id && (
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-charcoal text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-30 pointer-events-none">
                      {point.label}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-charcoal rotate-45"></div>
                    </div>
                  )}
                </button>
              ))}
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/10 via-transparent to-sky-blue/10 pointer-events-none"></div>
            </div>
            
            {/* Zoom info */}
            {selectedZoom && (
              <div className="mt-6 p-6 bg-off-white/90 backdrop-blur-sm rounded-lg border border-sage/20 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-forest-green text-lg">
                    {interactivePoints.find(p => p.id === selectedZoom)?.label}
                  </h4>
                  <button
                    onClick={() => setSelectedZoom(null)}
                    className="text-terra-cotta hover:text-forest-green transition-colors p-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-charcoal/70">
                  {interactivePoints.find(p => p.id === selectedZoom)?.description}
                </p>
              </div>
            )}
          </div>

          {/* Design Progression Section */}
          <div className="mb-12">
            <div className="bg-off-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-sage/20">
              <h3 className="text-2xl font-bold mb-6 text-forest-green">Design Progression</h3>
              <p className="text-charcoal/70 mb-8">Follow the evolution of this project from initial concept to built reality</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {progressionStages.map((stage, index) => (
                  <div key={stage.stage} className="relative">
                    {/* Connection line */}
                    {index < progressionStages.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-sage z-10">
                        <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-sage rounded-full"></div>
                      </div>
                    )}
                    
                    <button
                      onClick={() => handleStageClick(index)}
                      className={`w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                        selectedStage === index ? 'ring-2 ring-forest-green shadow-xl scale-105' : ''
                      }`}
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={stage.image} 
                          alt={stage.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 w-8 h-8 bg-forest-green/90 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="absolute bottom-3 right-3 text-2xl bg-white/90 rounded-full w-10 h-10 flex items-center justify-center">
                          {stage.icon}
                        </div>
                      </div>
                      <div className="p-4 text-left">
                        <div className="text-xs font-semibold text-forest-green uppercase tracking-wide mb-1">
                          {stage.stage}
                        </div>
                        <h4 className="font-bold text-charcoal mb-2">{stage.title}</h4>
                        <p className="text-charcoal/60 text-sm">{stage.description}</p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              {/* Stage Details */}
              {selectedStage !== null && (
                <div className="mt-8 p-6 bg-white/90 backdrop-blur-sm rounded-lg border border-sage/20 shadow-lg animate-fade-in">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{progressionStages[selectedStage].icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-forest-green">
                          {progressionStages[selectedStage].title}
                        </h4>
                        <div className="text-sm text-charcoal/70 uppercase tracking-wide">
                          {progressionStages[selectedStage].stage} • {progressionStages[selectedStage].details.timeline}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedStage(null)}
                      className="text-terra-cotta hover:text-forest-green transition-colors p-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-charcoal/80 mb-6">{progressionStages[selectedStage].details.process}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-forest-green mb-3">Tools & Methods</h5>
                      <ul className="space-y-2">
                        {progressionStages[selectedStage].details.tools.map((tool, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-charcoal/70">
                            <div className="w-2 h-2 bg-sage rounded-full"></div>
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-forest-green mb-3">Key Deliverables</h5>
                      <ul className="space-y-2">
                        {progressionStages[selectedStage].details.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-charcoal/70">
                            <div className="w-2 h-2 bg-terra-cotta rounded-full"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Project details moved below the progression */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-off-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-sage/20">
              <div className="border-b border-sage pb-2 mb-6">
                <span className="text-sm text-charcoal/70">{project.year} | {project.location}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-forest-green">{project.title}</h1>
              <p className="text-charcoal/80 text-lg mb-8">{project.description}</p>
            </div>
            
            <div className="bg-off-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-sage/20">
              <h3 className="text-xl font-semibold mb-4 text-forest-green">Project Details</h3>
              <p className="text-charcoal/70 mb-6">This {project.title.toLowerCase()} project showcases our commitment to blending form and function. The design emphasizes natural light, sustainable materials, and harmonious integration with the surrounding environment.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-sage/10 p-4 rounded-lg">
                  <h4 className="font-medium text-forest-green">Client</h4>
                  <p className="text-charcoal/70">Private</p>
                </div>
                <div className="bg-sage/10 p-4 rounded-lg">
                  <h4 className="font-medium text-forest-green">Size</h4>
                  <p className="text-charcoal/70">3,200 sq ft</p>
                </div>
                <div className="bg-terra-cotta/10 p-4 rounded-lg">
                  <h4 className="font-medium text-forest-green">Duration</h4>
                  <p className="text-charcoal/70">18 months</p>
                </div>
                <div className="bg-sky-blue/10 p-4 rounded-lg">
                  <h4 className="font-medium text-forest-green">Services</h4>
                  <p className="text-charcoal/70">Architecture, Interior Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
