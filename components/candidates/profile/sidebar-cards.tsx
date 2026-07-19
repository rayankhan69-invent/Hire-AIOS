import { Mail, Phone, MapPin, CalendarDays, UserRound, Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StatusChip } from "@/components/shared/status-chip";
import { cn } from "@/lib/utils";
import type { CandidateProfile } from "@/lib/mock/candidate-profile";
import { getCandidateRecruiter } from "@/lib/mock/candidates";

function formatAppliedDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(
    new Date(iso)
  );
}

export function ProfileInfoCard({ profile }: { profile: CandidateProfile }) {
  const recruiter = getCandidateRecruiter(profile.candidate);

  const rows = [
    { icon: Mail, label: profile.email },
    { icon: Phone, label: profile.phone },
    { icon: MapPin, label: profile.location },
    { icon: CalendarDays, label: `Applied ${formatAppliedDate(profile.candidate.dateApplied)}` },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Contact details and application info.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2.5">
          {rows.map((row) => (
            <li key={row.label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <row.icon className="h-4 w-4 shrink-0 text-muted-foreground/70" />
              <span className="truncate">{row.label}</span>
            </li>
          ))}
        </ul>

        {recruiter ? (
          <div className="flex items-center gap-2.5 border-t border-border pt-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">{recruiter.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-medium leading-tight">{recruiter.name}</p>
              <p className="text-xs leading-tight text-muted-foreground">Recruiter · {recruiter.title}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 border-t border-border pt-4 text-sm text-muted-foreground">
            <UserRound className="h-4 w-4" />
            No recruiter assigned
          </div>
        )}
      </CardContent>
    </Card>
  );
}

const scoreRows: { key: keyof CandidateProfile["scoreBreakdown"]; label: string }[] = [
  { key: "skillsMatch", label: "Skills match" },
  { key: "experienceMatch", label: "Experience match" },
  { key: "cultureFit", label: "Culture fit" },
];

function scoreColor(score: number) {
  if (score >= 85) return "bg-success";
  if (score >= 65) return "bg-signal";
  return "bg-destructive";
}

export function AiScoreCard({ profile }: { profile: CandidateProfile }) {
  const overall = profile.candidate.aiScore;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-1.5">
          <Sparkles className="h-4 w-4 text-spark" />
          AI score
        </CardTitle>
        <CardDescription>How well this candidate matches {profile.position}.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-4xl font-semibold tracking-tight">{overall}%</span>
          <span className="text-xs text-muted-foreground">overall match</span>
        </div>

        <div className="space-y-3">
          {scoreRows.map((row) => {
            const value = profile.scoreBreakdown[row.key];
            return (
              <div key={row.key} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-mono font-medium">{value}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn("h-full rounded-full", scoreColor(value))}
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

const roundStatusVariant = {
  Upcoming: "info",
  Completed: "success",
  Cancelled: "error",
} as const;

export function InterviewStatusCard({ profile }: { profile: CandidateProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Interview status</CardTitle>
        <CardDescription>Rounds scheduled for this candidate.</CardDescription>
      </CardHeader>
      <CardContent>
        {profile.interviewRounds.length === 0 ? (
          <p className="text-sm text-muted-foreground">No interviews scheduled yet.</p>
        ) : (
          <ul className="space-y-4">
            {profile.interviewRounds.map((round) => (
              <li key={round.id} className="space-y-1.5 border-l-2 border-border pl-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium">{round.round}</p>
                  <StatusChip label={round.status} variant={roundStatusVariant[round.status]} />
                </div>
                <p className="text-xs text-muted-foreground">
                  {round.date} · {round.interviewer}
                </p>
                {round.feedback ? (
                  <p className="text-xs text-muted-foreground">{round.feedback}</p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
