/*
 * ─── Shield Blueprint Theme ───
 * TopicCard: Expandable card with rich content, code examples, warnings, references
 * Dark navy bg, emerald wireframe lines, amber accents
 */

import type { Topic, CodeExample } from "@/lib/courseData";
import {
  BookOpen,
  Code2,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  ExternalLink,
  Copy,
  Check,
  Terminal,
  FileText,
} from "lucide-react";
import { useState, useCallback } from "react";
import { Highlight, themes } from "prism-react-renderer";

interface TopicCardProps {
  topic: Topic;
  index: number;
  accentColor: "emerald" | "amber";
}

function CodeBlock({ example, accentColor }: { example: CodeExample; accentColor: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [example.code]);

  const langMap: Record<string, string> = {
    java: "java",
    xml: "markup",
    yaml: "yaml",
    properties: "properties",
    sql: "sql",
    bash: "bash",
  };

  return (
    <div className="rounded-lg overflow-hidden border border-border/30 bg-[#0d1117]">
      {/* Code header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-border/20">
        <div className="flex items-center gap-2">
          <Terminal size={12} className={accentColor === "emerald" ? "text-primary/70" : "text-accent/70"} />
          <span className="font-mono text-xs text-muted-foreground">{example.title}</span>
          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-muted/30 text-muted-foreground/60 uppercase">
            {example.language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          title="Copiar código"
        >
          {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <Highlight
          theme={themes.nightOwl}
          code={example.code.trim()}
          language={langMap[example.language] || "java"}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} p-4 text-[13px] leading-relaxed`}
              style={{ ...style, background: "transparent", margin: 0 }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  <span className="table-cell pr-4 text-right text-muted-foreground/30 select-none font-mono text-[11px] w-8">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>

      {/* Explanation */}
      {example.explanation && (
        <div className="px-4 py-3 bg-[#161b22] border-t border-border/20">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className={`font-semibold ${accentColor === "emerald" ? "text-primary/80" : "text-accent/80"}`}>
              Explicação:
            </span>{" "}
            {example.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

export default function TopicCard({ topic, index, accentColor }: TopicCardProps) {
  const [expanded, setExpanded] = useState(false);

  const accentClasses =
    accentColor === "emerald"
      ? "hover:border-primary/50 hover:shadow-[0_0_20px_oklch(0.75_0.17_160/0.1)]"
      : "hover:border-accent/50 hover:shadow-[0_0_20px_oklch(0.78_0.17_70/0.1)]";

  const tagColor =
    accentColor === "emerald"
      ? "bg-primary/10 text-primary border-primary/20"
      : "bg-accent/10 text-accent border-accent/20";

  const numberColor = accentColor === "emerald" ? "text-primary/40" : "text-accent/40";

  return (
    <div
      className={`card-blueprint rounded-lg bg-card/50 backdrop-blur-sm ${accentClasses}`}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "float-up 0.6s ease-out forwards",
        opacity: 0,
      }}
    >
      {/* ─── Header (always visible) ─── */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <span className={`font-mono text-3xl font-bold ${numberColor} select-none shrink-0`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1">
            <h3 className="font-mono text-lg font-semibold text-foreground mb-2">{topic.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{topic.description}</p>

            {/* Concepts tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {topic.concepts.slice(0, expanded ? undefined : 5).map((concept) => (
                <span
                  key={concept}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium border ${tagColor}`}
                >
                  <Code2 size={10} />
                  {concept}
                </span>
              ))}
              {!expanded && topic.concepts.length > 5 && (
                <span className="text-xs text-muted-foreground self-center">
                  +{topic.concepts.length - 5} mais
                </span>
              )}
            </div>

            {/* Expand/collapse button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className={`flex items-center gap-1.5 text-sm font-mono transition-colors ${
                expanded
                  ? "text-foreground"
                  : accentColor === "emerald"
                    ? "text-primary hover:text-primary/80"
                    : "text-accent hover:text-accent/80"
              }`}
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? "Recolher conteúdo" : "Expandir conteúdo completo"}
            </button>
          </div>
        </div>
      </div>

      {/* ─── Expanded Content ─── */}
      {expanded && (
        <div className="border-t border-border/20">
          {/* Content / Explanation */}
          <div className="px-6 py-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText size={14} className={accentColor === "emerald" ? "text-primary" : "text-accent"} />
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Conteúdo Detalhado
              </h4>
            </div>
            <div className="prose-custom text-sm text-foreground/85 leading-relaxed space-y-4">
              {topic.content.split("\n\n").map((paragraph, i) => {
                // Handle bold text
                const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <p key={i} className="text-sm leading-relaxed">
                    {parts.map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong key={j} className={accentColor === "emerald" ? "text-primary font-semibold" : "text-accent font-semibold"}>
                            {part.slice(2, -2)}
                          </strong>
                        );
                      }
                      // Handle inline code
                      const codeParts = part.split(/(`[^`]+`)/g);
                      return codeParts.map((cp, k) => {
                        if (cp.startsWith("`") && cp.endsWith("`")) {
                          return (
                            <code key={`${j}-${k}`} className="px-1.5 py-0.5 rounded bg-muted/50 text-primary/90 font-mono text-xs">
                              {cp.slice(1, -1)}
                            </code>
                          );
                        }
                        return <span key={`${j}-${k}`}>{cp}</span>;
                      });
                    })}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Code Examples */}
          {topic.codeExamples.length > 0 && (
            <div className="px-6 py-6 border-t border-border/20">
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={14} className={accentColor === "emerald" ? "text-primary" : "text-accent"} />
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Exemplos de Código ({topic.codeExamples.length})
                </h4>
              </div>
              <div className="space-y-4">
                {topic.codeExamples.map((example, i) => (
                  <CodeBlock key={i} example={example} accentColor={accentColor} />
                ))}
              </div>
            </div>
          )}

          {/* Warnings */}
          {topic.warnings.length > 0 && (
            <div className="px-6 py-6 border-t border-border/20">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={14} className="text-amber-400" />
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-400/80">
                  Notas Importantes e Armadilhas
                </h4>
              </div>
              <div className="space-y-3">
                {topic.warnings.map((warning, i) => {
                  const parts = warning.split(": ");
                  const title = parts.length > 1 ? parts[0] : null;
                  const body = parts.length > 1 ? parts.slice(1).join(": ") : warning;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/15"
                    >
                      <span className="text-amber-400/60 mt-0.5 shrink-0 font-mono text-xs font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {title && (
                          <strong className="text-amber-400/90 font-semibold">{title}: </strong>
                        )}
                        {body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* References */}
          {topic.references.length > 0 && (
            <div className="px-6 py-6 border-t border-border/20">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={14} className={accentColor === "emerald" ? "text-primary" : "text-accent"} />
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Referências e Recursos
                </h4>
              </div>
              <div className="space-y-2">
                {topic.references.map((ref, i) => (
                  <a
                    key={i}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group no-underline"
                  >
                    <ExternalLink size={12} className="shrink-0 opacity-50 group-hover:opacity-100" />
                    <span className="group-hover:underline">{ref.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
