/*
 * ─── Shield Blueprint Theme ───
 * LevelPage: Detail page for each level with hero image, progress tracker, topic cards
 * Dark navy bg, emerald wireframe lines, amber accents
 */

import Navbar from "@/components/Navbar";
import ProgressTracker from "@/components/ProgressTracker";
import TopicCard from "@/components/TopicCard";
import { levels } from "@/lib/courseData";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";

export default function LevelPage() {
  const params = useParams<{ id: string }>();
  const levelId = parseInt(params.id || "1", 10);
  const level = levels.find((l) => l.id === levelId);
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const prevLevel = levels.find((l) => l.id === levelId - 1);
  const nextLevel = levels.find((l) => l.id === levelId + 1);

  // Scroll spy for progress tracker
  useEffect(() => {
    if (!level) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              const topicId = id.replace("topic-", "");
              const idx = level.topics.findIndex((t) => t.id === topicId);
              if (idx >= 0) setActiveTopicIndex(idx);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    level.topics.forEach((topic) => {
      const el = document.getElementById(`topic-${topic.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [level]);

  // Scroll to top on level change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTopicIndex(0);
  }, [levelId]);

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-mono text-2xl text-foreground mb-4">Nível não encontrado</h1>
          <Link href="/" className="text-primary font-mono text-sm">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const isAmber = level.accentColor === "amber";

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ─── Level Hero ─── */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative h-64 sm:h-80">
          <img
            src={level.image}
            alt={level.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-0 right-0">
            <div className="container max-w-6xl mx-auto px-4">
              <nav className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <Link href="/" className="hover:text-primary transition-colors no-underline text-muted-foreground">
                  Início
                </Link>
                <ChevronRight size={12} />
                <span className={isAmber ? "text-accent" : "text-primary"}>
                  Nível {String(level.id).padStart(2, "0")}
                </span>
              </nav>
            </div>
          </div>

          {/* Level title overlay */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="container max-w-6xl mx-auto px-4">
              <span className={`font-mono text-xs uppercase tracking-widest ${
                isAmber ? "text-accent/80" : "text-primary/80"
              }`}>
                {level.subtitle}
              </span>
              <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                {level.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Level Description ─── */}
      <section className="py-10">
        <div className="container max-w-6xl mx-auto px-4">
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            {level.description}
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className={`font-mono px-3 py-1 rounded border ${
              isAmber ? "border-accent/30 text-accent" : "border-primary/30 text-primary"
            }`}>
              {level.topics.length} tópicos
            </span>
            <span className="font-mono text-xs text-muted-foreground/60">
              {level.topics.reduce((acc, t) => acc + t.concepts.length, 0)} conceitos
            </span>
          </div>
        </div>
      </section>

      {/* ─── Topics with Progress Tracker ─── */}
      <section className="py-10 pb-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex gap-10">
            {/* Progress tracker sidebar */}
            <ProgressTracker
              topics={level.topics}
              activeIndex={activeTopicIndex}
              accentColor={level.accentColor as "emerald" | "amber"}
            />

            {/* Topic cards */}
            <div className="flex-1 space-y-6">
              {level.topics.map((topic, index) => (
                <div key={topic.id} id={`topic-${topic.id}`}>
                  <TopicCard
                    topic={topic}
                    index={index}
                    accentColor={level.accentColor as "emerald" | "amber"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Level Navigation ─── */}
      <section className="py-12 border-t border-border/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {prevLevel ? (
              <Link
                href={`/level/${prevLevel.id}`}
                className="flex items-center gap-3 group no-underline"
              >
                <ArrowLeft size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <span className="text-xs text-muted-foreground font-mono block">Nível anterior</span>
                  <span className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
                    {prevLevel.title}
                  </span>
                </div>
              </Link>
            ) : (
              <Link href="/" className="flex items-center gap-3 group no-underline">
                <ArrowLeft size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <span className="text-xs text-muted-foreground font-mono block">Voltar</span>
                  <span className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
                    Página Inicial
                  </span>
                </div>
              </Link>
            )}

            {nextLevel ? (
              <Link
                href={`/level/${nextLevel.id}`}
                className="flex items-center gap-3 group no-underline text-right"
              >
                <div>
                  <span className="text-xs text-muted-foreground font-mono block">Próximo nível</span>
                  <span className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
                    {nextLevel.title}
                  </span>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ) : (
              <div className="text-right">
                <span className="text-xs text-muted-foreground font-mono block">Parabéns!</span>
                <span className="text-sm font-mono amber-glow text-accent">
                  Curso Completo
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 border-t border-border/20">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Spring Security Authorization Course &mdash; Construído para engenheiros que querem dominar segurança
          </p>
        </div>
      </footer>
    </div>
  );
}
