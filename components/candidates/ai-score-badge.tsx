import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

function scoreStyles(score: number) {
  if (score >= 85) return "bg-success/15 text-success";
  if (score >= 65) return "bg-signal/10 text-signal";
  return "bg-destructive/10 text-destructive";
}

export function AiScoreBadge({ score }: { score: number }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-xs font-medium",
        scoreStyles(score)
      )}
    >
      <Sparkles className="h-3 w-3" />
      {score}%
    </span>
  );
}
