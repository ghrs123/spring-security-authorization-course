/*
 * SEO page: Grade curricular completa
 */

import Navbar from "@/components/Navbar";
import SeoFooterLinks from "@/components/SeoFooterLinks";
import { usePageMeta } from "@/hooks/usePageMeta";
import { levels } from "@/lib/courseData";
import { BookOpen, ChevronRight, Link2 } from "lucide-react";
import { Link } from "wouter";

const META = {
  title: "Grade curricular — Spring Security Authorization",
  description:
    "Grade completa do curso de autorização no Spring Security 6: fundamentos, ferramentas, arquitetura interna, design e testes, capstone multi-tenant. Níveis, tópicos e conceitos.",
  path: "/curriculum",
};

export default function CurriculumPage() {
  usePageMeta(META);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <header className="mb-12">
            <h1 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Grade curricular
            </h1>
            <p className="text-muted-foreground text-lg">
              Percurso completo do curso de autorização no Spring Security 6, do básico ao avançado.
            </p>
          </header>

          <section className="space-y-10" aria-labelledby="levels-heading">
            <h2 id="levels-heading" className="font-mono text-xl font-semibold text-foreground border-b border-border/40 pb-2">
              Níveis e tópicos
            </h2>
            {levels.map((level) => (
              <article key={level.id} className="rounded-lg border border-border/30 bg-card/40 p-6">
                <h3 className="font-mono text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                  <BookOpen size={18} className="text-primary/80" />
                  Nível {level.id}: {level.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{level.subtitle} — {level.description}</p>
                <ul className="space-y-2 mb-4">
                  {level.topics.map((topic) => (
                    <li key={topic.id} className="flex items-center gap-2 text-sm text-foreground/90">
                      <ChevronRight size={14} className="text-primary/60 shrink-0" />
                      {topic.title}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/level/${level.id}`}
                  className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline"
                >
                  Ver nível <ChevronRight size={14} />
                </Link>
              </article>
            ))}
          </section>

          <section className="mt-14 pt-10 border-t border-border/30" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-mono text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Link2 size={18} /> Páginas relacionadas
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="/capstone" className="text-primary hover:underline">Projeto final (Capstone)</Link></li>
              <li><Link href="/diagrams" className="text-primary hover:underline">Galeria de diagramas</Link></li>
              <li><Link href="/exercises" className="text-primary hover:underline">Lista de exercícios</Link></li>
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
