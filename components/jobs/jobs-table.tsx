"use client";

import * as React from "react";
import Link from "next/link";
import { Search, MoreHorizontal, Users, Sparkles } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { cn } from "@/lib/utils";
import { getHiringManagerById, type Job, type JobStatus } from "@/lib/mock/jobs";

const statusConfig: Record<JobStatus, { label: string; variant: "success" | "neutral" | "error" }> = {
  open: { label: "Open", variant: "success" },
  draft: { label: "Draft", variant: "neutral" },
  closed: { label: "Closed", variant: "error" },
};

const statusFilters: { label: string; value: JobStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Open", value: "open" },
  { label: "Draft", value: "draft" },
  { label: "Closed", value: "closed" },
];

export function JobsTable({ jobs }: { jobs: Job[] }) {
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState<JobStatus | "all">("all");

  const filtered = jobs.filter((job) => {
    const matchesQuery =
      query.trim() === "" ||
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.department.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "all" || job.status === status;
    return matchesQuery && matchesStatus;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search roles or departments…"
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {statusFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setStatus(filter.value)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                status === filter.value
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <Card className="overflow-hidden p-0">
        {filtered.length === 0 ? (
          <EmptyState
            icon={Search}
            title="No roles match your filters"
            description="Try a different search term or clear the status filter."
            className="border-none"
          />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Applicants</TableHead>
                <TableHead>AI shortlisted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Hiring manager</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((job) => {
                const manager = getHiringManagerById(job.hiringManagerId);
                const statusInfo = statusConfig[job.status];
                return (
                  <TableRow key={job.id}>
                    <TableCell>
                      <Link href={`/jobs/${job.id}/edit`} className="block">
                        <p className="font-medium hover:text-primary hover:underline">{job.title}</p>
                        <p className="text-xs text-muted-foreground">{job.department}</p>
                      </Link>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{job.employmentType}</TableCell>
                    <TableCell className="text-muted-foreground">{job.experience}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1.5 text-sm">
                        <Users className="h-3.5 w-3.5 text-muted-foreground" />
                        {job.applicants}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1.5 text-sm">
                        <Sparkles className="h-3.5 w-3.5 text-spark" />
                        {job.aiShortlisted}
                      </span>
                    </TableCell>
                    <TableCell>
                      <StatusChip label={statusInfo.label} variant={statusInfo.variant} />
                    </TableCell>
                    <TableCell>
                      {manager ? (
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-[10px]">{manager.initials}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">{manager.name}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">Unassigned</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8" aria-label={`Actions for ${job.title}`}>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/jobs/${job.id}/edit`}>Edit role</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive focus:text-destructive">
                            Close role
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}
