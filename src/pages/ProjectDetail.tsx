import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/components/Projects';
import plans from "../Assets/Assets/snowboard/initialplans.jpg";
import snow from "../Assets/Assets/snowboard/snow.jpg";
import Construction from "./construction";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // CAROUSEL LOGIC START
  // 1. State to track the currently displayed image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // CAROUSEL LOGIC END

  // zoom + dragging state
  const [selectedZoom, setSelectedZoom] = useState<number | null>(null);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  // get project
  const projectIndex = Number(id);
  const project = projectsData[projectIndex];

  // redirect home if project doesn't exist
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
    // CAROUSEL LOGIC START
    // Reset index whenever the component loads or the project changes
    setCurrentImageIndex(0);
    // CAROUSEL LOGIC END
  }, [project, navigate]);

  if (!project) return null;

  // redirects to construction
  if (project.construction) {
    return <Construction project={project} />;
  }
  
  // CAROUSEL LOGIC START
  // 2. Determine the images array, using project.image as a fallback for the first slide
  const images = project.images && project.images.length > 0
    ? project.images
    : [project.image]; 
  
  // 3. Carousel Navigation Handlers
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  // Get the current image URL for display
  const currentImageUrl = images[currentImageIndex];
  // CAROUSEL LOGIC END

  // interactive points on the image (drag + zoom) 
  const [interactivePoints, setInteractivePoints] = useState([
    { id: 1, x: 25, y: 30, label: "Exterior Detail", description: "Modern facade with sustainable materials" },
    { id: 2, x: 65, y: 45, label: "Window Design", description: "Energy-efficient glazing system" },
    { id: 3, x: 45, y: 70, label: "Landscaping", description: "Native plant integration" }
  ]);

  const progressionStages = project.progressionStages || [];

  // clicking on a magnifying point
  const handlePointClick = (pointId: number) => {
    if (isDragging === pointId) return; 
    setSelectedZoom(selectedZoom === pointId ? null : pointId);
  };

  // dragging logic
  const handleMouseDown = (e: React.MouseEvent, pointId: number) => {
    e.preventDefault();
    setIsDragging(pointId);

    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;

    const point = interactivePoints.find(p => p.id === pointId);
    if (!point) return;

    const pointX = (point.x / 100) * rect.width + rect.left;
    const pointY = (point.y / 100) * rect.height + rect.top;

    setDragOffset({
      x: e.clientX - pointX,
      y: e.clientY - pointY
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging === null) return;

    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;

    const newX = ((e.clientX - dragOffset.x - rect.left) / rect.width) * 100;
    const newY = ((e.clientY - dragOffset.y - rect.top) / rect.height) * 100;

    const constrainedX = Math.max(5, Math.min(95, newX));
    const constrainedY = Math.max(5, Math.min(95, newY));

    setInteractivePoints(prev =>
      prev.map(point =>
        point.id === isDragging
          ? { ...point, x: constrainedX, y: constrainedY }
          : point
      )
    );
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    if (isDragging !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  // selecting a design progression stage
  const handleStageClick = (stageIndex: number) => {
    setSelectedStage(selectedStage === stageIndex ? null : stageIndex);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">

        {/* background */}
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

        {/* leaf pattern (copy and paste to other react components if i want to use later) */}
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

        {/* vines bottom-right */}
        <div className="absolute bottom-0 right-0 opacity-15">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <path d="M150 300L150 200L100 150L50 100" stroke="#2E7D32" strokeWidth="3"/>
            <path d="M150 200L200 150L250 100" stroke="#2E7D32" strokeWidth="3"/>
            <path d="M100 150L80 120L60 90" stroke="#A8C3A0" strokeWidth="2"/>
            <path d="M200 150L220 120L240 90" stroke="#A8C3A0" strokeWidth="2"/>
          </svg>
        </div>

        <div className="container px-6 md:px-12 py-24 relative z-10">
          {/* back button */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center mb-8 text-sm font-medium text-charcoal hover:text-forest-green transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to projects
          </button>

          {/* interactive points code, lowk need to make it so they have different definitions based on where i place them */}
          <div className="mb-12">
            <div 
              ref={imageRef}
              // CAROUSEL LOGIC: Add 'group' class to enable hover effects on navigation buttons
              className="relative w-full overflow-hidden bg-off-white shadow-2xl rounded-lg border border-sage/20 group" 
            >
              {/* CAROUSEL LOGIC: Update image src to use the currentImageUrl */}
              <img 
                src={currentImageUrl} 
                alt={`${project.title} image ${currentImageIndex + 1}`}
                className="w-full object-contain"
                style={{ pointerEvents: 'none' }}
              />
              
              {/* CAROUSEL LOGIC START: Navigation Arrows (show only if multiple images exist) */}
              {images.length > 1 && (
                <>
                  {/* Previous Button */}
                  <button
                    onClick={goToPrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/70 text-gray-800 shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 duration-300 z-30"
                    aria-label="Previous image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/70 text-gray-800 shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 duration-300 z-30"
                    aria-label="Next image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </>
              )}
              {/* CAROUSEL LOGIC END: Navigation Arrows */}


              {interactivePoints.map((point) => (
                <div
                  key={point.id}
                  className={`absolute transition-all duration-300 z-20 ${
                    isDragging === point.id ? 'cursor-grabbing' : 'cursor-grab'
                  }`}
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseDown={(e) => handleMouseDown(e, point.id)}
                  onClick={() => handlePointClick(point.id)}
                >
                  {selectedZoom === point.id ? (
                    /* react magnifying code (lowk this has to change cause it barely works rn) */
                    <div className="relative w-32 h-32">
                      <div
                        className="absolute inset-0 rounded-full overflow-hidden border-4 border-forest-green shadow-2xl"
                        style={{
                          // CAROUSEL LOGIC: Use currentImageUrl for the magnifier background
                          background: `url(${currentImageUrl})`,
                          backgroundSize: '300%',
                          backgroundPosition: `${point.x}% ${point.y}%`,
                          backgroundRepeat: 'no-repeat'
                        }}
                      />
                      <div className="absolute inset-0 rounded-full border-4 border-forest-green bg-transparent"></div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-forest-green rounded-full shadow-lg"></div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-white/50 backdrop-blur-sm rounded-full border-2 border-white/80 shadow-lg hover:bg-white/70 hover:scale-110 transition-all duration-300">
                      <div className="w-full h-full rounded-full bg-forest-green/30 hover:bg-forest-green/40 transition-all duration-300"></div>
                    </div>
                  )}

                  {selectedZoom !== point.id && isDragging !== point.id && (
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-charcoal text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-30 pointer-events-none">
                      {point.label}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-charcoal rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}

              {/* CAROUSEL LOGIC START: Dot Indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'w-6 bg-forest-green shadow-md' 
                          : 'w-2 bg-white/70 hover:bg-white'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
              {/* CAROUSEL LOGIC END: Dot Indicators */}
              
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/10 via-transparent to-sky-blue/10 pointer-events-none"></div>
            </div>

            {/* zoom popup text */}
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

          {/* change ts its acc so bad, its the same for all the projects its acc horrible */}
          <div className="mb-12">
            <div className="bg-off-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-sage/20">
              <h3 className="text-2xl font-bold mb-6 text-forest-green">Design Progression</h3>
              <p className="text-charcoal/70 mb-8">Follow the evolution of this project from initial concept to built reality</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {progressionStages.map((stage, index) => (
                  <div key={stage.stage} className="relative">
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

          {/* project details text */}
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