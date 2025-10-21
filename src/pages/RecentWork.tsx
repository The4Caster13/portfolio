import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/components/Projects";

const RecentWork = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Recent Work - Matthew Chen";
  }, []);

  // Create a masonry-style grid layout
  const masonryItems = [
    { ...projectsData[0], gridClass: "md:col-span-1 md:row-span-1" },
    { ...projectsData[1], gridClass: "md:col-span-1 md:row-span-2" },
    { ...projectsData[2], gridClass: "md:col-span-1 md:row-span-1" },
    { ...projectsData[0], gridClass: "md:col-span-1 md:row-span-2" },
    { ...projectsData[1], gridClass: "md:col-span-1 md:row-span-1" },
    { ...projectsData[2], gridClass: "md:col-span-1 md:row-span-2" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container px-6 md:px-12">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">RECENT WORK</h1>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px]">
            {masonryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/photo/${index}`)}
                className={`group relative overflow-hidden rounded-2xl ${item.gridClass} cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.location} • {item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RecentWork;
