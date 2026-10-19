import * as React from "react";
import banner1 from "@/assets/banner/banner-1.jpg";
import banner2 from "@/assets/banner/banner-2.jpg";
import banner3 from "@/assets/banner/banner-3.jpg";

const IMAGES = [banner1, banner2, banner3];

/**
 * Rotating, cross-fading background images for page banners.
 * Images stay clearly visible with a soft gradient overlay for text legibility.
 */
export function HeroBackground({ interval = 5000 }: { interval?: number }) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % IMAGES.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [interval]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 0.7 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/25" />
    </div>
  );
}
