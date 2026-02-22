/*
 * Internal links block for SEO pages (curriculum, capstone, diagrams, exercises, blog)
 */

import { Link } from "wouter";

const SEO_LINKS = [
  { href: "/", label: "Início" },
  { href: "/curriculum", label: "Grade curricular" },
  { href: "/capstone", label: "Projeto final" },
  { href: "/diagrams", label: "Diagramas" },
  { href: "/exercises", label: "Exercícios" },
  { href: "/blog", label: "Blog" },
] as const;

export default function SeoFooterLinks() {
  return (
    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" aria-label="Navegação do site">
      {SEO_LINKS.map(({ href, label }) => (
        <Link key={href} href={href} className="text-muted-foreground hover:text-primary transition-colors no-underline">
          {label}
        </Link>
      ))}
    </nav>
  );
}
