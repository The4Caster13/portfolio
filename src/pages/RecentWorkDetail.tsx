import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { recentWorkData } from "@/data/recentWorkData";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RecentWorkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const photoIndex = parseInt(id || "0");
  const photo = recentWorkData[photoIndex % recentWorkData.length];

  // Tell TS what each image looks like
  const images = photo.images as { src: string; caption: string }[];

  const [ratios, setRatios] = useState<number[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [embla, setEmbla] = useState<any>(null);

  // Load aspect ratios + background colors
  useEffect(() => {
    document.title = `${photo.title} - Matthew Chen`;

    const load = async () => {
      const r: number[] = [];
      const c: string[] = [];

      for (let imgObj of images) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imgObj.src;

        await new Promise((res) => {
          img.onload = () => {
            // Aspect ratio
            r.push(img.width / img.height);

            // Average color
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.drawImage(img, 0, 0);
              const data = ctx.getImageData(0, 0, img.width, img.height).data;

              let rSum = 0,
                gSum = 0,
                bSum = 0;

              const step = 25;
              for (let i = 0; i < data.length; i += 4 * step) {
                rSum += data[i];
                gSum += data[i + 1];
                bSum += data[i + 2];
              }

              const count = data.length / (4 * step);
              const avg = `rgb(${(rSum / count) | 0}, ${(gSum / count) | 0}, ${
                (bSum / count) | 0
              })`;

              c.push(avg);
            }

            res(null);
          };
        });
      }

      setRatios(r);
      setColors(c);
    };

    load();
  }, [photo, images]);

  // Track which slide is active
  useEffect(() => {
    if (!embla) return;

    const update = () => setActiveIndex(embla.selectedScrollSnap());
    embla.on("select", update);
    update();

    return () => embla.off("select", update);
  }, [embla]);

  const bgColor = colors[activeIndex] || "#1a1a1a";

  return (
    <>
      <Navbar />

      <main
        className="min-h-screen transition-colors duration-700"
        style={{ backgroundColor: bgColor }}
      >
        {/* Header */}
        <div className="pt-24 pb-6 container px-6 md:px-12">
          <p className="text-sm text-white/80">
            {photo.location} • {photo.year}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full h-[80vh] flex items-center justify-center">
          <Carousel className="w-full h-full" opts={{ loop: true }} setApi={setEmbla}>
            <CarouselContent className="h-[80vh]">
              {images.map((imgObj, index) => {
                const isPortrait = ratios[index] < 1;
                const isActive = index === activeIndex;

                return (
                  <CarouselItem
                    key={index}
                    className="relative h-full flex flex-col items-center justify-center p-4"
                  >
                    {/* IMAGE */}
                    <img
                      src={imgObj.src}
                      alt={imgObj.caption}
                      className={`
                        mx-auto transition-opacity duration-700 ease-in-out
                        ${isActive ? "opacity-100" : "opacity-0"}
                        ${
                          isPortrait
                            ? "h-full w-auto max-h-[80vh] object-contain"
                            : "w-full h-auto max-w-[95vw] object-contain"
                        }
                      `}
                    />

                    {/* CAPTION — Always visible */}
                    <div
                      className={`
                        absolute bottom-6 left-1/2 -translate-x-1/2
                        px-5 py-3 rounded-xl
                        bg-black/55 backdrop-blur-md
                        text-white text-center text-base md:text-lg
                        transition-all duration-700
                        ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                      `}
                    >
                      {imgObj.caption}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 backdrop-blur-md transition text-white" />
            <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md transition text-white" />
          </Carousel>
        </div>

        {/* PROJECT DETAILS — with backdrop overlay for readability */}
        <div className="relative mt-16">
          {/* readability overlay */}
          <div className="absolute inset-0 bg-black/35 backdrop-blur-sm"></div>

          <div className="relative container px-6 md:px-12 py-16 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Project Details</h2>

              <p className="text-lg leading-relaxed mb-12">
                {photo.description}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-sm font-semibold opacity-80 mb-1">YEAR</h3>
                  <p className="text-lg">{photo.year}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold opacity-80 mb-1">LOCATION</h3>
                  <p className="text-lg">{photo.location}</p>
                </div>
              </div>

              <Button
                onClick={() => navigate("/recent-work")}
                className="mt-12 bg-white/10 text-white border border-white/50 hover:bg-white/20 hover:border-white font-medium backdrop-blur-sm">
                ← Back to Photography
              </Button>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RecentWorkDetail;
