import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Construction from "./construction";
//connect to the new project file to fix my string problems
import { projectsData } from "@/components/Projects";
import type { MediaItem } from "@/components/Projects";

interface ProgressionStage {
  stage: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  details: {
    process: string;
    tools: string[];
    timeline: string;
    deliverables: string[];
  };
}

interface Project {
  title: string;
  image: string;
  description: string;
  year: string;
  location: string;
  featured: boolean;
  construction?: boolean;
  images?: MediaItem[];
  progressionStages?: ProgressionStage[];
}

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectIndex = Number(id);
  const project: Project | undefined = projectsData[projectIndex];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedZoom, setSelectedZoom] = useState<number | null>(null);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  const [draggingPoint, setDraggingPoint] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) navigate("/");
    setCurrentImageIndex(0);
  }, [project, navigate]);

  if (!project) return null;

  //construction page popup (if there is nothing there)
  if (project.construction) {
    return <Construction project={project} />;
  }

  const media: MediaItem[] =
    project.images && project.images.length > 0
      ? project.images
      : [{ url: project.image, type: "image" }];

  const currentMedia = media[currentImageIndex];

  const goNext = () =>
    setCurrentImageIndex((i) => (i + 1) % media.length);

  const goPrev = () =>
    setCurrentImageIndex((i) => (i - 1 + media.length) % media.length);

 //interactive points (get rid of from here)
  const [points, setPoints] = useState([
    {
      id: 1,
      x: 25,
      y: 30,
      label: "Exterior Detail",
      description: "Modern facade using sustainable materials",
    },
    {
      id: 2,
      x: 60,
      y: 45,
      label: "Window System",
      description: "High-efficiency glass and thermal performance",
    },
    {
      id: 3,
      x: 45,
      y: 70,
      label: "Landscaping",
      description: "Native plants integrated into the design",
    },
  ]);

  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setDraggingPoint(id);

    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;

    const point = points.find((p) => p.id === id);
    if (!point) return;

    const realX = (point.x / 100) * rect.width + rect.left;
    const realY = (point.y / 100) * rect.height + rect.top;

    setDragOffset({
      x: e.clientX - realX,
      y: e.clientY - realY,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (draggingPoint === null) return;

    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;

    const newX =
      ((e.clientX - dragOffset.x - rect.left) / rect.width) * 100;
    const newY =
      ((e.clientY - dragOffset.y - rect.top) / rect.height) * 100;

    setPoints((prev) =>
      prev.map((p) =>
        p.id === draggingPoint
          ? {
              ...p,
              x: Math.max(5, Math.min(95, newX)),
              y: Math.max(5, Math.min(95, newY)),
            }
          : p
      )
    );
  };

  const handleMouseUp = () => {
    setDraggingPoint(null);
  };

  useEffect(() => {
    if (draggingPoint !== null) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [draggingPoint, dragOffset]);

  const stages = project.progressionStages ?? [];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container px-6 md:px-12 py-24">
          {/* back button */}
          <button
            onClick={() => navigate("/")}
            className="text-charcoal mb-6 hover:text-forest-green"
          >
            ← Back to projects
          </button>

          <div
            ref={imageRef}
            className="relative w-full overflow-hidden rounded-xl shadow-lg bg-white group mb-12"
          >
            {currentMedia.type === "video" ? (
              <video
                src={currentMedia.url}
                controls
                autoPlay
                loop
                muted
                className="w-full object-contain"
              />
            ) : (
              <img
                src={currentMedia.url}
                className="w-full object-contain"
              />
            )}

            {/* arrow buttons */}
            {media.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-3 rounded-full hover:bg-white"
                >
                  ❮
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-3 rounded-full hover:bg-white"
                >
                  ❯
                </button>
              </>
            )}

            {/* interactive points (might remove) */}
            {currentMedia.type === "image" &&
              points.map((p) => (
                <div
                  key={p.id}
                  onMouseDown={(e) => handleMouseDown(e, p.id)}
                  onClick={() => setSelectedZoom(p.id)}
                  className="absolute w-6 h-6 rounded-full bg-white/70 border shadow cursor-grab"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
          </div>

          {/* details text */}
          {selectedZoom && (
            <div className="bg-white shadow p-6 rounded-xl mb-12">
              <h3 className="text-xl font-semibold text-forest-green">
                {points.find((p) => p.id === selectedZoom)?.label}
              </h3>
              <p className="text-charcoal mt-2">
                {points.find((p) => p.id === selectedZoom)?.description}
              </p>
            </div>
          )}

          {/* progress text */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-forest-green mb-6">
              Design Progression
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage, idx) => (
                <button
                  key={stage.stage}
                  onClick={() =>
                    setSelectedStage(
                      selectedStage === idx ? null : idx
                    )
                  }
                  className={`bg-white rounded-xl shadow hover:shadow-lg transition ${
                    selectedStage === idx &&
                    "ring-2 ring-forest-green scale-[1.02]"
                  }`}
                >
                  <img
                    src={stage.image}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-4">
                    <p className="text-xs uppercase text-forest-green">
                      {stage.stage}
                    </p>
                    <h4 className="font-bold">{stage.title}</h4>
                  </div>
                </button>
              ))}
            </div>

            {selectedStage !== null && (
              <div className="bg-white rounded-xl shadow p-6 mt-6">
                <h3 className="text-xl font-bold text-forest-green">
                  {stages[selectedStage].title}
                </h3>
                <p className="text-charcoal mt-2">
                  {stages[selectedStage].details.process}
                </p>
              </div>
            )}
          </div>

          {/* text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow p-8">
              <span className="text-charcoal/60 text-sm">
                {project.year} • {project.location}
              </span>
              <h1 className="text-3xl font-bold mt-4 text-forest-green">
                {project.title}
              </h1>
              <p className="mt-4 text-charcoal/80">
                {project.description}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8">
              <h3 className="text-xl font-semibold text-forest-green mb-4">
                Project Details
              </h3>
              <p className="text-charcoal/70">
                This {project.title.toLowerCase()} project explores
                form, function, and architectural intent.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetail;
