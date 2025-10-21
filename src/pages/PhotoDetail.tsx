import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/components/Projects";

const PhotoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const photoIndex = parseInt(id || "0");
  const photo = projectsData[photoIndex % projectsData.length];

  useEffect(() => {
    document.title = `${photo.title} - Matthew Chen`;
  }, [photo.title]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header with date */}
        <div className="container px-6 md:px-12 pt-32 pb-8">
          <p className="text-sm text-muted-foreground">
            {photo.year} • {photo.location}
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-full h-[80vh] overflow-hidden">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <p className="text-sm md:text-base font-light tracking-widest mb-4 opacity-90">
              {photo.description.split('.')[0]}
            </p>
            <h1 className="text-4xl md:text-6xl font-display tracking-wider uppercase">
              {photo.title}
            </h1>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 pointer-events-none" />
        </div>

        {/* Content Section */}
        <div className="container px-6 md:px-12 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {photo.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">Year</h3>
                <p className="text-muted-foreground">{photo.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">Location</h3>
                <p className="text-muted-foreground">{photo.location}</p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => navigate('/recent-work')}
                className="text-sm font-medium hover:text-muted-foreground transition-colors"
              >
                ← Back to Recent Work
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PhotoDetail;
