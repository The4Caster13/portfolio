
import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Urban Residence",
      year: "2023",
      location: "New York, NY",
      description: "A modern minimalist residence designed to maximize natural light while maintaining privacy in an urban setting.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Lakeside Retreat", 
      year: "2022",
      location: "Lake Tahoe, CA",
      description: "Harmonizing with the surrounding landscape, this retreat employs sustainable materials and passive design strategies.",
      image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="h-full p-12">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-display text-gray-900 mb-4">
          Featured Projects
        </h1>
        <div className="w-16 h-px bg-gray-900"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[calc(100%-120px)]">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            
            {/* Project Image */}
            <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Info */}
            <div className="space-y-2">
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wide">
                {project.year} • {project.location}
              </div>
              <h3 className="text-xl font-semibold font-display text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ProjectsPage;
