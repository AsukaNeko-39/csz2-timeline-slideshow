import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, ChevronUp, PanelsTopLeft } from "lucide-react";
import BottomModules from "./BottomModules";
import type { NavigateCulture } from "./CultureScenery";
import "./map-topic-panel.css";

export default function MapTopicPanel({
  onNavigate,
}: {
  onNavigate: NavigateCulture;
}) {
  const [expanded, setExpanded] = useState(true);
  const panelId = useId();
  const timer = useRef<number | null>(null);

  function stopPreview() {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  }

  useEffect(() => {
    timer.current = window.setTimeout(() => {
      timer.current = null;
      setExpanded(false);
    }, 3000);
    return stopPreview;
  }, []);

  return (
    <div className="map-topic-panel" data-expanded={expanded}>
      <button
        type="button"
        className="map-topic-toggle"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => {
          stopPreview();
          setExpanded(value => !value);
        }}
      >
        <PanelsTopLeft size={17} aria-hidden="true" />
        {expanded ? "收起专题" : "展开专题"}
        {expanded ? (
          <ChevronDown size={16} aria-hidden="true" />
        ) : (
          <ChevronUp size={16} aria-hidden="true" />
        )}
      </button>
      <div
        id={panelId}
        className="map-topic-reveal"
        aria-hidden={!expanded}
        inert={!expanded}
        onFocusCapture={stopPreview}
        onPointerDownCapture={stopPreview}
      >
        <div className="map-topic-content">
          <BottomModules onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}
