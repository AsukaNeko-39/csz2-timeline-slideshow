import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronRight, Pause, Play } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import type { EraSlide } from "@/data/timelineSlides";
import "./era-slideshow.css";

export default function EraSlideshow({
  slides,
  active,
  era,
  children,
}: {
  slides: EraSlide[];
  active: boolean;
  era: string;
  children: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<number[]>([]);
  const [failed, setFailed] = useState<number[]>([]);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manualPlay, setManualPlay] = useState(false);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [reduced, setReduced] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const playing =
    active &&
    visible &&
    pageVisible &&
    !paused &&
    loaded.length > 1 &&
    (manualPlay || (!reduced && (hovered || focused)));

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => {
      setReduced(media.matches);
      setManualPlay(false);
    };
    const onVisibility = () => setPageVisible(!document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (root.current) observer.observe(root.current);
    media.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (!active) {
      setCurrent(0);
      setHovered(false);
      setFocused(false);
      setManualPlay(false);
      setPaused(false);
    }
  }, [active]);

  useEffect(() => {
    if (failed.includes(current) && loaded.length) setCurrent(loaded[0]);
  }, [current, failed, loaded]);

  function next() {
    setCurrent(previous => {
      for (let step = 1; step <= slides.length; step++) {
        const candidate = (previous + step) % slides.length;
        if (loaded.includes(candidate)) return candidate;
      }
      return previous;
    });
  }

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(next, 2800);
    return () => window.clearInterval(timer);
  }, [playing, loaded, slides.length]);

  return (
    <div
      ref={root}
      className="culture-era-visual era-slideshow"
      data-slide={current + 1}
      data-playing={playing}
      onPointerEnter={event => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
        if (!manualPlay && !focused) {
          setCurrent(0);
          setPaused(false);
        }
      }}
      onFocusCapture={event => {
        if (event.target.matches(":focus-visible")) setFocused(true);
      }}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocused(false);
          if (!hovered && !manualPlay) {
            setCurrent(0);
            setPaused(false);
          }
        }
      }}
    >
      <div className="era-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`era-slide${slide.contain ? " era-slide-contain" : ""}`}
            data-current={current === index}
            style={
              slide.contain
                ? { backgroundImage: `url("${assetUrl(slide.src)}")` }
                : undefined
            }
          >
            <img
              src={assetUrl(slide.src)}
              alt=""
              loading={active ? "eager" : "lazy"}
              onLoad={() =>
                setLoaded(previous =>
                  previous.includes(index) ? previous : [...previous, index]
                )
              }
              onError={() => {
                setFailed(previous =>
                  previous.includes(index) ? previous : [...previous, index]
                );
                setLoaded(previous =>
                  previous.filter(value => value !== index)
                );
                setCurrent(previous =>
                  previous === index
                    ? (loaded.find(value => value !== index) ?? 0)
                    : previous
                );
              }}
            />
          </div>
        ))}
      </div>
      {children}
      <p className="era-slide-label">{slides[current].caption}</p>
      <div
        className="era-slide-controls"
        role="group"
        aria-label={`${era}图片轮播`}
      >
        <button
          type="button"
          aria-label={playing ? "暂停图片轮播" : "播放图片轮播"}
          onClick={() => {
            if (playing) {
              setPaused(true);
              setManualPlay(false);
            } else {
              setPaused(false);
              setManualPlay(true);
            }
          }}
        >
          {playing ? <Pause size={15} /> : <Play size={15} />}
        </button>
        <button
          type="button"
          onClick={next}
          disabled={loaded.length < 2}
          aria-label={`${era}：下一张图片`}
        >
          <span>
            {current + 1} / {slides.length}
          </span>
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
}
