import { useLayoutEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/assets";

// Road centre heights in each painting, sampled at 18%, 50% and 82% of its width.
// Coordinates belong to the original 1672 × 941 image, not the viewport.
const roads = [
  [0.856, 0.868, 0.85],
  [0.844, 0.862, 0.85],
  [0.838, 0.852, 0.844],
  [0.855, 0.854, 0.849],
  [0.848, 0.838, 0.841],
  [0.872, 0.868, 0.854],
  [0.855, 0.864, 0.856],
  [0.852, 0.854, 0.858],
  [0.866, 0.87, 0.867],
];
// Atlases have unequal transparent padding; align visible feet, not image boxes.
const originalFeet = [
  0.996, 0.996, 0.996, 0.893, 0.898, 0.907, 0.81, 0.813, 0.818,
];
const companionFeet = [
  0.993, 0.993, 0.993, 0.937, 0.939, 0.937, 0.862, 0.874, 0.871,
];

export default function LandRoadTraffic({ index }: { index: number }) {
  const root = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    const measure = () =>
      setSize({ width: element.clientWidth, height: element.clientHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const mobile = window.matchMedia("(max-width: 640px)").matches;
  const paintedHeight = Math.max(size.height, (size.width * 941) / 1672);
  const paintedWidth = (paintedHeight * 1672) / 941;
  // Match the background's object-fit: cover and centre/bottom crop exactly.
  const cropLeft = (paintedWidth - size.width) * (mobile ? 0.48 : 0.5);
  const width = mobile
    ? Math.min(100, size.width * 0.28)
    : Math.min(185, size.width * 0.17, (paintedHeight / 941) * 210);
  const height = (width * 2) / 3;

  return (
    <div ref={root} className="land-journey-traffic" aria-hidden="true">
      {["land-activities", "land-road-companions"].map((atlas, side) => {
        const x = size.width * (side ? 0.82 : 0.18);
        const sourceX = paintedWidth ? (x + cropLeft) / paintedWidth : 0.5;
        const segment = sourceX < 0.5 ? 0 : 1;
        const ratio = Math.max(
          0,
          Math.min(1, (sourceX - (segment ? 0.5 : 0.18)) / 0.32)
        );
        const road = roads[index];
        const roadY =
          road[segment] + (road[segment + 1] - road[segment]) * ratio;
        const ground = size.height - paintedHeight * (1 - roadY);
        const foot = (side ? companionFeet : originalFeet)[index];
        return (
          <div
            key={atlas}
            className="land-journey-road-group"
            data-side={side ? "right" : "left"}
            data-ground={ground}
            data-foot={foot}
            style={{
              left: x - width / 2,
              top: ground - height * foot,
              width,
              height,
            }}
          >
            <div
              className="land-journey-traffic-sprite"
              style={{
                backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`,
                backgroundImage: `url("${assetUrl(`/materials/land-journey/${atlas}.webp`)}")`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
