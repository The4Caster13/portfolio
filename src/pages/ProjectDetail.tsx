import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/components/Projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedZoom, setSelectedZoom] = useState<number | null>(null);
  
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

  const handlePointClick = (pointId: number) => {
    console.log('Point clicked:', pointId);
    setSelectedZoom(selectedZoom === pointId ? null : pointId);
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
              
              {/* Interactive points */}
              {interactivePoints.map((point) => (
                <button
                  key={point.id}
                  onClick={() => handlePointClick(point.id)}
                  className={`absolute w-8 h-8 rounded-full border-3 border-white shadow-xl transition-all duration-300 hover:scale-125 z-20 ${
                    selectedZoom === point.id 
                      ? 'bg-forest-green scale-125' 
                      : 'bg-sage hover:bg-forest-green'
                  }`}
                  style={{ 
                    left: `${point.x}%`, 
                    top: `${point.y}%`, 
                    transform: 'translate(-50%, -50%)' 
                  }}
                >
                  {/* Magnifying glass icon */}
                  <svg 
                    className="w-4 h-4 text-white mx-auto" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  
                  {/* Tooltip */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-charcoal text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-30 pointer-events-none">
                    {point.label}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-charcoal rotate-45"></div>
                  </div>
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
          
          {/* Project details moved below the image */}
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
