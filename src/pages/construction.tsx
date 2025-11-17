import React from "react";
import cons from "../Assets/Assets/cons.jpg";
import type { Project } from "@/types/project";

interface ConstructionProps {
  project: Project;
}

const Construction: React.FC<ConstructionProps> = ({ project }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      {/* background image (draw my own, dont use the stupid google photo) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${cons})`,
          opacity: 0.45,
          filter: "grayscale(20%)",
        }}
      ></div>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-3xl">
        <p className="text-white/90 text-lg font-medium mb-4">
          Sorry, this page is currently being updated.
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg tracking-wide">
          UNDER CONSTRUCTION!!
        </h1>

        <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
          I’m working on fixing this page. Please check back soon!
        </p>

        <a
          href="/"
          className="px-8 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition text-lg font-medium"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Construction;
