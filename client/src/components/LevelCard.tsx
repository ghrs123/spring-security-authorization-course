/*
 * ─── Shield Blueprint Theme ───
 * LevelCard: Preview card for each level on the home page
 */

import type { Level } from "@/lib/courseData";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";

interface LevelCardProps {
  level: Level;
  index: number;
}

export default function LevelCard({ level, index }: LevelCardProps) {
  const isAmber = level.accentColor === "amber";

  return (
    <div
      className="group card-blueprint rounded-lg overflow-hidden bg-card/40 backdrop-blur-sm"
      style={{
        animationDelay: `${index * 150}ms`,
        animation: "float-up 0.7s ease-out forwards",
        opacity: 0,
      }}
    >
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={level.image}
          alt={level.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded border ${
            isAmber
              ? "bg-accent/20 text-accent border-accent/30"
              : "bg-primary/20 text-primary border-primary/30"
          }`}>
            NÍVEL {String(level.id).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className={`font-mono text-xs uppercase tracking-widest ${
            isAmber ? "text-accent/80" : "text-primary/80"
          }`}>
            {level.subtitle}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-mono text-xl font-bold text-foreground mb-3">
          {level.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
          {level.description}
        </p>

        {/* Topics count */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
          <BookOpen size={14} />
          <span>{level.topics.length} tópicos de estudo</span>
        </div>

        {/* CTA */}
        <Link
          href={`/level/${level.id}`}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded font-mono text-sm font-semibold transition-all no-underline ${
            isAmber
              ? "bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20"
              : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
          }`}
        >
          Explorar Nível
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
