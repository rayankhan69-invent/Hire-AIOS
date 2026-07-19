import { Video } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { StatusChip } from "@/components/shared/status-chip";
import type { InterviewStatus, UpcomingInterview } from "@/lib/mock/dashboard";

const statusConfig: Record<InterviewStatus, { label: string; variant: "success" | "warning" | "neutral" }> = {
  confirmed: { label: "Confirmed", variant: "success" },
  pending: { label: "Pending", variant: "warning" },
  rescheduled: { label: "Rescheduled", variant: "neutral" },
};

export function UpcomingInterviews({ items }: { items: UpcomingInterview[] }) {
  return (
    <ul className="divide-y divide-border">
      {items.map((interview) => {
        const status = statusConfig[interview.status];
        return (
          <li key={interview.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
            <Avatar className="h-9 w-9 shrink-0">
              <AvatarFallback>{interview.candidateInitials}</AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-medium">{interview.candidateName}</p>
                <StatusChip label={status.label} variant={status.variant} className="shrink-0" />
              </div>
              <p className="truncate text-xs text-muted-foreground">
                {interview.round} · {interview.role}
              </p>
              <div className="flex items-center justify-between gap-2 pt-1">
                <p className="text-xs font-medium text-foreground">{interview.time}</p>
                {interview.status === "confirmed" ? (
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-primary hover:bg-primary/10">
                    <Video className="h-3.5 w-3.5" />
                    Join
                  </Button>
                ) : null}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
