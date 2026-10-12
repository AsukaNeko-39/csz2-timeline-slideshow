import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Footprints,
} from "lucide-react";
import { landJourney } from "@/data/landJourney";
import { landItems } from "@/data/catalog";
import { assetUrl } from "@/lib/assets";
import LandRoadTraffic from "./LandRoadTraffic";
import "./land-journey.css";

type Phase =
  | "settled"
  | "background-out"
  | "figure-out"
  | "background-in"
  | "figure-in";
const imagePath = (name: string) =>
  assetUrl(`/materials/land-journey/${name}.webp`);
const spritePosition = (index: number): CSSProperties => ({
  backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`,
});

export default function LandJourney({
  initialTarget,
  onRead,
}: {
  initialTarget?: string;
  onRead: (id: string) => void;
}) {
  const [index, setIndex] = useState(() =>
    Math.max(
      0,
      landJourney.findIndex(item => item.id === initialTarget)
    )
  );
  const [phase, setPhase] = useState<Phase>("settled");
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(1);
  const timers = useRef<number[]>([]);
  const busy = useRef(false);
  const mounted = useRef(true);
  const stage = landJourney[index];
  const material = landItems.find(item => item.id === stage.id)?.images[0];
  const unavailable = phase !== "settled" || loading;

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      timers.current.forEach(window.clearTimeout);
    };
  }, []);
  useEffect(() => {
    // Warm up only the next/previous paintings; the atlas is shared by all eras.
    [index - 1, index + 1]
      .filter(i => i >= 0 && i < landJourney.length)
      .forEach(i => {
        const material = landItems.find(item => item.id === landJourney[i].id)
          ?.images[0];
        [imagePath(landJourney[i].scene), material && assetUrl(material.src)]
          .filter((src): src is string => Boolean(src))
          .forEach(src => {
            const image = new Image();
            image.src = src;
          });
      });
  }, [index]);

  async function travel(target: number) {
    if (
      busy.current ||
      target === index ||
      target < 0 ||
      target >= landJourney.length
    )
      return;
    busy.current = true;
    setLoading(true);
    setDirection(target > index ? 1 : -1);
    // Do not fade away a working scene while its replacement is still loading.
    const targetMaterial = landItems.find(
      item => item.id === landJourney[target].id
    )?.images[0];
    try {
      await Promise.all(
        [
          imagePath(landJourney[target].scene),
          targetMaterial && assetUrl(targetMaterial.src),
        ]
          .filter((src): src is string => Boolean(src))
          .map(src => {
            const image = new Image();
            image.src = src;
            return image.decode();
          })
      );
    } catch {
      /* CSS paper surface remains as a fallback. */
    }
    if (!mounted.current) return;
    setLoading(false);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIndex(target);
      busy.current = false;
      return;
    }
    setPhase("background-out");
    const after = (delay: number, action: () => void) => {
      timers.current.push(window.setTimeout(action, delay));
    };
    // Traffic and setting leave first; narrator then leaves; enter in reverse order.
    after(460, () => setPhase("figure-out"));
    after(800, () => {
      setIndex(target);
      setPhase("background-in");
    });
    after(1260, () => setPhase("figure-in"));
    after(1780, () => {
      setPhase("settled");
      busy.current = false;
      timers.current = [];
    });
  }

  return (
    <section
      className="land-journey"
      aria-label="沿田间路读土地制度"
      onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          void travel(index + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      <div className="land-journey-heading">
        <div>
          <p>田间问古 · 九段时光</p>
          <h2>沿一条路，读千年田制</h2>
        </div>
        <span>
          <Footprints size={17} aria-hidden="true" />
          左右切换，听时代讲述
        </span>
      </div>
      <div
        className="land-journey-stage"
        data-phase={phase}
        data-era={stage.id}
        data-direction={direction}
        aria-busy={unavailable}
      >
        <div className="land-journey-setting" aria-hidden="true">
          <img
            src={imagePath(stage.scene)}
            alt=""
            onError={event => {
              event.currentTarget.style.visibility = "hidden";
            }}
            onLoad={event => {
              event.currentTarget.style.visibility = "visible";
            }}
          />
        </div>
        <div className="land-journey-atmosphere" aria-hidden="true" />
        <div className="land-journey-era" aria-hidden="true">
          <span>{String(index + 1).padStart(2, "0")} / 09</span>
          <h3>{stage.era}</h3>
          <p>{stage.period}</p>
        </div>
        <LandRoadTraffic index={index} />
        <div
          className="land-journey-narrator"
          role="img"
          aria-label={`${stage.era}讲述人，穿${stage.outfit}，手持${stage.book}`}
        >
          <div
            className="land-journey-character"
            style={{
              ...spritePosition(index),
              backgroundImage: `url("${imagePath("land-characters")}")`,
            }}
          />
        </div>
        <div className="land-journey-bubble" inert={unavailable}>
          {material && (
            <button
              type="button"
              className="land-journey-material"
              onClick={() => onRead(stage.id)}
              aria-label={`查看${material.caption}资料`}
            >
              <img src={assetUrl(material.src)} alt={material.caption} />
              <span>
                {material.caption}
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </button>
          )}
          <div className="land-journey-dialogue">
            <span className="land-journey-speaker">
              田间讲述人 · {stage.era}
            </span>
            <h3>{stage.principle}</h3>
            <p>{stage.speech}</p>
            <button
              className="land-journey-read"
              onClick={() => onRead(stage.id)}
            >
              翻阅本期土地制度
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
        <button
          className="land-journey-arrow land-journey-prev"
          onClick={() => void travel(index - 1)}
          disabled={unavailable || index === 0}
          aria-label="上一个土地制度时代"
        >
          <ChevronLeft size={25} />
          <span>上一时代</span>
        </button>
        <button
          className="land-journey-arrow land-journey-next"
          onClick={() => void travel(index + 1)}
          disabled={unavailable || index === landJourney.length - 1}
          aria-label="下一个土地制度时代"
        >
          <ChevronRight size={25} />
          <span>下一时代</span>
        </button>
        <span className="land-journey-scene-note">
          服饰与场景为时代示意绘图
        </span>
        {loading && (
          <span className="land-journey-loading" role="status">
            展开下一段时光…
          </span>
        )}
      </div>
      <nav className="land-journey-stops" aria-label="土地制度九个时代">
        {landJourney.map((item, i) => (
          <button
            key={item.id}
            onClick={() => void travel(i)}
            aria-current={i === index ? "step" : undefined}
            disabled={unavailable}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{item.era}</strong>
          </button>
        ))}
      </nav>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {phase === "settled"
          ? `${stage.era}。${stage.principle}。${stage.speech}`
          : "时代切换中"}
      </p>
    </section>
  );
}
