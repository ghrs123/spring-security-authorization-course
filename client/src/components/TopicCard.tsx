/*
 * ─── Shield Blueprint Theme ───
 * TopicCard: Expandable card with rich content, code examples, warnings,
 *            references, interactive QUIZ, and practical EXERCISES
 */

import type { Topic, CodeExample, QuizQuestion, Exercise, AntiPattern } from "@/lib/courseData";
import {
  BookOpen, Code2, ChevronDown, ChevronUp, AlertTriangle,
  ExternalLink, Copy, Check, Terminal, FileText, Brain,
  Dumbbell, ChevronRight, Eye, EyeOff, Trophy, XCircle, CheckCircle2,
  Target, Lightbulb, ShieldX,
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
    java: "java", xml: "markup", yaml: "yaml",
    properties: "properties", sql: "sql", bash: "bash",
  };

  return (
    <div className="rounded-lg overflow-hidden border border-border/30 bg-[#0d1117]">
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
        >
          {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
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
      {example.explanation && (
        <div className="px-4 py-3 bg-[#161b22] border-t border-border/20">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className={`font-semibold ${accentColor === "emerald" ? "text-primary/80" : "text-accent/80"}`}>
              Explicação:{" "}
            </span>
            {example.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

function OutcomesSection({ outcomes, accentColor }: { outcomes: string[]; accentColor: string }) {
  const accent = accentColor === "emerald" ? "text-primary" : "text-accent";
  const accentBg = accentColor === "emerald"
    ? "bg-primary/5 border-primary/15"
    : "bg-accent/5 border-accent/15";

  return (
    <div className="px-6 py-6 border-t border-border/20">
      <div className="flex items-center gap-2 mb-5">
        <Target size={14} className={accentColor === "emerald" ? "text-primary" : "text-accent"} />
        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Objetivos de Aprendizagem ({outcomes.length})
        </h4>
      </div>
      <ol className="space-y-3">
        {outcomes.map((outcome, i) => {
          const match = outcome.match(/^([A-Z]+)\s([\s\S]*)/);
          const verb = match ? match[1] : null;
          const body = match ? match[2] : outcome;
          return (
            <li key={i} className={`flex items-start gap-3 p-3 rounded-lg border ${accentBg}`}>
              <span className={`font-mono text-[10px] font-bold shrink-0 mt-0.5 ${accent}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {verb && (
                  <strong className={`font-mono font-bold mr-1 ${accent}`}>{verb}</strong>
                )}
                {body}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function WhenToUseSection({ items, accentColor }: { items: string[]; accentColor: string }) {
  const getItemStyle = (item: string) => {
    if (item.startsWith("✅")) return "border-green-500/20 bg-green-500/5 text-green-400/80";
    if (item.startsWith("❌")) return "border-red-500/20 bg-red-500/5 text-red-400/80";
    if (item.startsWith("⚖")) return "border-amber-500/20 bg-amber-500/5 text-amber-400/80";
    return "border-border/20 bg-muted/5 text-muted-foreground";
  };

  return (
    <div className="px-6 py-6 border-t border-border/20">
      <div className="flex items-center gap-2 mb-5">
        <Lightbulb size={14} className={accentColor === "emerald" ? "text-primary" : "text-accent"} />
        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Quando Usar Esta Técnica
        </h4>
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className={`px-3 py-2.5 rounded-lg border text-sm leading-relaxed ${getItemStyle(item)}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AntiPatternsSection({ patterns }: { patterns: AntiPattern[]; accentColor: string }) {
  return (
    <div className="px-6 py-6 border-t border-border/20">
      <div className="flex items-center gap-2 mb-5">
        <ShieldX size={14} className="text-red-400/80" />
        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Anti-Patterns Comuns ({patterns.length})
        </h4>
      </div>
      <div className="space-y-4">
        {patterns.map((p, i) => (
          <div key={i} className="rounded-lg border border-red-500/15 overflow-hidden">
            <div className="px-4 py-2.5 bg-red-500/5 border-b border-red-500/15 flex items-center gap-2">
              <span className="font-mono text-[10px] text-red-400/60 font-bold shrink-0">
                #{String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs font-semibold text-red-400/90">{p.title}</span>
            </div>
            <div className="px-4 py-3 space-y-2.5">
              <div>
                <span className="font-mono text-[10px] font-bold text-muted-foreground/50 uppercase tracking-wider">Problema</span>
                <p className="mt-1 text-sm text-foreground/75 leading-relaxed">{p.problem}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold text-amber-400/60 uppercase tracking-wider">Perigo</span>
                <p className="mt-1 text-sm text-amber-400/70 leading-relaxed">{p.danger}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold text-green-400/60 uppercase tracking-wider">Correção</span>
                <p className="mt-1 text-sm text-green-400/70 leading-relaxed">{p.fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuizSection({ quiz, accentColor }: { quiz: QuizQuestion[]; accentColor: string }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const accent = accentColor === "emerald" ? "text-primary" : "text-accent";
  const accentBg = accentColor === "emerald" ? "bg-primary/10 border-primary/20" : "bg-accent/10 border-accent/20";

  const score = Object.keys(revealed).filter(
    (i) => answers[Number(i)] === quiz[Number(i)].correctIndex
  ).length;

  const allRevealed = Object.keys(revealed).length === quiz.length;

  const handleAnswer = (qIndex: number, optIndex: number) => {
    if (revealed[qIndex]) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleReveal = (qIndex: number) => {
    setRevealed((prev) => ({ ...prev, [qIndex]: true }));
  };

  return (
    <div className="px-6 py-6 border-t border-border/20">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Brain size={14} className={accentColor === "emerald" ? "text-primary" : "text-accent"} />
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Quiz — Teste o seu conhecimento ({quiz.length} perguntas)
          </h4>
        </div>
        {allRevealed && (
          <div className="flex items-center gap-1.5">
            <Trophy size={12} className="text-amber-400" />
            <span className="font-mono text-xs text-amber-400 font-semibold">
              {score}/{quiz.length}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {quiz.map((q, qIdx) => {
          const selected = answers[qIdx];
          const isRevealed = revealed[qIdx];
          const isCorrect = selected === q.correctIndex;

          return (
            <div key={qIdx} className="rounded-lg border border-border/20 overflow-hidden">
              <div className="px-4 py-3 bg-muted/10">
                <p className="text-sm font-medium text-foreground/90 leading-relaxed">
                  <span className={`font-mono font-bold mr-2 ${accent}`}>Q{qIdx + 1}.</span>
                  {q.question}
                </p>
              </div>

              <div className="p-4 space-y-2">
                {q.options.map((opt, optIdx) => {
                  let optStyle = "border-border/20 hover:border-border/40 hover:bg-muted/5 cursor-pointer";
                  if (selected === optIdx && !isRevealed) {
                    optStyle = accentColor === "emerald"
                      ? "border-primary/40 bg-primary/5 cursor-pointer"
                      : "border-accent/40 bg-accent/5 cursor-pointer";
                  }
                  if (isRevealed) {
                    if (optIdx === q.correctIndex) {
                      optStyle = "border-green-500/40 bg-green-500/5 cursor-default";
                    } else if (selected === optIdx && selected !== q.correctIndex) {
                      optStyle = "border-red-500/40 bg-red-500/5 cursor-default";
                    } else {
                      optStyle = "border-border/10 opacity-40 cursor-default";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleAnswer(qIdx, optIdx)}
                      className={`w-full flex items-start gap-3 text-left px-3 py-2.5 rounded border transition-all ${optStyle}`}
                    >
                      <span className="font-mono text-xs text-muted-foreground/60 shrink-0 mt-0.5">
                        {String.fromCharCode(65 + optIdx)}.
                      </span>
                      <span className="text-sm text-foreground/80 flex-1 leading-relaxed">{opt}</span>
                      {isRevealed && optIdx === q.correctIndex && (
                        <CheckCircle2 size={14} className="text-green-400 shrink-0 mt-0.5" />
                      )}
                      {isRevealed && selected === optIdx && selected !== q.correctIndex && (
                        <XCircle size={14} className="text-red-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="px-4 pb-4">
                {selected !== undefined && !isRevealed && (
                  <button
                    onClick={() => handleReveal(qIdx)}
                    className={`text-xs font-mono flex items-center gap-1 transition-colors ${accent} hover:opacity-80`}
                  >
                    <Eye size={11} /> Ver resposta
                  </button>
                )}
                {isRevealed && (
                  <div className={`rounded-lg px-3 py-2.5 border ${accentBg}`}>
                    <div className="flex items-center gap-1.5 mb-1">
                      {isCorrect
                        ? <CheckCircle2 size={12} className="text-green-400" />
                        : <XCircle size={12} className="text-red-400" />}
                      <span className={`font-mono text-xs font-semibold ${isCorrect ? "text-green-400" : "text-red-400"}`}>
                        {isCorrect ? "Correto!" : "Incorreto"}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/75 leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ExerciseSection({ exercises, accentColor }: { exercises: Exercise[]; accentColor: string }) {
  const [openExercise, setOpenExercise] = useState<number | null>(null);
  const [showHint, setShowHint] = useState<Record<number, boolean>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

  const accent = accentColor === "emerald" ? "text-primary" : "text-accent";
  const accentBorder = accentColor === "emerald" ? "border-primary/30" : "border-accent/30";

  const difficultyBadge: Record<string, string> = {
    "iniciante": "bg-green-500/10 text-green-400 border-green-500/20",
    "intermediário": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "avançado": "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <div className="px-6 py-6 border-t border-border/20">
      <div className="flex items-center gap-2 mb-5">
        <Dumbbell size={14} className={accentColor === "emerald" ? "text-primary" : "text-accent"} />
        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Exercícios Práticos ({exercises.length})
        </h4>
      </div>

      <div className="space-y-3">
        {exercises.map((ex, idx) => {
          const isOpen = openExercise === idx;

          return (
            <div key={idx} className={`rounded-lg border ${isOpen ? accentBorder : "border-border/20"} overflow-hidden transition-colors`}>
              <button
                onClick={() => setOpenExercise(isOpen ? null : idx)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/5 transition-colors"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`font-mono text-xs font-bold ${accent}`}>#{idx + 1}</span>
                  <span className="text-sm font-medium text-foreground/90">{ex.title}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded border font-medium ${difficultyBadge[ex.difficulty]}`}>
                    {ex.difficulty}
                  </span>
                </div>
                {isOpen
                  ? <ChevronUp size={14} className="text-muted-foreground shrink-0" />
                  : <ChevronDown size={14} className="text-muted-foreground shrink-0" />}
              </button>

              {isOpen && (
                <div className="border-t border-border/20">
                  <div className="px-4 py-4">
                    <pre className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap font-sans">
                      {ex.description}
                    </pre>
                  </div>

                  {ex.hint && (
                    <div className="px-4 pb-3">
                      <button
                        onClick={() => setShowHint((p) => ({ ...p, [idx]: !p[idx] }))}
                        className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors font-mono"
                      >
                        {showHint[idx] ? <EyeOff size={11} /> : <Eye size={11} />}
                        {showHint[idx] ? "Ocultar dica" : "Ver dica"}
                      </button>
                      {showHint[idx] && (
                        <div className="mt-2 px-3 py-2 rounded-lg bg-amber-500/5 border border-amber-500/15">
                          <p className="text-xs text-amber-300/80 leading-relaxed">💡 {ex.hint}</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="px-4 pb-4">
                    <button
                      onClick={() => setShowSolution((p) => ({ ...p, [idx]: !p[idx] }))}
                      className={`flex items-center gap-1.5 text-xs font-mono transition-colors ${accent} hover:opacity-80`}
                    >
                      <ChevronRight
                        size={11}
                        className={showSolution[idx] ? "rotate-90 transition-transform" : "transition-transform"}
                      />
                      {showSolution[idx] ? "Ocultar solução" : "Ver solução"}
                    </button>
                    {showSolution[idx] && (
                      <div className="mt-3">
                        <CodeBlock
                          example={{
                            title: "Solução",
                            language: ex.solutionLanguage,
                            code: ex.solution,
                            explanation: "",
                          }}
                          accentColor={accentColor}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function renderContent(content: string, accentColor: string) {
  return content.split("\n\n").map((paragraph, i) => {
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-sm leading-relaxed">
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={j} className={`font-semibold ${accentColor === "emerald" ? "text-primary" : "text-accent"}`}>
                {part.slice(2, -2)}
              </strong>
            );
          }
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
  });
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

  const hasQuiz = topic.quiz && topic.quiz.length > 0;
  const hasExercises = topic.exercises && topic.exercises.length > 0;
  const hasOutcomes = topic.outcomes && topic.outcomes.length > 0;
  const hasWhenToUse = topic.whenToUse && topic.whenToUse.length > 0;
  const hasAntiPatterns = topic.antiPatterns && topic.antiPatterns.length > 0;

  return (
    <div
      className={`card-blueprint rounded-lg bg-card/50 backdrop-blur-sm ${accentClasses}`}
      style={{ animationDelay: `${index * 100}ms`, animation: "float-up 0.6s ease-out forwards", opacity: 0 }}
    >
      {/* ─── Header ─── */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <span className={`font-mono text-3xl font-bold ${numberColor} select-none shrink-0`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1">
            <h3 className="font-mono text-lg font-semibold text-foreground mb-2">{topic.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{topic.description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
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
                <span className="text-xs text-muted-foreground self-center">+{topic.concepts.length - 5} mais</span>
              )}
            </div>

            {/* Feature badges */}
            {(hasQuiz || hasExercises || hasOutcomes || hasWhenToUse || hasAntiPatterns) && (
              <div className="flex items-center gap-3 mb-4">
                {hasWhenToUse && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground/50 border border-border/20 rounded px-2 py-0.5">
                    <Lightbulb size={9} /> guia de uso
                  </span>
                )}
                {hasOutcomes && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground/50 border border-border/20 rounded px-2 py-0.5">
                    <Target size={9} /> {topic.outcomes!.length} objetivos
                  </span>
                )}
                {hasQuiz && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground/50 border border-border/20 rounded px-2 py-0.5">
                    <Brain size={9} /> {topic.quiz!.length} perguntas
                  </span>
                )}
                {hasExercises && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground/50 border border-border/20 rounded px-2 py-0.5">
                    <Dumbbell size={9} /> {topic.exercises!.length} exercício{topic.exercises!.length > 1 ? "s" : ""}
                  </span>
                )}
                {hasAntiPatterns && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground/50 border border-border/20 rounded px-2 py-0.5">
                    <ShieldX size={9} /> {topic.antiPatterns!.length} anti-patterns
                  </span>
                )}
              </div>
            )}

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
          {/* Content */}
          <div className="px-6 py-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText size={14} className={accentColor === "emerald" ? "text-primary" : "text-accent"} />
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Conteúdo Detalhado
              </h4>
            </div>
            <div className="space-y-4 text-foreground/85">
              {renderContent(topic.content, accentColor)}
            </div>
          </div>

          {/* Outcomes */}
          {hasOutcomes && (
            <OutcomesSection outcomes={topic.outcomes!} accentColor={accentColor} />
          )}

          {/* When To Use */}
          {hasWhenToUse && (
            <WhenToUseSection items={topic.whenToUse!} accentColor={accentColor} />
          )}

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
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/15">
                      <span className="text-amber-400/60 mt-0.5 shrink-0 font-mono text-xs font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {title && <strong className="text-amber-400/90 font-semibold">{title}: </strong>}
                        {body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Anti-Patterns */}
          {hasAntiPatterns && (
            <AntiPatternsSection patterns={topic.antiPatterns!} accentColor={accentColor} />
          )}

          {/* Quiz */}
          {hasQuiz && <QuizSection quiz={topic.quiz!} accentColor={accentColor} />}

          {/* Exercises */}
          {hasExercises && <ExerciseSection exercises={topic.exercises!} accentColor={accentColor} />}

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
