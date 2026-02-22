/*
 * SEO page: Galeria de diagramas
 */

import Navbar from "@/components/Navbar";
import SeoFooterLinks from "@/components/SeoFooterLinks";
import { usePageMeta } from "@/hooks/usePageMeta";
import { levels } from "@/lib/courseData";
import { GitBranch, Link2 } from "lucide-react";
import { Link } from "wouter";

const META = {
  title: "Diagramas — Spring Security Authorization",
  description:
    "Galeria de diagramas do curso: filter chain Servlet, AuthorizationFilter e AuthorizationManager, SecurityContext, Method Security AOP.",
  path: "/diagrams",
};

export default function DiagramsPage() {
  usePageMeta(META);

  const items: { levelId: number; topicId: string; topicTitle: string; diagramTitle: string }[] = [];
  levels.forEach((level) => {
    level.topics.forEach((topic) => {
      (topic.diagrams ?? []).forEach((d) => {
        items.push({
          levelId: level.id,
          topicId: topic.id,
          topicTitle: topic.title,
          diagramTitle: d.title,
        });
      });
    });
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <header className="mb-12">
            <h1 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Galeria de diagramas
            </h1>
            <p className="text-muted-foreground text-lg">
              Diagramas que mostram o caminho da decisão de autorização no Spring Security 6.
            </p>
          </header>

          <section className="space-y-8" aria-labelledby="diagrams-heading">
            <h2 id="diagrams-heading" className="font-mono text-xl font-semibold text-foreground border-b border-border/40 pb-2">
              Diagramas por lição
            </h2>
            {items.length === 0 ? (
              <p className="text-muted-foreground">Nenhum diagrama disponível.</p>
            ) : (
              <ul className="space-y-4">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg border border-border/30 bg-card/40 p-4">
                    <GitBranch size={20} className="text-primary/80 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-mono text-sm font-semibold text-foreground">{item.diagramTitle}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Nível {item.levelId}: {item.topicTitle}
                      </p>
                      <Link href={"/level/" + item.levelId + "#topic-" + item.topicId} className="inline-block mt-2 text-sm text-primary hover:underline">
                        Ver na lição
                      </Link>
                    </div>
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
              <li><Link href="/exercises" className="text-primary hover:underline">Exercícios</Link></li>
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
