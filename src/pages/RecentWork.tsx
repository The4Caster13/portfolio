import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { recentWorkData } from "@/data/recentWorkData";

const RecentWork = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Photography - Matthew Chen";
  }, []);

  const masonryItems = [
    { ...recentWorkData[0], gridClass: "md:col-span-1 md:row-span-1" },
    { ...recentWorkData[1], gridClass: "md:col-span-1 md:row-span-2" },
    { ...recentWorkData[2], gridClass: "md:col-span-1 md:row-span-1" },
    { ...recentWorkData[3], gridClass: "md:col-span-1 md:row-span-2" },
    { ...recentWorkData[4], gridClass: "md:col-span-1 md:row-span-1" },
    { ...recentWorkData[5], gridClass: "md:col-span-1 md:row-span-2" },
  ];

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-background pt-24 pb-16 overflow-hidden">

        {/* ░░░ BACKGROUND PATTERN LAYERS ░░░ */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="rings" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
                <circle cx="120" cy="120" r="40" fill="none" stroke="#1b1b1b" strokeWidth="0.6" />
                <circle cx="120" cy="120" r="80" fill="none" stroke="#1b1b1b" strokeWidth="0.6" />
                <circle cx="120" cy="120" r="120" fill="none" stroke="#1b1b1b" strokeWidth="0.6" />
              </pattern>
              <pattern id="waves" x="0" y="0" width="260" height="120" patternUnits="userSpaceOnUse">
                <path d="M0 60 Q60 0 130 60 T260 60" fill="none" stroke="#1b1b1b" strokeWidth="0.7" />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#rings)" />
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>

        {/* Decorative Leaves */}
        <div className="absolute top-16 left-10 opacity-10">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5C35 15 45 25 30 55C15 25 25 15 30 5Z" fill="#1b1b1b" />
            <path d="M30 5V55" stroke="#1b1b1b" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-16 opacity-10 rotate-45">
          <svg width="45" height="45" viewBox="0 0 60 60" fill="none">
            <path d="M30 5C35 15 45 25 30 55C15 25 25 15 30 5Z" fill="#1b1b1b" />
          </svg>
        </div>

        {/* ░░░ PAGE CONTENT ░░░ */}
        <div className="container px-6 md:px-12 relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">PHOTOGRAPHY</h1>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px]">
            {masonryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/photography/${index}`)}
                className={`group relative overflow-hidden rounded-2xl ${item.gridClass} cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
              >
                <div className="w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">
                      {item.location} • {item.year}
                    </p>
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
