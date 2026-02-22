/*
 * SEO page: Lista de exercícios
 */

import Navbar from "@/components/Navbar";
import SeoFooterLinks from "@/components/SeoFooterLinks";
import { usePageMeta } from "@/hooks/usePageMeta";
import { levels } from "@/lib/courseData";
import { Dumbbell, Link2 } from "lucide-react";
import { Link } from "wouter";

const META = {
  title: "Exercícios — Spring Security Authorization (Method Security, filter chain, testes)",
  description:
    "Lista de exercícios práticos do curso: configuração SecurityFilterChain, @PreAuthorize, AuthorizationManager, testes 401/403, multi-tenant. Dificuldade iniciante a avançado.",
  path: "/exercises",
};

export default function ExercisesPage() {
  usePageMeta(META);

  const topicsWithExercises = levels.flatMap((level) =>
    level.topics
      .filter((t) => t.exercises && t.exercises.length > 0)
      .map((topic) => ({ level, topic }))
  );

  const totalExercises = topicsWithExercises.reduce(
    (acc, { topic }) => acc + (topic.exercises?.length ?? 0),
    0
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <header className="mb-12">
            <h1 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Lista de exercícios
            </h1>
            <p className="text-muted-foreground text-lg">
              Exercícios práticos por tópico: desde configuração básica até Method Security, testes de autorização e cenários multi-tenant.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Total: <strong className="text-foreground">{totalExercises}</strong> exercícios em{" "}
              <strong className="text-foreground">{topicsWithExercises.length}</strong> tópicos.
            </p>
          </header>

          <section className="space-y-6" aria-labelledby="exercises-heading">
            <h2 id="exercises-heading" className="font-mono text-xl font-semibold text-foreground border-b border-border/40 pb-2">
              Exercícios por lição
            </h2>
            {topicsWithExercises.length === 0 ? (
              <p className="text-muted-foreground">Nenhum exercício listado.</p>
            ) : (
              <ul className="space-y-4">
                {topicsWithExercises.map(({ level, topic }) => (
                  <li key={`${level.id}-${topic.id}`} className="rounded-lg border border-border/30 bg-card/40 p-4">
                    <h3 className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                      <Dumbbell size={16} className="text-primary/80" />
                      Nível {level.id}: {topic.title}
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {(topic.exercises ?? []).map((ex, i) => (
                        <li key={i}>{ex.title} <span className="text-xs">({ex.difficulty})</span></li>
                      ))}
                    </ul>
                    <Link
                      href={`/level/${level.id}#topic-${topic.id}`}
                      className="inline-block mt-3 text-sm text-primary hover:underline"
                    >
                      Abrir exercícios na lição →
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mt-14 pt-10 border-t border-border/30" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-mono text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Link2 size={18} /> Páginas relacionadas
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="/curriculum" className="text-primary hover:underline">Grade curricular</Link></li>
              <li><Link href="/capstone" className="text-primary hover:underline">Projeto final</Link></li>
              <li><Link href="/diagrams" className="text-primary hover:underline">Diagramas</Link></li>
              <li><Link href="/blog" className="text-primary hover:underline">Blog</Link></li>
            </ul>
          </section>

          <footer className="mt-16 pt-8 border-t border-border/20">
            <SeoFooterLinks />
            <p className="text-center text-xs text-muted-foreground mt-4">
              Spring Security Authorization Course
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
