/*
 * ─── Shield Blueprint Theme ───
 * ProgressTracker: Vertical progress indicator for level detail pages
 */

import type { Topic } from "@/lib/courseData";

interface ProgressTrackerProps {
  topics: Topic[];
  activeIndex: number;
  accentColor: "emerald" | "amber";
}

export default function ProgressTracker({ topics, activeIndex, accentColor }: ProgressTrackerProps) {
  const dotColor = accentColor === "emerald" ? "bg-primary" : "bg-accent";
  const dotInactive = "bg-border";
  const lineColor = accentColor === "emerald" ? "bg-primary/30" : "bg-accent/30";
  const lineActive = accentColor === "emerald" ? "bg-primary" : "bg-accent";

  return (
    <div className="hidden lg:flex flex-col items-center gap-0 sticky top-24">
      {topics.map((topic, i) => (
        <div key={topic.id} className="flex flex-col items-center">
          {/* Dot */}
          <a
            href={`#topic-${topic.id}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i <= activeIndex ? dotColor : dotInactive
            } ${i === activeIndex ? "ring-4 ring-primary/20 scale-125" : ""}`}
            title={topic.title}
          />
          {/* Line */}
          {i < topics.length - 1 && (
            <div className={`w-0.5 h-16 transition-colors duration-300 ${
              i < activeIndex ? lineActive : lineColor
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}
