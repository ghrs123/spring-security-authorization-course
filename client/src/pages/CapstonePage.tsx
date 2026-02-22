/*
 * SEO page: Projeto final (Capstone)
 */

import Navbar from "@/components/Navbar";
import SeoFooterLinks from "@/components/SeoFooterLinks";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link2 } from "lucide-react";
import { Link } from "wouter";

const META = {
  title: "Projeto final (Capstone) — Spring Security Authorization",
  description:
    "Projeto final do curso: arquitetura de autorização multi-tenant em Spring Boot. Global Admin, Tenant Admin, ownership, RBAC e testes. Rubrica de avaliação e evidências.",
  path: "/capstone",
};

export default function CapstonePage() {
  usePageMeta(META);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <header className="mb-12">
            <h1 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Projeto final (Capstone)
            </h1>
            <p className="text-muted-foreground text-lg">
              Síntese do curso: desenhar e implementar autorização para uma aplicação SaaS multi-tenant com Spring Security 6.
            </p>
          </header>

          <section className="space-y-6" aria-labelledby="objetivos-heading">
            <h2 id="objetivos-heading" className="font-mono text-xl font-semibold text-foreground border-b border-border/40 pb-2">
              Objetivos do capstone
            </h2>
            <p className="text-muted-foreground">
              O projeto final integra SecurityFilterChain, Method Security, AuthorizationManager, isolamento por tenant e ownership.
              A rubrica de avaliação (100 pontos) cobre arquitetura, implementação, multi-tenant, testes e documentação.
            </p>
            <h3 className="font-mono text-lg font-semibold text-foreground mt-6">
              Onde fazer o capstone
            </h3>
            <p className="text-muted-foreground">
              A rubrica está na página do Nível 4 — Capstone Project. Aceda pelo menu ou pela grade curricular.
            </p>
            <Link
              href="/level/4"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded border border-primary/30 bg-primary/5 text-primary font-mono text-sm hover:bg-primary/10 transition-colors no-underline"
            >
              Ir para o Nível 4 (Capstone)
            </Link>
          </section>

          <section className="mt-14 pt-10 border-t border-border/30" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-mono text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Link2 size={18} /> Páginas relacionadas
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="/curriculum" className="text-primary hover:underline">Grade curricular</Link></li>
              <li><Link href="/diagrams" className="text-primary hover:underline">Diagramas</Link></li>
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
