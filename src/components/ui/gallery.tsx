import React, { useEffect, useMemo, useRef, useState } from "react";

export type GalleryPhoto = {
  src: string;
  alt?: string;
  label?: string;
  caption?: string;
};

type RevolvingGalleryProps = {
  photos: GalleryPhoto[];
  intervalMs?: number;
  ariaLabel?: string;
  title?: string;
  subtitle?: string;
};

export default function RevolvingGallery({
  photos,
  intervalMs = 3500,
  ariaLabel = "Gallery",
  title = "Gallery",
  subtitle = "A taste of the full collection.",
}: RevolvingGalleryProps) {
  const [active, setActive] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const count = photos.length;

  const safeIndex = (i: number): number => {
    if (count === 0) return 0;
    return ((i % count) + count) % count;
  };

  const go = (dir: number) => setActive((a) => safeIndex(a + dir));
  const goTo = (i: number) => setActive(safeIndex(i));

  // Show prev, active, next
  const ring = useMemo(() => {
    if (count === 0) return [];
    const prev = safeIndex(active - 1);
    const next = safeIndex(active + 1);
    return [
      { idx: prev, role: "prev" as const },
      { idx: active, role: "active" as const },
      { idx: next, role: "next" as const },
    ];
  }, [active, count]);

  useEffect(() => {
    if (count <= 1) return;
    if (paused) return;

    timerRef.current = window.setInterval(() => {
      setActive((a) => safeIndex(a + 1));
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [count, paused, intervalMs]);

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  if (!photos || photos.length === 0) return null;

  return (
    <section
      className="rg"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="rg__top">
        <h3 className="rg__title">{title}</h3>
        <p className="rg__subtitle">{subtitle}</p>
      </div>

      <div
        className="rg__stage"
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        <button
          type="button"
          className="rg__nav rg__nav--left"
          onClick={() => go(-1)}
          aria-label="Previous photo"
        >
          ‹
        </button>

        <div className="rg__track">
          {ring.map(({ idx, role }) => {
            const p = photos[idx];
            return (
              <button
                key={`${idx}-${role}`}
                type="button"
                className={`rg__card rg__card--${role}`}
                onClick={() => goTo(idx)}
                aria-label={`View ${p.alt ?? "photo"} (${idx + 1} of ${count})`}
              >
                <img
                  className="rg__img"
                  src={p.src}
                  alt={p.alt ?? ""}
                  loading="lazy"
                />

                {(p.label || p.caption) && (
                  <div className="rg__meta" aria-hidden="true">
                    {p.label && <span className="rg__label">{p.label}</span>}
                    {p.caption && (
                      <span className="rg__caption">{p.caption}</span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="rg__nav rg__nav--right"
          onClick={() => go(1)}
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      <div className="rg__dots" role="tablist" aria-label="Choose a photo">
        {photos.map((p, i) => (
          <button
            key={`${p.src}-${i}`}
            type="button"
            className={`rg__dot ${i === active ? "is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            aria-selected={i === active}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}
