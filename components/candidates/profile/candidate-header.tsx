import Link from "next/link";
import { ArrowLeft, CalendarClock, MessageSquare, MoreHorizontal, Download } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { StatusChip } from "@/components/shared/status-chip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CandidateProfile } from "@/lib/mock/candidate-profile";

const resumeStatusVariant = {
  "Not submitted": "neutral",
  Received: "info",
  "Under review": "warning",
  Verified: "success",
} as const;

const interviewStatusVariant = {
  "Not scheduled": "neutral",
  Scheduled: "info",
  Completed: "success",
  Cancelled: "error",
} as const;

export function CandidateHeader({ profile }: { profile: CandidateProfile }) {
  const { candidate, position, department } = profile;

  return (
    <div className="space-y-4">
      <Link
        href="/candidates"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to candidates
      </Link>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 shrink-0">
            <AvatarFallback className="text-lg">{candidate.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1.5">
            <h1 className="font-display text-2xl font-semibold tracking-tight">{candidate.name}</h1>
            <p className="text-sm text-muted-foreground">
              {position} · {department}
            </p>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <StatusChip
                label={candidate.resumeStatus}
                variant={resumeStatusVariant[candidate.resumeStatus]}
              />
              <StatusChip
                label={candidate.interviewStatus}
                variant={interviewStatusVariant[candidate.interviewStatus]}
              />
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button variant="outline" size="sm">
            <Download />
            Resume
          </Button>
          <Button variant="outline" size="sm">
            <MessageSquare />
            Message
          </Button>
          <Button size="sm">
            <CalendarClock />
            Schedule interview
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="More actions">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Move to next stage</DropdownMenuItem>
              <DropdownMenuItem>Reassign recruiter</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                Reject candidate
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
