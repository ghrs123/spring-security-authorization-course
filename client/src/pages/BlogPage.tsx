/*
 * SEO page: Blog (scaffold com 6 posts placeholder)
 */

import Navbar from "@/components/Navbar";
import SeoFooterLinks from "@/components/SeoFooterLinks";
import { usePageMeta } from "@/hooks/usePageMeta";
import { FileText, Link2 } from "lucide-react";
import { Link } from "wouter";

const META = {
  title: "Blog — Spring Security Authorization (artigos e tutoriais)",
  description:
    "Artigos sobre Spring Security 6: AuthorizationFilter, AuthorizationManager, 401 vs 403, SecurityFilterChain, Method Security, multi-tenant. Content marketing e ponte para o curso.",
  path: "/blog",
};

const BLOG_POSTS: { slug: string; title: string }[] = [
  { slug: "authorization-filter-authorization-manager", title: "Spring Security 6 AuthorizationFilter + AuthorizationManager explicado com diagramas" },
  { slug: "401-vs-403-spring-security", title: "401 vs 403 no Spring Security: como configurar EntryPoint e AccessDeniedHandler" },
  { slug: "multiple-security-filter-chain", title: "Multiple SecurityFilterChain: quando usar e os erros mais comuns" },
  { slug: "roles-authorities-permissions", title: "Roles vs Authorities vs Permissions: modelo de autorização que escala" },
  { slug: "method-security-preauthorize", title: "Method Security (@PreAuthorize): boas práticas e anti-patterns" },
  { slug: "multi-tenant-authorization-spring-boot", title: "Multi-tenant authorization em Spring Boot: tenant isolation + ownership" },
];

export default function BlogPage() {
  usePageMeta(META);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <header className="mb-12">
            <h1 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Blog
            </h1>
            <p className="text-muted-foreground text-lg">
              Artigos e tutoriais sobre autorização no Spring Security 6. Cada post é uma ponte para o curso.
            </p>
          </header>

          <section className="space-y-6" aria-labelledby="posts-heading">
            <h2 id="posts-heading" className="font-mono text-xl font-semibold text-foreground border-b border-border/40 pb-2">
              Artigos
            </h2>
            <ul className="space-y-4">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug} className="flex items-start gap-3 rounded-lg border border-border/30 bg-card/40 p-4">
                  <FileText size={20} className="text-primary/80 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-mono text-sm font-semibold text-foreground">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Em breve.
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block mt-2 text-sm text-primary hover:underline"
                    >
                      Ler mais
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 pt-10 border-t border-border/30" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-mono text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Link2 size={18} /> Páginas relacionadas
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="/curriculum" className="text-primary hover:underline">Grade curricular</Link></li>
              <li><Link href="/capstone" className="text-primary hover:underline">Projeto final</Link></li>
              <li><Link href="/diagrams" className="text-primary hover:underline">Diagramas</Link></li>
              <li><Link href="/exercises" className="text-primary hover:underline">Exercícios</Link></li>
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
