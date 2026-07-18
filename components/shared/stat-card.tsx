import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { StatCardData } from "@/types";

const trendStyles = {
  up: "text-success",
  down: "text-destructive",
  flat: "text-muted-foreground",
} as const;

const trendIcons = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  flat: Minus,
} as const;

export function StatCard({ label, value, delta, trend = "flat", icon: Icon }: StatCardData) {
  const TrendIcon = trendIcons[trend];

  return (
    <Card>
      <CardContent className="flex items-start justify-between gap-4 p-5">
        <div className="space-y-1.5">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="font-display text-2xl font-semibold tracking-tight">
            {value}
          </p>
          {delta ? (
            <div
              className={cn(
                "flex items-center gap-1 text-xs font-medium",
                trendStyles[trend]
              )}
            >
              <TrendIcon className="h-3.5 w-3.5" />
              <span>{delta}</span>
            </div>
          ) : null}
        </div>
        {Icon ? (
          <div className="rounded-md bg-signal/10 p-2 text-signal">
            <Icon className="h-4 w-4" />
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
