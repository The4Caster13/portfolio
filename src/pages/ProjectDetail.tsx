
import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ZoomIn } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/components/Projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  
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
  
  // Handle mouse move for zoom effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };
  
  return (
    <>
      <Navbar />
      <div className="container px-6 md:px-12 py-24">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center mb-8 text-sm font-medium hover:text-gray-600 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to projects
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project image with zoom functionality */}
          <div 
            ref={imageRef}
            className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            
            {/* Zoom indicator */}
            <div className={`absolute top-4 right-4 bg-white/80 p-2 rounded-full transition-opacity ${isZooming ? 'opacity-100' : 'opacity-0'}`}>
              <ZoomIn size={20} className="text-gray-800" />
            </div>
            
            {/* Zoomed view */}
            {isZooming && (
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  backgroundSize: '200%',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            )}
          </div>
          
          {/* Project details */}
          <div>
            <div className="border-b border-gray-300 pb-2 mb-6">
              <span className="text-sm text-gray-500">{project.year} | {project.location}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
            <p className="text-gray-600 text-lg mb-8">{project.description}</p>
            
            {/* Additional project details - this would be expanded with real data */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Project Details</h3>
                <p className="text-gray-600">This {project.title.toLowerCase()} project showcases our commitment to blending form and function. The design emphasizes natural light, sustainable materials, and harmonious integration with the surrounding environment.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900">Client</h4>
                  <p className="text-gray-600">Private</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Size</h4>
                  <p className="text-gray-600">3,200 sq ft</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Duration</h4>
                  <p className="text-gray-600">18 months</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Services</h4>
                  <p className="text-gray-600">Architecture, Interior Design</p>
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
