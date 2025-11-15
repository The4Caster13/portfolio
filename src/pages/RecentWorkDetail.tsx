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

  const [ratios, setRatios] = useState<number[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [embla, setEmbla] = useState<any>(null);

  // Load average colors + aspect ratios
  useEffect(() => {
    document.title = `${photo.title} - Matthew Chen`;

    const load = async () => {
      const r: number[] = [];
      const c: string[] = [];

      for (let src of photo.images) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;

        await new Promise((res) => {
          img.onload = () => {
            /** Aspect Ratio */
            r.push(img.width / img.height);

            /** Average Color */
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.drawImage(img, 0, 0, img.width, img.height);
              const data = ctx.getImageData(0, 0, img.width, img.height).data;

              let rSum = 0,
                gSum = 0,
                bSum = 0;
              const step = 20; // sample every 20th pixel for speed

              for (let i = 0; i < data.length; i += 4 * step) {
                rSum += data[i];
                gSum += data[i + 1];
                bSum += data[i + 2];
              }

              const count = data.length / (4 * step);
              const avg = `rgb(${Math.floor(rSum / count)}, ${Math.floor(
                gSum / count
              )}, ${Math.floor(bSum / count)})`;

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
  }, [photo]);

  // Proper Embla active slide detection
  useEffect(() => {
    if (!embla) return;

    const update = () => {
      setActiveIndex(embla.selectedScrollSnap());
    };

    embla.on("select", update);
    update();

    return () => embla.off("select", update);
  }, [embla]);

  const bgColor = colors[activeIndex] || "#0f0f0f";

  return (
    <>
      <Navbar />

      <main className="min-h-screen transition-colors duration-700" style={{ backgroundColor: bgColor }}>
        {/* Date/Location Header */}
        <div className="pt-24 pb-6 container px-6 md:px-12">
          <p className="text-sm text-muted-foreground">
            {photo.location} • {photo.year}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full h-[80vh] flex items-center justify-center">
          <Carousel className="w-full h-full" opts={{ loop: true }} setApi={setEmbla}>
            <CarouselContent className="h-[80vh]">
              {photo.images.map((image, index) => {
                const isPortrait = ratios[index] && ratios[index] < 1;
                const isActive = index === activeIndex;

                return (
                  <CarouselItem
                    key={index}
                    className="relative h-full flex items-center justify-center p-4"
                  >
                    {/* Fade animation per slide */}
                    <img
                      src={image}
                      alt={`${photo.title} - View ${index + 1}`}
                      className={`
                        mx-auto transition-opacity duration-700 ease-in-out
                        ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                        ${isPortrait
                          ? "h-full w-auto max-h-[80vh] object-contain"
                          : "w-full h-auto max-w-[95vw] object-contain"}
                      `}
                    />

                    {/* Overlay text on first slide */}
                    {index === 0 && isActive && (
                      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                          {photo.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          {photo.description.split(".")[0]}.
                        </p>
                      </div>
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 backdrop-blur-md transition" />
            <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md transition" />
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
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  YEAR
                </h3>
                <p className="text-lg">{photo.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  LOCATION
                </h3>
                <p className="text-lg">{photo.location}</p>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={() => navigate("/recent-work")}
              className="mt-8"
            >
              ← Back to Photography
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RecentWorkDetail;
