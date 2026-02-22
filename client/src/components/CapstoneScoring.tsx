/*
 * ─── Shield Blueprint Theme ───
 * CapstoneScoring: Rubrica de avaliação do Capstone com checkboxes e exportação JSON
 */

import type { CapstoneRubricData, CapstoneCategory, CapstoneCriterion } from "@/lib/capstoneRubric";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "capstone-rubric-checked";

interface CapstoneScoringProps {
  rubric: CapstoneRubricData;
  accentColor: "emerald" | "amber";
}

export default function CapstoneScoring({ rubric, accentColor }: CapstoneScoringProps) {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const arr = JSON.parse(raw) as string[];
        return new Set(Array.isArray(arr) ? arr : []);
      }
    } catch {
      // ignore
    }
    return new Set();
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checkedIds)));
    } catch {
      // ignore
    }
  }, [checkedIds]);

  const toggleCriterion = useCallback((id: string) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const { categoryScores, totalScore } = useMemo(() => {
    const scores: Record<string, number> = {};
    let total = 0;
    rubric.categories.forEach((cat) => {
      const catScore = cat.criteria
        .filter((c) => checkedIds.has(c.id))
        .reduce((sum, c) => sum + c.points, 0);
      scores[cat.id] = catScore;
      total += catScore;
    });
    return { categoryScores: scores, totalScore: total };
  }, [rubric, checkedIds]);

  const handleExport = useCallback(() => {
    const checkedCriteria: { id: string; categoryId: string; description: string; evidence: string; points: number }[] = [];
    rubric.categories.forEach((cat) => {
      cat.criteria
        .filter((c) => checkedIds.has(c.id))
        .forEach((c) => {
          checkedCriteria.push({
            id: c.id,
            categoryId: cat.id,
            description: c.description,
            evidence: c.evidence,
            points: c.points
          });
        });
    });
    const payload = {
      checkedCriteria,
      categoryScores: categoryScores,
      totalScore,
      maxScore: rubric.totalPoints,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `capstone-evaluation-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [rubric, checkedIds, categoryScores, totalScore]);

  const accentBorder = accentColor === "emerald" ? "border-primary/20" : "border-accent/20";
  const accentText = accentColor === "emerald" ? "text-primary" : "text-accent";
  const accentBg = accentColor === "emerald" ? "bg-primary/5" : "bg-accent/5";

  return (
    <div className={`rounded-lg border ${accentBorder} bg-card/50 backdrop-blur-sm overflow-hidden`}>
      <div className="px-6 py-4 border-b border-border/20 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <FileText size={18} className={accentColor === "emerald" ? "text-primary" : "text-accent"} />
          <h2 className="font-mono text-lg font-semibold text-foreground">Rubrica de avaliação</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">
            Total: <span className={`font-semibold ${accentText}`}>{totalScore}</span>
            <span className="text-muted-foreground/70"> / {rubric.totalPoints}</span>
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            className="gap-2"
          >
            <Download size={14} />
            Exportar avaliação
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {rubric.categories.map((category) => (
          <CategoryBlock
            key={category.id}
            category={category}
            checkedIds={checkedIds}
            categoryScore={categoryScores[category.id] ?? 0}
            onToggle={toggleCriterion}
            accentColor={accentColor}
            accentText={accentText}
            accentBg={accentBg}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryBlock({
  category,
  checkedIds,
  categoryScore,
  onToggle,
  accentColor,
  accentText,
  accentBg
}: {
  category: CapstoneCategory;
  checkedIds: Set<string>;
  categoryScore: number;
  onToggle: (id: string) => void;
  accentColor: "emerald" | "amber";
  accentText: string;
  accentBg: string;
}) {
  return (
    <div className={`rounded-lg border border-border/30 ${accentBg} p-4`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-mono text-sm font-semibold text-foreground">{category.title}</h3>
        <span className="font-mono text-xs text-muted-foreground">
          <span className={accentText}>{categoryScore}</span>
          <span className="text-muted-foreground/70"> / {category.points}</span>
        </span>
      </div>
      <ul className="space-y-3">
        {category.criteria.map((criterion) => (
          <CriterionRow
            key={criterion.id}
            criterion={criterion}
            checked={checkedIds.has(criterion.id)}
            onToggle={() => onToggle(criterion.id)}
            accentColor={accentColor}
          />
        ))}
      </ul>
    </div>
  );
}

function CriterionRow({
  criterion,
  checked,
  onToggle,
  accentColor
}: {
  criterion: CapstoneCriterion;
  checked: boolean;
  onToggle: () => void;
  accentColor: "emerald" | "amber";
}) {
  return (
    <li className="flex gap-3 items-start">
      <div className="flex items-center gap-2 shrink-0 pt-0.5">
        <Checkbox
          id={criterion.id}
          checked={checked}
          onCheckedChange={() => onToggle()}
          aria-label="Evidência fornecida"
        />
        <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
          Evidência fornecida
        </span>
      </div>
      <label
        htmlFor={criterion.id}
        className="flex-1 cursor-pointer text-sm leading-relaxed"
      >
        <span className="font-medium text-foreground/90">{criterion.description}</span>
        <span className="block text-xs text-muted-foreground mt-1">{criterion.evidence}</span>
        <span className={`inline-block mt-1 font-mono text-[10px] ${accentColor === "emerald" ? "text-primary/80" : "text-accent/80"}`}>
          {criterion.points} pts
        </span>
      </label>
    </li>
  );
}
