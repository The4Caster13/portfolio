import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/components/Projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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
            {photo.location} • {photo.year}
          </p>
        </div>

        {/* Hero Image Carousel Section */}
        <div className="relative w-full h-[80vh]">
          <Carousel className="w-full h-full">
            <CarouselContent className="h-[80vh]">
              {photo.images.map((image, index) => (
                <CarouselItem key={index} className="relative h-full">
                  <img
                    src={image}
                    alt={`${photo.title} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay text on first image only */}
                  {index === 0 && (
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {photo.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                        {photo.description.split('.')[0]}.
                      </p>
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Content Section */}
        <div className="container px-6 md:px-12 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Project Details</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {photo.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">YEAR</h3>
                <p className="text-lg">{photo.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">LOCATION</h3>
                <p className="text-lg">{photo.location}</p>
              </div>
            </div>

            <button
              onClick={() => navigate('/recent-work')}
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              ← Back to Gallery
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PhotoDetail;
