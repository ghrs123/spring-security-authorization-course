/*
 * ─── Shield Blueprint Theme ───
 * TopicCard: Dashed border that becomes solid on hover, emerald glow
 */

import type { Topic } from "@/lib/courseData";
import { BookOpen, Code2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface TopicCardProps {
  topic: Topic;
  index: number;
  accentColor: "emerald" | "amber";
}

export default function TopicCard({ topic, index, accentColor }: TopicCardProps) {
  const [expanded, setExpanded] = useState(false);

  const accentClasses = accentColor === "emerald"
    ? "hover:border-primary/50 hover:shadow-[0_0_20px_oklch(0.75_0.17_160/0.1)]"
    : "hover:border-accent/50 hover:shadow-[0_0_20px_oklch(0.78_0.17_70/0.1)]";

  const tagColor = accentColor === "emerald"
    ? "bg-primary/10 text-primary border-primary/20"
    : "bg-accent/10 text-accent border-accent/20";

  const numberColor = accentColor === "emerald" ? "text-primary/40" : "text-accent/40";

  return (
    <div
      className={`card-blueprint rounded-lg bg-card/50 backdrop-blur-sm p-6 ${accentClasses}`}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "float-up 0.6s ease-out forwards",
        opacity: 0,
      }}
    >
      <div className="flex items-start gap-4">
        <span className={`font-mono text-3xl font-bold ${numberColor} select-none shrink-0`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <h3 className="font-mono text-lg font-semibold text-foreground mb-2">
            {topic.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {topic.description}
          </p>

          {/* Concepts tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {topic.concepts.slice(0, expanded ? undefined : 4).map((concept) => (
              <span
                key={concept}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium border ${tagColor}`}
              >
                <Code2 size={10} />
                {concept}
              </span>
            ))}
            {!expanded && topic.concepts.length > 4 && (
              <span className="text-xs text-muted-foreground self-center">
                +{topic.concepts.length - 4} mais
              </span>
            )}
          </div>

          {/* Expand/collapse */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {expanded ? "Recolher" : "Ver recursos"}
          </button>

          {expanded && (
            <div className="mt-4 pt-4 border-t border-border/30">
              <h4 className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen size={12} />
                Recursos Recomendados
              </h4>
              <ul className="space-y-2">
                {topic.resources.map((resource) => (
                  <li key={resource} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${accentColor === "emerald" ? "bg-primary/60" : "bg-accent/60"}`} />
                    {resource}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
