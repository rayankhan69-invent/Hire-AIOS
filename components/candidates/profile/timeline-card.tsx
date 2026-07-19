import { UserPlus, FileText, CalendarClock, Sparkles, MessageSquare, type LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { CandidateProfile, TimelineEvent } from "@/lib/mock/candidate-profile";

const iconMap: Record<TimelineEvent["kind"], LucideIcon> = {
  application: UserPlus,
  resume: FileText,
  interview: CalendarClock,
  ai: Sparkles,
  note: MessageSquare,
};

const styleMap: Record<TimelineEvent["kind"], string> = {
  application: "bg-secondary text-secondary-foreground",
  resume: "bg-secondary text-secondary-foreground",
  interview: "bg-signal/10 text-signal",
  ai: "bg-spark/15 text-spark",
  note: "bg-secondary text-secondary-foreground",
};

export function TimelineCard({ profile }: { profile: CandidateProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Timeline</CardTitle>
        <CardDescription>Everything that has happened with this application.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-5">
          {profile.timeline.map((event, index) => {
            const Icon = iconMap[event.kind];
            const isLast = index === profile.timeline.length - 1;
            return (
              <li key={event.id} className="relative flex gap-3">
                {!isLast ? (
                  <span
                    className="absolute left-4 top-8 h-[calc(100%-0.5rem)] w-px -translate-x-1/2 bg-border"
                    aria-hidden
                  />
                ) : null}
                <span
                  className={cn(
                    "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    styleMap[event.kind]
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="space-y-0.5 pb-1">
                  <p className="text-sm font-medium">{event.label}</p>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <p className="text-xs text-muted-foreground">{event.timestamp}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
