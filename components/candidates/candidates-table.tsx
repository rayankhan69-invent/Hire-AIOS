"use client";

import * as React from "react";
import Link from "next/link";
import { Search, MoreHorizontal, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusChip } from "@/components/shared/status-chip";
import { EmptyState } from "@/components/shared/empty-state";
import { Pagination } from "@/components/shared/pagination";
import { AiScoreBadge } from "@/components/candidates/ai-score-badge";
import {
  candidatePositions,
  getCandidatePosition,
  getCandidateRecruiter,
  interviewStatuses,
  resumeStatuses,
  type Candidate,
  type InterviewStatus,
  type ResumeStatus,
} from "@/lib/mock/candidates";

const resumeStatusVariant: Record<ResumeStatus, "neutral" | "info" | "warning" | "success"> = {
  "Not submitted": "neutral",
  Received: "info",
  "Under review": "warning",
  Verified: "success",
};

const interviewStatusVariant: Record<InterviewStatus, "neutral" | "info" | "success" | "error"> = {
  "Not scheduled": "neutral",
  Scheduled: "info",
  Completed: "success",
  Cancelled: "error",
};

const PAGE_SIZE = 8;

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(iso)
  );
}

const ALL = "all";

export function CandidatesTable({ candidates }: { candidates: Candidate[] }) {
  const [query, setQuery] = React.useState("");
  const [position, setPosition] = React.useState<string>(ALL);
  const [resumeStatus, setResumeStatus] = React.useState<string>(ALL);
  const [interviewStatus, setInterviewStatus] = React.useState<string>(ALL);
  const [page, setPage] = React.useState(1);

  const filtered = React.useMemo(() => {
    return candidates.filter((candidate) => {
      const matchesQuery =
        query.trim() === "" || candidate.name.toLowerCase().includes(query.trim().toLowerCase());
      const matchesPosition = position === ALL || candidate.jobId === position;
      const matchesResume = resumeStatus === ALL || candidate.resumeStatus === resumeStatus;
      const matchesInterview = interviewStatus === ALL || candidate.interviewStatus === interviewStatus;
      return matchesQuery && matchesPosition && matchesResume && matchesInterview;
    });
  }, [candidates, query, position, resumeStatus, interviewStatus]);

  const pageCount = Math.max(Math.ceil(filtered.length / PAGE_SIZE), 1);
  const currentPage = Math.min(page, pageCount);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const hasActiveFilters =
    query !== "" || position !== ALL || resumeStatus !== ALL || interviewStatus !== ALL;

  function resetFilters() {
    setQuery("");
    setPosition(ALL);
    setResumeStatus(ALL);
    setInterviewStatus(ALL);
    setPage(1);
  }

  // Any filter change should bring the user back to page 1.
  function withReset<T extends (...args: never[]) => void>(fn: T) {
    return (...args: Parameters<T>) => {
      fn(...args);
      setPage(1);
    };
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => withReset(setQuery)(e.target.value)}
            placeholder="Search candidates by name…"
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Select value={position} onValueChange={withReset(setPosition)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All positions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>All positions</SelectItem>
              {candidatePositions.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={resumeStatus} onValueChange={withReset(setResumeStatus)}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Resume status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>All resume statuses</SelectItem>
              {resumeStatuses.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={interviewStatus} onValueChange={withReset(setInterviewStatus)}>
            <SelectTrigger className="w-[170px]">
              <SelectValue placeholder="Interview status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>All interview statuses</SelectItem>
              {interviewStatuses.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasActiveFilters ? (
            <Button variant="ghost" size="sm" onClick={resetFilters} className="text-muted-foreground">
              <X className="h-3.5 w-3.5" />
              Clear
            </Button>
          ) : null}
        </div>
      </div>

      <Card className="overflow-hidden p-0">
        {filtered.length === 0 ? (
          <EmptyState
            icon={Search}
            title="No candidates match your filters"
            description="Try a different search term or clear your filters."
            className="border-none"
          />
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Resume status</TableHead>
                  <TableHead>Interview status</TableHead>
                  <TableHead>AI score</TableHead>
                  <TableHead>Recruiter</TableHead>
                  <TableHead>Date applied</TableHead>
                  <TableHead className="w-10" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginated.map((candidate) => {
                  const recruiter = getCandidateRecruiter(candidate);
                  return (
                    <TableRow key={candidate.id}>
                      <TableCell>
                        <Link href={`/candidates/${candidate.id}`} className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{candidate.initials}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium hover:text-primary hover:underline">
                            {candidate.name}
                          </span>
                        </Link>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {getCandidatePosition(candidate)}
                      </TableCell>
                      <TableCell>
                        <StatusChip
                          label={candidate.resumeStatus}
                          variant={resumeStatusVariant[candidate.resumeStatus]}
                        />
                      </TableCell>
                      <TableCell>
                        <StatusChip
                          label={candidate.interviewStatus}
                          variant={interviewStatusVariant[candidate.interviewStatus]}
                        />
                      </TableCell>
                      <TableCell>
                        <AiScoreBadge score={candidate.aiScore} />
                      </TableCell>
                      <TableCell>
                        {recruiter ? (
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className="text-[10px]">{recruiter.initials}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-muted-foreground">{recruiter.name}</span>
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">Unassigned</span>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDate(candidate.dateApplied)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              aria-label={`Actions for ${candidate.name}`}
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/candidates/${candidate.id}`}>View profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Schedule interview</DropdownMenuItem>
                            <DropdownMenuItem>Move to next stage</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <Pagination
              page={currentPage}
              pageCount={pageCount}
              totalItems={filtered.length}
              pageSize={PAGE_SIZE}
              onPageChange={setPage}
            />
          </>
        )}
      </Card>
    </div>
  );
}
